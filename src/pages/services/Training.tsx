import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, GraduationCap, Users, CheckCircle2, Award, BookOpen, Target, TrendingUp, ChevronDown, Clock, Star, FileText, MessageCircle, BarChart3, Lightbulb } from 'lucide-react'

const Training: React.FC = () => {
  const { currentLanguage } = useTranslation()
  
  const trainingPrograms = [
    "Les fondamentaux de la relation client",
    "Comprendre l'Expérience client et ses enjeux", 
    "Développer la culture client dans son entreprise",
    "Piloter la performance de l'Expérience client",
    "Bâtir sa stratégie digitale",
    "Management de la Qualité",
    "Mettre en place et piloter la Voix du Client",
    "Définir et bâtir sa stratégie de canal",
    "Plan marketing / commercial",
    "Communication digitale",
    "Stratégie de marque"
  ]

  const evaluationCriteria = [
    { title: "Le contenu", desc: "respect du programme et des objectifs" },
    { title: "L'animation", desc: "expertise du formateur, réponses aux questions, interactions avec les apprenants" },
    { title: "La pédagogie", desc: "atteinte des objectifs, équilibre entre théorie et pratique, prise en compte du contexte professionnel" },
    { title: "La logistique", desc: "organisation et planning, qualité de l'accueil, qualité des outils digitaux déployés" }
  ]
  
  return (
    <div key={currentLanguage} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary-800 via-secondary-700 to-primary-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Formation & Certification
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Training</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Leader CX, formation sur mesure, certificats CX, culture centrée client
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Développez l'excellence de vos équipes avec nos programmes de formation certifiants en expérience client et culture centrée client.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group">
                    Explorer nos formations
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-white/30 hover:border-primary-400 hover:bg-primary-400/10 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Catalogue de formations
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src="/src/images/Nouveau dossier/Training2.png" 
                    alt="MatriCx Training - Formation et certification"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Petits carrés flottants superposés */}
                  <div className="absolute top-6 right-6 animate-float">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Users className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                      <h3 className="font-bold text-sm text-gray-900">Formation</h3>
                      <p className="text-xs text-gray-600">Interactive</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 animate-float animation-delay-200">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Award className="w-6 h-6 mx-auto mb-2 text-accent-500" />
                      <h3 className="font-bold text-sm text-gray-900">Certification</h3>
                      <p className="text-xs text-gray-600">Reconnue</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-6 transform -translate-y-1/2 animate-float animation-delay-400">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <Target className="w-6 h-6 mx-auto mb-2 text-secondary-500" />
                      <h3 className="font-bold text-sm text-gray-900">Sur mesure</h3>
                      <p className="text-xs text-gray-600">Personnalisée</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-10 animate-float animation-delay-600">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/20">
                      <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-500" />
                      <h3 className="font-bold text-sm text-gray-900">Performance</h3>
                      <p className="text-xs text-gray-600">Mesurable</p>
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

        {/* Modèle de Formation - 3 Étapes */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre modèle de formation</h2>
              <p className="text-xl text-gray-600">
                Une approche structurée en 3 étapes pour garantir l'acquisition durable des compétences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Étape 1 - Apprentissage */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-400 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="bg-white text-primary-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <h3 className="text-2xl font-bold mb-6">Apprentissage</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Entretiens & collecte des attentes des apprenants</h4>
                    <p className="text-white/80 text-sm">Formalisation des besoins</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Évaluation progressive de l'acquisition des compétences</h4>
                    <p className="text-white/80 text-sm">en points d'étapes</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Bilan de la formation</h4>
                    <p className="text-white/80 text-sm">Synthèse des acquis</p>
                  </div>
                </div>
              </div>

              {/* Étape 2 - Évaluation */}
              <div className="bg-gradient-to-br from-accent-500 to-accent-400 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="bg-white text-accent-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <h3 className="text-2xl font-bold mb-6">Évaluation</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Quizz d'évaluation des connaissances</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Maîtrise des acquis :</h4>
                    <p className="text-white/80 text-sm">études de cas, tests, cas pratiques, exposés, etc.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="font-bold mb-2">Évaluation de la montée en charge</h4>
                    <ul className="text-white/80 text-sm mt-2 space-y-1">
                      <li>→ Connaissances acquises</li>
                      <li>→ Plan d'action personnel</li>
                      <li>→ Transfert opérationnel des acquis à J+3 mois</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Étape 3 - Certification */}
              <div className="bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="bg-white text-secondary-700 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-6">3</div>
                <h3 className="text-2xl font-bold mb-6">Quelques formations</h3>
                
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {trainingPrograms.map((program, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{program}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Évaluation E-learning */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-accent-500 to-accent-400 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">À l'issue de chaque formation, une E-évaluation est envoyée aux apprenants pour mesurer :</h3>
                </div>
                <div className="bg-gradient-to-br from-primary-500 to-primary-400 rounded-2xl p-6 text-black">
                  <div className="grid grid-cols-2 gap-4">
                    {evaluationCriteria.map((criteria, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <h4 className="font-bold text-sm mb-2">{criteria.title}</h4>
                        <p className="text-xs opacity-90">{criteria.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages de nos Formations */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir MatriCx Training ?
              </h2>
              <p className="text-xl text-gray-600">
                Une approche pédagogique innovante pour un apprentissage durable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Contenu Expert",
                  description: "Programmes conçus par des experts CX reconnus",
                  color: "primary"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Approche Interactive", 
                  description: "Formations participatives avec cas pratiques réels",
                  color: "accent"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Certification Reconnue",
                  description: "Certificats MatriCx valorisant votre expertise",
                  color: "secondary"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Sur Mesure",
                  description: "Programmes adaptés à votre secteur et contexte",
                  color: "primary"
                }
              ].map((advantage, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${advantage.color}-100 text-${advantage.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                      {advantage.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistiques de Performance */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-12 text-white">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-bold mb-6">Nos résultats en chiffres</h2>
                <p className="text-xl text-gray-300">
                  L'excellence de nos formations mesurée par la satisfaction de nos apprenants
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "95%", label: "Taux de satisfaction", icon: <Star className="w-8 h-8" /> },
                  { value: "500+", label: "Professionnels formés", icon: <Users className="w-8 h-8" /> },
                  { value: "40h", label: "Durée moyenne par formation", icon: <Clock className="w-8 h-8" /> },
                  { value: "98%", label: "Taux de certification", icon: <Award className="w-8 h-8" /> }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</div>
                      <p className="text-gray-300 font-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-500 to-accent-500 text-black">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <GraduationCap className="w-16 h-16 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-6">
                Développez l'excellence de vos équipes dès aujourd'hui
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Nos experts pédagogiques MatriCx Training conçoivent des programmes sur mesure 
                pour transformer vos collaborateurs en ambassadeurs de l'expérience client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Demander un programme sur mesure
                </button>
                <button className="text-black border-2 border-black/30 hover:border-black hover:bg-black/10 font-medium py-4 px-8 rounded-xl transition-all duration-300">
                  Télécharger le catalogue de formations
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

export default Training