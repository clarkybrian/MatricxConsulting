import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, Target, BarChart3, Settings, GraduationCap } from 'lucide-react'
import servicesImage from '../images/services.png'

const Services: React.FC = () => {
  const { t, currentLanguage } = useTranslation()

  const getServiceFeatures = (serviceKey: string) => {
    const features = currentLanguage === 'fr' ? {
      advisory: ['Conseil stratégique', 'Pilotage de projets', 'Amélioration continue', 'Optimisation processus'],
      survey: ['Études de marché', 'Analyses concurrentielles', 'Connaissance client', 'Stratégie de marque'],
      technology: ['Outils CRM', 'Transformation digitale', 'Innovation technologique', 'Solutions sur mesure'],
      training: ['Formation sur mesure', 'Certificats CX', 'Culture client', 'Leadership CX']
    } : {
      advisory: ['Strategic consulting', 'Project management', 'Continuous improvement', 'Process optimization'],
      survey: ['Market research', 'Competitive analysis', 'Customer knowledge', 'Brand strategy'],
      technology: ['CRM tools', 'Digital transformation', 'Technological innovation', 'Custom solutions'],
      training: ['Custom training', 'CX certificates', 'Customer culture', 'CX Leadership']
    }
    return features[serviceKey as keyof typeof features] || []
  }

  const services = [
    {
      id: 'advisory',
      name: t('services.advisory.name'),
      description: t('services.advisory.description'),
      icon: Target,
      color: 'primary',
      route: '/services/advisory',
      features: getServiceFeatures('advisory')
    },
    {
      id: 'survey',
      name: t('services.survey.name'),
      description: t('services.survey.description'),
      icon: BarChart3,
      color: 'accent',
      route: '/services/survey',
      features: getServiceFeatures('survey')
    },
    {
      id: 'technology',
      name: t('services.technology.name'),
      description: t('services.technology.description'),
      icon: Settings,
      color: 'secondary',
      route: '/services/technology',
      features: getServiceFeatures('technology')
    },
    {
      id: 'training',
      name: t('services.training.name'),
      description: t('services.training.description'),
      icon: GraduationCap,
      color: 'tertiary',
      route: '/services/training',
      features: getServiceFeatures('training')
    }
  ]

  return (
    <div key={currentLanguage} className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                  {t('services.header')}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 font-primary">
                  {t('services.title')}
                </h1>
                <p className="text-xl text-secondary-600 mb-8 font-secondary">
                  {t('services.subtitle')}
                </p>
              </div>
              
              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={servicesImage} 
                  alt="MatriCx Services" 
                  className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl transform scale-120"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <div key={service.id} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 ${
                    service.color === 'primary' ? 'border-primary-500' :
                    service.color === 'accent' ? 'border-accent-500' :
                    service.color === 'secondary' ? 'border-secondary-500' : 'border-gray-500'
                  }`}>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        service.color === 'primary' ? 'bg-primary-100' :
                        service.color === 'accent' ? 'bg-accent-100' :
                        service.color === 'secondary' ? 'bg-secondary-100' : 'bg-gray-100'
                      }`}>
                        <IconComponent size={32} className={`${
                          service.color === 'primary' ? 'text-primary-600' :
                          service.color === 'accent' ? 'text-accent-600' :
                          service.color === 'secondary' ? 'text-secondary-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-3 font-primary">
                          {service.name}
                        </h3>
                        <p className="text-secondary-600 font-secondary">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-secondary-700 mb-4 uppercase tracking-wide">
                        {t('services.ourExpertises')}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-secondary-600 font-secondary">
                            <div className={`w-2 h-2 rounded-full mr-3 ${
                              service.color === 'primary' ? 'bg-primary-500' :
                              service.color === 'accent' ? 'bg-accent-500' :
                              service.color === 'secondary' ? 'bg-secondary-500' : 'bg-gray-500'
                            }`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to={service.route}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-gray-800 hover:from-yellow-600 hover:to-gray-900 text-white font-bold rounded-lg transition-all duration-300 font-primary group transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span>{t('services.learnMore')}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-primary">
              {t('servicesSection.ctaTitle')}
            </h2>
            <p className="text-xl text-primary-100 mb-8 font-secondary max-w-2xl mx-auto">
              {t('servicesSection.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 font-primary">
                {t('contact.cta')}
              </Link>
              <Link to="/" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 font-primary">
                {currentLanguage === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Services