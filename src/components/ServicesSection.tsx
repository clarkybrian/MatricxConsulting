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
      icon: <BarChart3 className="w-10 h-10" />,
      name: t('services.advisory.name'),
      description: t('services.advisory.description'),
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100",
      iconBg: "bg-white",
      iconColor: "text-primary-600"
    },
    {
      icon: <Search className="w-10 h-10" />,
      name: t('services.survey.name'),
      description: t('services.survey.description'),
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100", 
      iconBg: "bg-white",
      iconColor: "text-primary-600"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      name: t('services.technology.name'),
      description: t('services.technology.description'),
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100",
      iconBg: "bg-white",
      iconColor: "text-primary-600"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      name: t('services.training.name'),
      description: t('services.training.description'),
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100", 
      iconBg: "bg-white",
      iconColor: "text-primary-600"
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

        {/* Services MatriCx - Design élégant style Revolut */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`${service.bgColor} p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100`}>
                {/* Icône dans un cercle avec couleurs MatriCx */}
                <div className={`${service.iconBg} ${service.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  {service.icon}
                </div>
                
                {/* Titre avec police Helvetica */}
                <h3 className="text-xl font-bold text-secondary-800 mb-4 font-primary">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="text-secondary-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Bouton "En savoir plus" style MatriCx */}
                <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300">
                  <span className="font-primary">{t('common.learnMore')}</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
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