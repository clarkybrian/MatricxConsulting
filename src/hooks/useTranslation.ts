import { useState, useEffect } from 'react'
import { translations, type Language } from '../utils/translations'

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('language', lang)
    // Recharger la page automatiquement pour un changement instantané
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const t = (path: string, params?: Record<string, string | number>): string => {
    const keys = path.split('.')
    let value: unknown = translations[currentLanguage]
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key]
      } else {
        return path
      }
    }
    
    let result = typeof value === 'string' ? value : path
    
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        result = result.replace(`{${key}}`, String(val))
      })
    }
    
    return result
  }

  return {
    t,
    currentLanguage,
    changeLanguage
  }
}