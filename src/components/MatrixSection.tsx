import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { ArrowRight, Target, Headphones, Monitor, GraduationCap } from 'lucide-react'

const MatrixSection = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [activeIcons, setActiveIcons] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (isVisible) {
      // Activer tous les éléments en même temps
      setActiveIcons([0, 1, 2, 3])
    } else {
      setActiveIcons([])
    }
  }, [isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const services = [
    {
      title: t('matrixSection.services.strategy.title'),
      description: t('matrixSection.services.strategy.description'),
      icon: <Target className="w-8 h-8" />,
      iconPosition: 'top'
    },
    {
      title: "Écoute client",
      description: "Capturer et analyser la voix du client",
      icon: <Headphones className="w-8 h-8" />,
      iconPosition: 'bottom'
    },
    {
      title: t('matrixSection.services.digital.title'),
      description: t('matrixSection.services.digital.description'),
      icon: <Monitor className="w-8 h-8" />,
      iconPosition: 'top'
    },
    {
      title: "Formation CX",
      description: "Développer la culture client de vos équipes",
      icon: <GraduationCap className="w-8 h-8" />,
      iconPosition: 'bottom'
    }
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



        {/* Timeline horizontale animée */}
        <div className="relative max-w-5xl mx-auto px-4 mb-16" ref={sectionRef}>
          {/* Barre de progression fluide */}
          <div className="absolute h-1 bg-gray-200 top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div 
              className={`h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 progress-line ${
                isVisible ? 'active' : ''
              }`}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(253, 195, 0, 0.5))'
              }}
            />
          </div>

          {/* Points de la timeline */}
          <div className="relative grid grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="timeline-segment"
              >
                {/* Point avec icône et contenu */}
                <div className={`flex flex-col ${service.iconPosition === 'top' ? '' : 'flex-col-reverse'}`}>
                  <div className={`flex justify-center ${service.iconPosition === 'top' ? 'mb-8' : 'mt-8'}`}>
                    <div 
                      className={`service-icon rounded-full bg-white border-4 border-primary-500 flex items-center justify-center shadow-lg
                        icon-bounce ${activeIcons.includes(index) ? 'active' : ''}`}
                    >
                      <div className="text-primary-600 transform transition-transform group-hover:scale-110 icon-wrapper">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className={`text-center content-fade ${activeIcons.includes(index) ? 'active' : ''}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 service-title">
                      <span className="full-text">{service.title}</span>
                      <span className="mobile-text">
                        {index === 0 && "Stratégie"}
                        {index === 1 && "Écoute"}
                        {index === 2 && "Digital"}
                        {index === 3 && "Formation"}
                      </span>
                    </h3>
                    <p className="text-sm text-gray-600 service-description">
                      {service.description}
                    </p>
                    <p className="text-xs text-gray-600 mobile-description">
                      {index === 0 && "Vision client"}
                      {index === 1 && "Voix du client"}
                      {index === 2 && "Outils CRM"}
                      {index === 3 && "Culture CX"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA avec animation */}
        <div className="text-center animate-fade-in animation-delay-600">
          <button className="btn-primary group inline-flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="text-lg">{t('matrixSection.cta')}</span>
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Éléments de fond animés */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100 rounded-full opacity-30 blur-3xl translate-x-1/2 animate-float animation-delay-400"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl animate-float animation-delay-800"></div>
        </div>
      </div>
    </section>
  )
}

export default MatrixSection