import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, Briefcase, Target, TrendingUp, Users, BarChart3, Shield, Lightbulb, CheckCircle2, ChevronDown, ArrowUpRight, Settings, MessageSquare, Zap, Award, AlertTriangle } from 'lucide-react'

const Advisory: React.FC = () => {
  const { currentLanguage } = useTranslation()
  
  const advisoryQuestions = [
    "Avez-vous défini votre vision, vos objectifs Expérience Client ?",
    "Avez-vous défini votre stratégie de canal?",
    "Votre organisation est-elle alignée sur ces objectifs et êtes-vous prêt pour l'Expérience Client ?",
    "Avez-vous effectué un design du/des parcours de vos clients et identifié le parcours idéal à travers chaque point de contact et chaque canal ?",
    "Votre dispositif de mesure est-il un moteur d'action et d'impact commercial positif ?",
    "Avez-vous mis en place une feuille de route / stratégie Expérience Client et un modèle de gouvernance Expérience Client solide ?",
    "Que savez vous de vos clients? Leurs besoins, leurs attentes?"
  ]

  const advisoryServices = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Audit & évaluation de maturité Expérience Client",
      subtitle: "Objectifs business Vs état des lieux",
      color: "primary"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Définition de votre stratégie de canal et mise en place de contact center",
      subtitle: "",
      color: "accent"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pilotage de la performance de l'Expérience Client",
      subtitle: "",
      color: "secondary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expérience collaborateur et culture centrée client",
      subtitle: "",
      color: "primary"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Définition et déploiement de programmes Voix du Client",
      subtitle: "",
      color: "accent"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Amélioration continue et optimisation",
      subtitle: "",
      color: "secondary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Évaluation du ROI de votre programme Expérience Client",
      subtitle: "",
      color: "primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimisation des parcours clients",
      subtitle: "",
      color: "accent"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Expérience Client",
      subtitle: "Pratiques, outils, transformation",
      color: "secondary"
    }
  ]

  const implementationSteps = [
    {
      title: "Compréhension de votre besoin & environnement",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Diagnostic & évaluation de maturité", 
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Design & implémentation",
      subtitle: "Collaboration & co-construction",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Mesure et impact ROI",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ]

  const fiveLevers = [
    {
      title: "Organisation",
      content: [
        "Il faut tendre vers une organisation qui va permettre :",
        "1. de décloisonner les silos et favoriser le travail collaboratif (co-construction)",
        "2. de mettre au centre des attentions le client."
      ],
      color: "primary"
    },
    {
      title: "Gouvernance & culture client",
      content: [
        "L'expérience client est une affaire de tous, transverse à l'organisation, cela nécessite la mise en place d'une gouvernance spécifique portée au niveau Top Management"
      ],
      color: "accent",
      hasAlert: true
    },
    {
      title: "Voix du Client",
      content: [
        "La gouvernance de l'expérience client ne pourra se faire sans dispositif qui sera décliné à tous les niveaux hiérarchiques.",
        "Ce dispositif sera un input important pour le design de l'expérience via de nouveaux parcours"
      ],
      color: "secondary"
    },
    {
      title: "Parcours clients",
      content: [
        "Apporter de nouvelles approches pour designer les parcours clients, de ces derniers découleront ensuite :",
        "1. Les processus",
        "2. Les procédures", 
        "3. Les modes opératoires"
      ],
      color: "primary",
      hasLoop: true
    },
    {
      title: "Mesure et Analyse",
      content: [
        "Disposer des KPI's et des outils d'analyse nécessaires à l'amélioration continue des parcours",
        "1. Indicateurs d'expérience vécue",
        "2. Indicateurs d'expérience délivrée",
        "3. Efficacité des parcours / processus clients"
      ],
      color: "accent"
    }
  ]
  
  return (
    <div key={currentLanguage} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Conseil Stratégique
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Advisory</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Conseil, stratégie, pilotage, amélioration continue, optimisation, CXM
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Nos consultants experts vous accompagnent dans la définition et l'implémentation de votre stratégie d'expérience client pour créer un avantage concurrentiel durable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group">
                    Découvrir notre approche
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-white/30 hover:border-primary-400 hover:bg-primary-400/10 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Évaluer votre maturité CX
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src="/src/images/Nouveau dossier/advisory (2).png" 
                    alt="MatriCx Advisory - Conseil stratégique"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Petits carrés flottants superposés */}
                  <div className="absolute top-8 right-8 animate-float">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Shield className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                      <h3 className="font-bold text-sm text-gray-900">Stratégie</h3>
                      <p className="text-xs text-gray-600">CX</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 animate-float animation-delay-200">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Target className="w-6 h-6 mx-auto mb-2 text-accent-500" />
                      <h3 className="font-bold text-sm text-gray-900">Pilotage</h3>
                      <p className="text-xs text-gray-600">Performance</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 left-10 animate-float animation-delay-400">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2 text-secondary-500" />
                      <h3 className="font-bold text-sm text-gray-900">ROI</h3>
                      <p className="text-xs text-gray-600">Mesurable</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/4 right-12 animate-float animation-delay-600">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Lightbulb className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                      <h3 className="font-bold text-sm text-gray-900">Innovation</h3>
                      <p className="text-xs text-gray-600">Continue</p>
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

        {/* Questions Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary-500 to-primary-400 rounded-3xl p-8 text-black mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">MatriCx advisory</h2>
                <div className="space-y-4">
                  {advisoryQuestions.map((question, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <p className="font-medium text-black">{question}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-primary-50 border border-primary-200 rounded-3xl p-8">
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                  Nous proposons une gamme de services : de l'évaluation votre maturité Expérience Client à la conception de systèmes de pilotage, 
                  en passant par une cartographie des parcours clients et employés.
                </p>
                <div className="bg-white rounded-2xl p-6 border-l-4 border-primary-500">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    Définissez une vision claire de l'expérience voulue et délivrée par votre entreprise. 
                    Une expérience qui respecte vos promesses clients et engagent vos collaborateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Nos services de conseil</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {advisoryServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${service.color}-100 text-${service.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{service.title}</h3>
                    {service.subtitle && (
                      <p className="text-primary-600 font-medium text-sm italic">{service.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modèle d'implémentation */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Modèle d'implémentation d'un programme Expérience Client de MatriCx (Engage more)
              </h2>
            </div>

            <div className="relative">
              <div className="flex justify-center items-center mb-12">
                <div className="bg-primary-500 text-black rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    {step.subtitle && (
                      <p className="text-primary-600 font-medium text-sm">{step.subtitle}</p>
                    )}
                    {index < 3 && (
                      <ArrowUpRight className="w-6 h-6 mx-auto mt-4 text-primary-400 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 mt-16 border border-primary-200">
                <p className="text-center text-lg font-medium text-gray-800 max-w-4xl mx-auto">
                  Pour bâtir un programme Expérience Client innovant et réaliste, vous avez besoin d'une approche différente et adaptée à votre contexte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Leviers Complémentaires */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                L'amélioration de l'expérience client repose sur 5 leviers complémentaires
              </h2>
            </div>

            <div className="grid gap-8">
              {fiveLevers.map((lever, index) => (
                <div key={index} className={`bg-gradient-to-br ${
                  lever.color === 'primary' ? 'from-primary-500 to-primary-400' : 
                  lever.color === 'accent' ? 'from-accent-500 to-accent-400' : 
                  'from-secondary-500 to-secondary-400'
                } rounded-3xl p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  
                  <h3 className="text-2xl font-bold mb-6">{lever.title}</h3>
                  
                  {lever.hasAlert && (
                    <div className="flex justify-center mb-6">
                      <AlertTriangle className="w-8 h-8 text-red-300" />
                    </div>
                  )}

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    {lever.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-white/90 leading-relaxed mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {lever.hasLoop && (
                    <div className="flex justify-center mt-6">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                        <span className="text-sm font-medium">Boucle d'amélioration continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-8 text-primary-500" />
              <h2 className="text-4xl font-bold mb-6">
                Transformez votre vision client en réalité business
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Nos consultants MatriCx Advisory vous accompagnent de la stratégie à l'implémentation 
                pour créer une expérience client différenciante et génératrice de valeur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Évaluer votre maturité CX gratuitement
                </button>
                <button className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-medium py-4 px-8 rounded-xl transition-all duration-300">
                  Télécharger notre framework CX
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

export default Advisory