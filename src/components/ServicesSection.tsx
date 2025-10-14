import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { 
  BarChart3, 
  Search, 
  Settings, 
  GraduationCap, 
  ArrowRight,
  Sparkles
} from 'lucide-react'

const ServicesSection: React.FC = () => {
  const { t } = useTranslation()

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      name: t('services.advisory.name'),
      description: t('services.advisory.description'),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: <Search className="w-8 h-8" />,
      name: t('services.survey.name'),
      description: t('services.survey.description'),
      color: "from-green-500 to-green-600", 
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      name: t('services.technology.name'),
      description: t('services.technology.description'),
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: t('services.training.name'),
      description: t('services.training.description'),
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50", 
      iconColor: "text-orange-600",
      hoverColor: "hover:bg-orange-100"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} className="mr-2" />
            {t('services.header')}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card group cursor-pointer transform hover:scale-105 transition-all duration-500 ${service.bgColor} border-0 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* Service Icon */}
                <div className={`inline-flex p-2 lg:p-4 rounded-2xl ${service.bgColor} ${service.iconColor} mb-3 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg scale-75 lg:scale-100`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <div className="space-y-2 lg:space-y-4">
                  <h3 className="text-sm lg:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-lg">
                    {service.description}
                  </p>
                </div>

                {/* CTA Arrow */}
                <div className="flex items-center justify-between mt-6">
                  <button className="flex items-center space-x-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                    <span>{t('common.learnMore')}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Decorative Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-3xl -z-10`}></div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-2xl -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in animation-delay-600">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('servicesSection.ctaTitle')}
            </h3>
            <p className="text-xl text-gray-600">
              {t('servicesSection.ctaSubtitle')}
            </p>
          </div>
          <button className="btn-primary group inline-flex items-center space-x-2">
            <span>{t('contact.cta')}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100 rounded-full opacity-20 blur-3xl translate-x-1/2 animate-float animation-delay-400"></div>
      </div>
    </section>
  )
}

export default ServicesSection