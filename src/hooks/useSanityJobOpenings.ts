import { useState, useEffect } from 'react';
import { sanityClient } from './sanityClient';

/** Offre d'emploi telle que renvoyée par l'API : champs tous optionnels. */
export interface SanityJobOpening {
  _id?: string;
  [key: string]: unknown;
}

export const useSanityJobOpenings = () => {
  const [jobOpenings, setJobOpenings] = useState<SanityJobOpening[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "jobOpening" && (!defined(isActive) || isActive == true)] | order(order asc, publishedAt desc) {
        _id,
        title,
        department,
        location,
        type,
        experience,
        description,
        requirements,
        isActive,
        order,
        publishedAt
      }`)
      .then((data) => {
        setJobOpenings(Array.isArray(data) ? data.filter((j) => j && j._id) : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('[Sanity] Échec du chargement des offres :', err);
        setJobOpenings([]);
        setLoading(false);
      });
  }, []);

  return { jobOpenings, loading };
};
