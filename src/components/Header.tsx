import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Menu, X, Mail, Languages } from 'lucide-react'
import logoMatricx from '../images/matricxlogo.png'

const Header: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="transition-transform duration-200 hover:scale-105">
              <img 
                src={logoMatricx} 
                alt="MatriCx CONSULTING" 
                className="h-14 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation - MatriCx Styling */}
          <div className="hidden lg:flex items-center space-x-6 font-primary">
            <Link to="/" className={`nav-link text-sm font-semibold transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary-50 ${location.pathname === '/' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
              {t('nav.home')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
            <Link to="/about" className={`nav-link text-sm font-semibold transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary-50 ${location.pathname === '/about' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
              {t('nav.about')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
            <div className="relative group">
              <Link to="/services" className={`nav-link text-sm font-semibold transition-all duration-300 flex items-center px-3 py-2 rounded-lg hover:bg-primary-50 ${location.pathname === '/services' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
                {t('nav.services')} <span className="ml-1 transform group-hover:rotate-45 transition-transform duration-300 text-accent-500">+</span>
              </Link>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
            </div>
            <Link to="/contact" className={`nav-link text-sm font-semibold transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary-50 ${location.pathname === '/contact' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
              {t('nav.contact')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
            <Link to="/blog" className={`nav-link text-sm font-semibold transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary-50 ${location.pathname === '/blog' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600'}`}>
              {t('nav.blog')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          </div>

          {/* Actions Section - MatriCx Styling */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 hover:scale-105 font-primary"
            >
              <Languages size={16} className="text-accent-500" />
              <span className="text-sm font-semibold text-secondary-600">{currentLanguage === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <Link to="/contact" className="btn-primary flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-0.5 text-sm font-primary">
              <Mail size={16} />
              <span>{t('contact.cta')}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle - MatriCx Styling */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 text-secondary-600"
          >
            {isMenuOpen ? <X size={22} className="text-secondary-600" /> : <Menu size={22} className="text-secondary-600" />}
          </button>
        </div>

        {/* Mobile Navigation - MatriCx Styling */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/98 backdrop-blur border-t border-primary-100">
            <div className="container-custom py-6 space-y-4 font-primary">
              <Link to="/" className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/about" className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/about' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </Link>
              <Link to="/services" className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/services' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.services')}
              </Link>
              <Link to="/contact" className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/contact' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </Link>
              <Link to="/blog" className={`block py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 ${location.pathname === '/blog' ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.blog')}
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-primary-200 mt-6">
                <span className="text-sm text-secondary-600 font-medium">Langue:</span>
                <button
                  onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 border border-primary-200 transition-all duration-300 hover:scale-105"
                >
                  <Languages size={16} className="text-accent-500" />
                  <span className="text-sm font-semibold text-secondary-600">{currentLanguage === 'fr' ? 'EN' : 'FR'}</span>
                </button>
              </div>
              <Link to="/contact" className="btn-primary w-full flex items-center justify-center space-x-2 mt-6 hover:shadow-lg transform hover:-translate-y-0.5 text-base">
                <Mail size={18} />
                <span>{t('contact.cta')}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header