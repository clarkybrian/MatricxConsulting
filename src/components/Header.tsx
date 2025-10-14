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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logoMatricx} 
                alt="MatriCx CONSULTING" 
                className="h-14 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/" className={`nav-link text-sm font-bold transition-all duration-200 relative group px-2 py-1 rounded-md hover:bg-gray-50 ${location.pathname === '/' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
              {t('nav.home')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className={`nav-link text-sm font-bold transition-all duration-200 relative group px-2 py-1 rounded-md hover:bg-gray-50 ${location.pathname === '/about' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
              {t('nav.about')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <Link to="/services" className={`nav-link text-sm font-bold transition-all duration-200 flex items-center px-2 py-1 rounded-md hover:bg-gray-50 ${location.pathname === '/services' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
                {t('nav.services')} <span className="ml-1 transform group-hover:rotate-45 transition-transform duration-200">+</span>
              </Link>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              {/* Dropdown Menu (à implémenter plus tard) */}
            </div>
            <Link to="/contact" className={`nav-link text-sm font-bold transition-all duration-200 relative group px-2 py-1 rounded-md hover:bg-gray-50 ${location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
              {t('nav.contact')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/blog" className={`nav-link text-sm font-bold transition-all duration-200 relative group px-2 py-1 rounded-md hover:bg-gray-50 ${location.pathname === '/blog' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`}>
              {t('nav.blog')}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              <Languages size={14} />
              <span className="text-sm font-medium text-gray-700">{currentLanguage === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <Link to="/contact" className="btn-primary flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
              <Mail size={15} />
              <span>{t('contact.cta')}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border-t border-gray-200">
            <div className="container-custom py-4 space-y-4">
              <Link to="/" className={`block py-2 text-sm font-medium hover:text-primary-600 ${location.pathname === '/' ? 'text-primary-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/about" className={`block py-2 text-sm font-medium hover:text-primary-600 ${location.pathname === '/about' ? 'text-primary-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </Link>
              <Link to="/services" className={`block py-2 text-sm font-medium hover:text-primary-600 ${location.pathname === '/services' ? 'text-primary-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.services')}
              </Link>
              <Link to="/contact" className={`block py-2 text-sm font-medium hover:text-primary-600 ${location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </Link>
              <Link to="/blog" className={`block py-2 text-sm font-medium hover:text-primary-600 ${location.pathname === '/blog' ? 'text-primary-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                {t('nav.blog')}
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-4">
                <span className="text-sm text-gray-600">Langue:</span>
                <button
                  onClick={() => changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-105"
                >
                  <Languages size={14} />
                  <span className="text-sm font-medium">{currentLanguage === 'fr' ? 'EN' : 'FR'}</span>
                </button>
              </div>
              <Link to="/contact" className="btn-primary w-full flex items-center justify-center space-x-2 mt-4 hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                <Mail size={15} />
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