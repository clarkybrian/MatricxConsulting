import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import { Shield, Heart, Sparkles, ArrowRight } from 'lucide-react'

const ValuesSection: React.FC = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      name: t('values.integrity.name'),
      description: t('values.integrity.description'),
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: t('values.engagement.name'),
      description: t('values.engagement.description'),
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: t('values.authenticity.name'),
      description: t('values.authenticity.description'),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
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

        {/* Values Grid - 2 premières en ligne, 3ème centrée sur mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 mb-16">
          {/* Première ligne mobile : 2 éléments côte à côte */}
          <div className="flex gap-4 lg:contents">
            {values.slice(0, 2).map((value, index) => (
              <div
                key={index}
                className={`card group text-center hover:scale-105 transform transition-all duration-500 ${value.bgColor} border-0 animate-fade-in flex-1 lg:flex-none`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Value Icon */}
                <div className={`inline-flex p-2 lg:p-4 rounded-2xl ${value.bgColor} ${value.iconColor} mb-3 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto scale-75 lg:scale-100`}>
                  {value.icon}
                </div>

                {/* Value Content */}
                <div className="space-y-2 lg:space-y-4">
                  <h3 className="text-sm lg:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {value.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 3ème élément centré sur mobile */}
          <div className="flex justify-center lg:contents">
            <div
              className={`card group text-center hover:scale-105 transform transition-all duration-500 ${values[2].bgColor} border-0 animate-fade-in w-1/2 lg:w-full`}
              style={{ animationDelay: '400ms' }}
            >
              {/* Value Icon */}
              <div className={`inline-flex p-2 lg:p-4 rounded-2xl ${values[2].bgColor} ${values[2].iconColor} mb-3 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto scale-75 lg:scale-100`}>
                {values[2].icon}
              </div>

              {/* Value Content */}
              <div className="space-y-2 lg:space-y-4">
                <h3 className="text-sm lg:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {values[2].name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs lg:text-base">
                  {values[2].description}
                </p>
              </div>

              {/* Decorative Background */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${values[2].color} opacity-10 rounded-bl-3xl`}></div>
            </div>
          </div>
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