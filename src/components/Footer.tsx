import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import Chatbot from './Chatbot'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Twitter,
  Heart 
} from 'lucide-react'

const Footer: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {t('footer.company')}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-white mb-4">{t('footer.contactInfo')}</h4>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-secondary-400" />
                <span>{t('contact.address')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-secondary-400" />
                <span>{t('contact.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-secondary-400" />
                <span>{t('contact.email')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">{t('footer.quickLinks')}</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                {t('nav.home')}
              </a>
              <a href="#about" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                {t('nav.about')}
              </a>
              <a href="#services" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                {t('nav.services')}
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                {t('nav.contact')}
              </a>
              <a href="#blog" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                {t('nav.blog')}
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">Nos Services</h4>
            <nav className="space-y-3">
              <a href="#advisory" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                MatriCx Advisory
              </a>
              <a href="#survey" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                MatriCx Survey
              </a>
              <a href="#technology" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                MatriCx Technology
              </a>
              <a href="#training" className="block text-gray-300 hover:text-secondary-400 transition-colors duration-200">
                MatriCx Training
              </a>
            </nav>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">{t('footer.followUs')} :</span>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/people/La-Voix-du-Client-au-237/100086597136441/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  title="Suivez-nous sur Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/matricx-consulting/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  title="Suivez-nous sur LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://x.com/voix_au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  title="Suivez-nous sur X (Twitter)"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Langues disponibles :</span>
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                  currentLanguage === 'fr' 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                  currentLanguage === 'en' 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>{t('footer.copyright')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>{t('footer.madeWith')}</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>{t('footer.by')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligent Chatbot */}
      <Chatbot />
    </footer>
  )
}

export default Footer