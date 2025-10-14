import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { ArrowRight, Target, Headphones, Monitor, GraduationCap, BarChart3, Users, Clock } from 'lucide-react'

const MatrixSection: React.FC = () => {
  const { t } = useTranslation()
  
  // Services avec bordures noires élégantes
  const services = [
    {
      title: t('matrixSection.services.strategy.title'),
      description: t('matrixSection.services.strategy.description'),
      icon: <Target className="w-8 h-8" />
    },
    {
      title: t('matrixSection.services.listening.title'),
      description: t('matrixSection.services.listening.description'),
      icon: <Headphones className="w-8 h-8" />
    },
    {
      title: t('matrixSection.services.digital.title'),
      description: t('matrixSection.services.digital.description'),
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: t('matrixSection.services.training.title'),
      description: t('matrixSection.services.training.description'),
      icon: <GraduationCap className="w-8 h-8" />
    }
  ]

  // Statistiques simples
  const stats = [
    { icon: <BarChart3 className="w-5 h-5" />, value: "150+", label: t('matrixSection.stats.projects') },
    { icon: <Users className="w-5 h-5" />, value: "95%", label: t('matrixSection.stats.satisfaction') },
    { icon: <Clock className="w-5 h-5" />, value: "5 ans", label: t('matrixSection.stats.experience') }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container-custom">
        {/* En-tête dynamique avec badge */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Target size={18} className="mr-2" />
            {t('services.header')}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            {t('matrixSection.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('matrixSection.description')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Statistiques avec couleurs primaires */}
        <div className="flex justify-center items-center space-x-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2 text-primary-600">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary-700">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services avec bordures noires élégantes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white border-2 border-gray-900 p-4 lg:p-8 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:shadow-xl hover:-translate-y-2 hover:border-primary-600">
                <div className="flex justify-center mb-3 lg:mb-6 text-gray-700 group-hover:text-primary-600 transition-colors duration-300 scale-75 lg:scale-100">
                  {service.icon}
                </div>
                <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-2 lg:mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA avec animation */}
        <div className="text-center animate-fade-in animation-delay-600">
          <button className="btn-primary group inline-flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="text-lg">{t('matrixSection.cta')}</span>
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Éléments de fond animés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100 rounded-full opacity-30 blur-3xl translate-x-1/2 animate-float animation-delay-400"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float animation-delay-800"></div>
      </div>
    </section>
  )
}

export default MatrixSection