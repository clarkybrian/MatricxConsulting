import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, Lightbulb, Settings, Database, Cloud, Zap, ChevronDown, CheckCircle2, Users, Target, Sparkles, ArrowUpRight, Monitor, Smartphone, Globe, ShieldCheck } from 'lucide-react'

const Technology: React.FC = () => {
  const { currentLanguage } = useTranslation()
  
  const crmSolutions = [
    { name: "Salesforce", category: "Leader", description: "Solution CRM leader mondiale" },
    { name: "Microsoft", category: "Leader", description: "Écosystème Microsoft Dynamics" },
    { name: "Zendesk", category: "Visionary", description: "Plateforme service client avancée" },
    { name: "ServiceNow", category: "Challenger", description: "Gestion des services IT et business" },
    { name: "Freshworks", category: "Nicheplayer", description: "Suite CRM moderne et intuitive" }
  ]
  
  return (
    <div key={currentLanguage} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-accent-600 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          <div className="relative container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-primary-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
                  <Lightbulb className="w-4 h-4 mr-2 text-primary-400" />
                  Innovation Technologique
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Technology</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Outils de la relation client, innovation, CRM transformation digitale
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Accélérez votre transformation digitale avec nos solutions CRM sur mesure et notre expertise en intégration technologique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group">
                    Découvrir nos solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-white/30 hover:border-primary-400 hover:bg-primary-400/10 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Voir nos intégrations
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src="/src/images/Nouveau dossier/technologie.png" 
                    alt="MatriCx Technology - Solutions technologiques"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Petits carrés flottants superposés */}
                  <div className="absolute top-8 right-8 animate-float">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Database className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                      <h3 className="font-bold text-sm text-gray-900">CRM</h3>
                      <p className="text-xs text-gray-600">Intégration</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 animate-float animation-delay-200">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Cloud className="w-6 h-6 mx-auto mb-2 text-accent-500" />
                      <h3 className="font-bold text-sm text-gray-900">Cloud</h3>
                      <p className="text-xs text-gray-600">Solutions</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 left-6 animate-float animation-delay-400">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Settings className="w-6 h-6 mx-auto mb-2 text-secondary-500" />
                      <h3 className="font-bold text-sm text-gray-900">Custom</h3>
                      <p className="text-xs text-gray-600">Development</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/4 right-12 animate-float animation-delay-600">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Zap className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                      <h3 className="font-bold text-sm text-gray-900">Innovation</h3>
                      <p className="text-xs text-gray-600">Digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nous accompagnons votre transformation digitale
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Pour améliorer votre expérience client, accélérez votre transformation digitale. 
                Nous vous accompagnons dans la mise en place d'une vision 360° du client.
              </p>
            </div>

            {/* Compétences Section */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 mb-16 border border-primary-200">
              <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
                Notre champ de compétence est large et permet ainsi de réduire le nombre de partie prenantes et 
                de couvrir à 360° les champs fonctionnels de vos projets.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <p className="text-lg text-gray-700 text-center">
                  Notre politique tarifaire est l'une des plus compétitives du marché, avec des solutions 
                  <span className="font-bold text-primary-600"> hyper personnalisées</span> de relation client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Solutions CRM Existantes */}
              <div className="space-y-8">
                <div className="bg-primary-500 h-1 w-16 rounded-full"></div>
                <div className="bg-gradient-to-br from-primary-500 to-primary-400 rounded-3xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="bg-white text-primary-500 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold mr-4">1</span>
                    Intégration de solution CRM existantes
                  </h3>
                  <div className="space-y-4">
                    {crmSolutions.map((solution, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-primary-300 rounded-full group-hover:scale-110 transition-transform"></div>
                            <div>
                              <h4 className="font-bold text-white">{solution.name}</h4>
                              <p className="text-white/80 text-sm">{solution.description}</p>
                            </div>
                          </div>
                          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            {solution.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-white/90 text-sm font-medium">(*) selon classification Gartner</p>
                  </div>
                </div>
              </div>

              {/* Développement Sur Mesure */}
              <div className="space-y-8">
                <div className="bg-accent-500 h-1 w-16 rounded-full"></div>
                <div className="bg-gradient-to-br from-accent-500 to-accent-400 rounded-3xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="bg-white text-accent-500 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold mr-4">2</span>
                    Développement et déploiement de solution sur mesure
                  </h3>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                    <p className="text-white/90 leading-relaxed">
                      Vous avez besoin d'une solution de relation client sur mesure correspondant à votre activité. 
                      Nous analysons votre besoin et développons une solution aux fonctionnalités adaptées à vos réalités business.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <Monitor className="w-8 h-8 mx-auto mb-2 text-white" />
                      <h4 className="font-bold text-sm">Web Apps</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <Smartphone className="w-8 h-8 mx-auto mb-2 text-white" />
                      <h4 className="font-bold text-sm">Mobile Apps</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <Globe className="w-8 h-8 mx-auto mb-2 text-white" />
                      <h4 className="font-bold text-sm">API Integration</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-white" />
                      <h4 className="font-bold text-sm">Sécurité</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir MatriCx Technology ?
              </h2>
              <p className="text-xl text-gray-600">
                Une expertise complète pour votre transformation digitale
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Solutions Personnalisées",
                  description: "Chaque solution est conçue spécifiquement pour vos besoins business et votre contexte",
                  color: "primary"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Équipe Experte",
                  description: "Nos développeurs et consultants maîtrisent les dernières technologies CRM",
                  color: "accent"
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Innovation Continue",
                  description: "Nous intégrons les dernières innovations technologiques dans vos solutions",
                  color: "secondary"
                }
              ].map((advantage, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${advantage.color}-100 text-${advantage.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 to-secondary-800 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Notre processus de développement</h2>
              <p className="text-xl text-gray-300">
                Une méthodologie éprouvée pour garantir le succès de votre projet
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Analyse", description: "Audit de vos besoins et contraintes techniques" },
                { step: "02", title: "Conception", description: "Design de l'architecture et des interfaces utilisateur" },
                { step: "03", title: "Développement", description: "Implémentation avec les meilleures pratiques" },
                { step: "04", title: "Déploiement", description: "Mise en production et accompagnement utilisateurs" }
              ].map((phase, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-primary-500 text-black rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                  {index < 3 && (
                    <ArrowUpRight className="w-6 h-6 mx-auto mt-4 text-primary-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-500 to-accent-500 text-black">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <Sparkles className="w-16 h-16 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-6">
                Prêt à révolutionner votre relation client ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Nos experts MatriCx Technology analysent vos besoins et vous proposent la solution technologique parfaite pour votre transformation digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Demander une démonstration
                </button>
                <button className="text-black border-2 border-black/30 hover:border-black hover:bg-black/10 font-medium py-4 px-8 rounded-xl transition-all duration-300">
                  Télécharger notre guide technique
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Technology