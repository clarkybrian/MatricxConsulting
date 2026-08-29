import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ozf76xbs',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-11-19',
  useCdn: true,
  perspective: 'published',
});

const builder = imageUrlBuilder(sanityClient);

/** Source d'image Sanity : référence d'asset, objet image, ou URL brute. */
export type SanityImageLike =
  | string
  | { asset?: { _ref?: string; _id?: string }; [key: string]: unknown }
  | null
  | undefined;

export const urlFor = (source: any) => builder.image(source);

/**
 * Vrai uniquement si l'image Sanity porte réellement un asset.
 * Un champ image dont seul le "alt" est rempli existe côté API
 * ({ _type: 'image', alt: '...' }) mais n'a aucune URL résolvable.
 */
export const hasImageAsset = (source: SanityImageLike): boolean => {
  if (typeof source === 'string') return source.length > 0;
  if (!source || typeof source !== 'object') return false;
  const asset = (source as { asset?: { _ref?: string; _id?: string } }).asset;
  return Boolean(asset?._ref || asset?._id);
};

/**
 * Construit une URL d'image Sanity sans jamais lever d'exception.
 * urlFor() throw ("Unable to resolve image URL from source") quand l'asset
 * est absent : appelé pendant le render, ce throw démonte tout l'arbre React
 * et laisse une page blanche. On renvoie null et l'appelant utilise son fallback.
 */
export const safeImageUrl = (
  source: SanityImageLike,
  transform?: (b: ReturnType<typeof urlFor>) => ReturnType<typeof urlFor>
): string | null => {
  if (!hasImageAsset(source)) return null;
  try {
    const b = urlFor(source);
    return (transform ? transform(b) : b).url();
  } catch {
    return null;
  }
};
