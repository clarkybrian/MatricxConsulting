import { useState, useEffect } from 'react';
import { sanityClient } from './sanityClient';

/** Document blogPost tel que renvoyé par l'API : tous les champs sont optionnels. */
export interface SanityBlogPost {
  _id?: string;
  slug?: { current?: string };
  [key: string]: unknown;
}

// Champs projetés. `content` est le champ réellement utilisé par le Studio ;
// `body` est conservé pour les anciens documents.
const POST_FIELDS = `
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category,
  readTime,
  author,
  tags,
  mainImage,
  body,
  content
`;

/**
 * Un document publié peut être incomplet (titre ou slug vide) : le Studio
 * n'impose pas tous les champs. Sans ce filtre, un article à moitié rempli
 * fait planter le rendu de la liste.
 */
const isRenderablePost = (post: SanityBlogPost | null | undefined): boolean =>
  Boolean(post && post._id && !post._id.startsWith('drafts.') && post.slug?.current);

export const useSanityBlogPosts = () => {
  const [posts, setPosts] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch(`*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {${POST_FIELDS}}`)
      .then((data) => {
        if (cancelled) return;
        setPosts(Array.isArray(data) ? data.filter(isRenderablePost) : []);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('[Sanity] Échec du chargement des articles :', err);
        setPosts([]);
        setError(err?.message ?? 'Erreur inconnue');
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error };
};

export const useSanityBlogPost = (slug: string) => {
  const [post, setPost] = useState<SanityBlogPost | null>(null);
  const [loading, setLoading] = useState(Boolean(slug));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    sanityClient
      // slug passé en paramètre GROQ : une interpolation de chaîne casse la
      // requête dès que le slug contient un guillemet.
      .fetch(`*[_type == "blogPost" && slug.current == $slug][0]{${POST_FIELDS}}`, { slug })
      .then((data) => {
        if (cancelled) return;
        setPost(isRenderablePost(data) ? data : null);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('[Sanity] Échec du chargement de l\'article :', err);
        setPost(null);
        setError(err?.message ?? 'Erreur inconnue');
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { post, loading, error };
};
