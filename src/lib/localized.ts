/**
 * Lecture tolérante des champs localisés Sanity.
 *
 * Le Studio n'impose pas qu'un champ localisé soit rempli dans les deux
 * langues, ni même qu'il existe. Un accès direct du type
 * `doc.title[lang] || doc.title.fr` lève dès que `title` est absent — et une
 * exception pendant le render démonte tout l'arbre React, ce qui se traduit
 * par une page entièrement blanche.
 *
 * Ces helpers renvoient toujours une valeur affichable.
 */

export type Lang = 'fr' | 'en'

/** Objet { fr, en }, chaîne simple, ou rien du tout. */
export type LocalizedField = { fr?: string; en?: string } | string | null | undefined

/**
 * Renvoie le texte dans la langue demandée, avec repli sur l'autre langue
 * puis sur `fallback`. Ne lève jamais.
 */
export const localizedText = (field: LocalizedField, lang: Lang, fallback = ''): string => {
  if (field == null) return fallback
  if (typeof field === 'string') return field || fallback
  if (typeof field !== 'object') return fallback
  const obj = field as { fr?: string; en?: string }
  return obj[lang] || obj.fr || obj.en || fallback
}

/**
 * Variante pour les champs qui peuvent contenir du Portable Text
 * (tableau de blocs) au lieu d'une chaîne : renvoie le texte concaténé.
 */
export const localizedPlainText = (field: any, lang: Lang, fallback = ''): string => {
  if (field == null) return fallback
  const value = typeof field === 'object' && !Array.isArray(field)
    ? (field[lang] ?? field.fr ?? field.en)
    : field

  if (typeof value === 'string') return value || fallback
  if (Array.isArray(value)) {
    const text = value
      .map((block: any) =>
        Array.isArray(block?.children)
          ? block.children.map((c: any) => c?.text ?? '').join('')
          : ''
      )
      .join(' ')
      .trim()
    return text || fallback
  }
  return fallback
}

/** Date affichable, ou chaîne vide si la valeur est absente ou invalide. */
export const formatDateSafe = (
  value: string | null | undefined,
  lang: Lang,
  options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }
): string => {
  if (!value) return ''
  const d = new Date(value)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', options)
}
