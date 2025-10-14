import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Mail, ArrowRight, TrendingUp } from 'lucide-react'
import ImageCarousel from './ImageCarousel'
import AnimatedText from './AnimatedText'

const HeroSection: React.FC = () => {
  const { t, currentLanguage } = useTranslation()

  // Mots qui vont s'animer selon la langue
  const animatedWords = currentLanguage === 'fr' 
    ? ['PROFESSIONNELLE', 'DIGITALE', 'CLIENT', 'BUSINESS', 'STRATÉGIQUE']
    : ['PROFESSIONAL', 'DIGITAL', 'CUSTOMER', 'BUSINESS', 'STRATEGIC']

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden pt-20 pb-8 lg:pb-0">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-100 rounded-full opacity-20 blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Badge en haut pour mobile, intégré dans le texte pour desktop */}
        <div className="block lg:hidden mb-6 text-center animate-fade-in">
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            <TrendingUp size={16} className="mr-2" />
            {t('hero.badge')}
          </div>
        </div>

        {/* Layout Mobile: Carousel puis texte | Desktop: Texte à gauche, Carousel à droite */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Carousel - Ordre 1 mobile, ordre 2 desktop */}
          <div className="relative animate-fade-in animation-delay-200 order-1 lg:order-2 w-full">
            <ImageCarousel />
          </div>

          {/* Content - Ordre 2 mobile, ordre 1 desktop */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              {/* Badge pour desktop uniquement */}
              <div className="hidden lg:inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp size={16} className="mr-2" />
                {t('hero.badge')}
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900">
                <span className="block">{t('hero.transformText')}</span>
                <span className="block">{t('hero.experienceText')}</span>
                <AnimatedText
                  baseText=""
                  animatedWords={animatedWords}
                  className="block"
                />
                <span className="block gradient-text">{t('hero.advantageText')}</span>
                <span className="block">{t('hero.competitiveText')}</span>
              </h1>
              
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2 group">
                <Mail size={20} />
                <span>{t('hero.cta')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link to="/about" className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-all duration-300">
                <span>{t('common.learnMore')}</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary-600">100+</div>
                <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary-600">5 ans</div>
                <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-primary-600">95%</div>
                <div className="text-xs lg:text-sm text-gray-600">{t('hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Masqué sur mobile */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection