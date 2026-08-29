import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from '../hooks/useTranslation'
import { Home, BookOpen } from 'lucide-react'

/**
 * Page 404.
 *
 * La réécriture SPA renvoie index.html pour toute URL inconnue : sans cette
 * route attrape-tout, une adresse erronée (ancien lien, slug d'article
 * supprimé, faute de frappe) n'affichait rien du tout.
 */
const NotFound: React.FC = () => {
  const { currentLanguage } = useTranslation()
  const fr = currentLanguage === 'fr'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <p className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            404
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {fr ? 'Cette page n’existe pas' : 'This page does not exist'}
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            {fr
              ? 'Le lien est peut-être obsolète ou l’adresse comporte une erreur.'
              : 'The link may be outdated, or the address contains a typo.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Home size={18} />
              {fr ? 'Retour à l’accueil' : 'Back to home'}
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <BookOpen size={18} />
              {fr ? 'Voir le blog' : 'Visit the blog'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
