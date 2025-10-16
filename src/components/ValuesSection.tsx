import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Shield, Heart, Sparkles, Lightbulb, ArrowRight } from 'lucide-react'

const ValuesSection: React.FC = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      name: t('values.innovation.name'),
      description: t('values.innovation.description'),
      color: "bg-yellow-500",
      bgColor: "bg-yellow-500",
      iconColor: "text-white"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: t('values.integrity.name'),
      description: t('values.integrity.description'),
      color: "bg-blue-500",
      bgColor: "bg-blue-500",
      iconColor: "text-white"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: t('values.engagement.name'),
      description: t('values.engagement.description'),
      color: "bg-white border-2 border-gray-300",
      bgColor: "bg-white border-2 border-gray-300",
      iconColor: "text-gray-800"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: t('values.authenticity.name'),
      description: t('values.authenticity.description'),
      color: "bg-gray-900",
      bgColor: "bg-gray-900",
      iconColor: "text-white"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart size={16} className="mr-2" />
            {t('values.badge')}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('values.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('values.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Values Grid - 4 valeurs en grille */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card group text-center hover:scale-105 transform transition-all duration-500 ${value.bgColor} border-0 animate-fade-in h-56 sm:h-60 md:h-64 lg:h-72 flex flex-col justify-center overflow-hidden p-3 sm:p-4 lg:p-6`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Value Icon */}
              <div className={`inline-flex p-1 sm:p-2 lg:p-4 rounded-xl lg:rounded-2xl ${value.bgColor} ${value.iconColor} mb-2 sm:mb-3 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto flex-shrink-0`}>
                <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex-shrink-0">
                  {value.icon}
                </div>
              </div>

              {/* Value Content */}
              <div className="flex flex-col flex-grow overflow-hidden">
                <h3 className={`text-xs sm:text-sm lg:text-2xl font-bold ${
                  value.bgColor.includes('white') || value.bgColor.includes('yellow') 
                    ? 'text-gray-900 group-hover:text-black' 
                    : 'text-white group-hover:text-primary-600'
                } transition-colors duration-300 mb-1 sm:mb-2 lg:mb-4`}>
                  <span className="block truncate px-1">
                    {value.name}
                  </span>
                </h3>
                <div className="flex-grow flex items-center justify-center overflow-hidden">
                  <p className={`leading-relaxed text-xs sm:text-sm lg:text-base ${value.bgColor.includes('white') || value.bgColor.includes('yellow') ? 'text-gray-600' : 'text-gray-200'} overflow-hidden line-clamp-4 sm:line-clamp-5 lg:line-clamp-6 px-1 text-center`}>
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl p-12 text-white relative overflow-hidden animate-fade-in animation-delay-600">
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('contact.title')}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t('contact.subtitle')}
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
            >
              <span>{t('contact.cta')}</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 animate-float"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-secondary-100 rounded-full opacity-20 blur-3xl animate-float animation-delay-400"></div>
      </div>
    </section>
  )
}

export default ValuesSection