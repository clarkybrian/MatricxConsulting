import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, TrendingUp, Users, Search, BarChart3, Target, Lightbulb, MessageSquare, CheckCircle, Award, ChevronDown } from 'lucide-react'

const Survey: React.FC = () => {
  const { currentLanguage } = useTranslation()
  
  return (
    <div key={currentLanguage} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section avec Animation */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium animate-fade-in">
                  <Search className="w-4 h-4 mr-2" />
                  Études et Analyses
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-white/90">Survey</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Études de marché, connaissance client, stratégie de marché / marque
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Transformez vos données en insights stratégiques pour une prise de décision éclairée et une croissance durable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group">
                    Découvrir nos services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Télécharger notre brochure
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src="/src/images/Nouveau dossier/survey.png" 
                    alt="MatriCx Survey - Études et analyses"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Petits carrés flottants superposés */}
                  <div className="absolute top-6 right-6 floating-card">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center floating-shadow border border-white/20">
                      <BarChart3 className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                      <h3 className="font-bold text-sm text-gray-900">Analyse</h3>
                      <p className="text-xs text-gray-600">Performance</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 floating-card-delay-1">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center floating-shadow border border-white/20">
                      <Users className="w-6 h-6 mx-auto mb-2 text-accent-500" />
                      <h3 className="font-bold text-sm text-gray-900">Client</h3>
                      <p className="text-xs text-gray-600">Insights</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 floating-card-delay-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center floating-shadow border border-white/20">
                      <Target className="w-6 h-6 mx-auto mb-2 text-secondary-500" />
                      <h3 className="font-bold text-sm text-gray-900">Stratégie</h3>
                      <p className="text-xs text-gray-600">Marché</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-12 floating-card-delay-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center floating-shadow border border-white/20">
                      <Lightbulb className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                      <h3 className="font-bold text-sm text-gray-900">Innovation</h3>
                      <p className="text-xs text-gray-600">Solutions</p>
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

        {/* Questions Clients Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourriez-vous répondre avec assurance aux questions suivantes concernant vos clients ou prospects ?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                {[
                  "Que pense chaque client de votre produit ou service ?",
                  "Vos clients sont-ils satisfaits ? Souhaitent renouveler leurs achats chez vous ?",
                  "Votre qualité de service s'est elle dégradée (ou améliorée) au cours des 6 derniers mois ?"
                ].map((question, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 group-hover:scale-110 transition-transform"></div>
                    <p className="text-gray-700 font-medium">{question}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  "Vos clients vous recommandent-ils ?",
                  "Votre roadmap produits est elle adaptée aux attentes de vos clients ?",
                  "Votre Expérience Client génère-t-elle de la valeur ?"
                ].map((question, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 group-hover:scale-110 transition-transform"></div>
                    <p className="text-gray-700 font-medium">{question}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Statistiques Impact */}
            <div className="mt-16 bg-primary-500 rounded-3xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-6 text-center">
                La réussite de votre entreprise passe par la satisfaction et l'engagement de vos clients. Pourquoi ??
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">25x</div>
                  <p className="font-medium">acquérir un nouveau client coûte jusqu'à <span className="font-bold">25 fois plus cher</span> que d'en conserver un existant</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">3x</div>
                  <p className="font-medium">la probabilité de réaliser une vente à un client existant est au moins <span className="font-bold">3 fois plus élevée</span> qu'avec un prospect</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">65%</div>
                  <p className="font-medium"><span className="font-bold">65% des clients</span> pensent que c'est important pour les entreprises de collecter du feedback sur la qualité de service</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="font-medium text-base">
                  seulement <span className="font-bold">40% des entreprises</span> capturent la voix du client et <span className="font-bold">l'utilisent pour générer des opportunités d'innovation</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="bg-yellow-50 border border-primary-200 rounded-3xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comment s'y prendre?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Comment satisfaire vos clients pour qu'ils continuent à acheter régulièrement vos produits / services?
              </p>
              <div className="bg-white rounded-2xl p-6 border-l-4 border-primary-500">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Nous concevons votre programme feedback client :</p>
                    <p className="text-gray-700">
                      en recueillant de manière centralisée et systématique l'avis de vos clients tout au long de leur parcours (achat, assistance, réclamation, paiement, résiliation, etc.) afin de leur proposer des produits et services, une relation client correspondant à leurs attentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Détaillés */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Nos domaines d'expertise</h2>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Voix du Client */}
              <div className="space-y-8">
                <div className="bg-primary-500 h-1 w-16 rounded-full"></div>
                <h3 className="text-3xl font-bold text-gray-900">Voix du Client</h3>
                <div className="space-y-6">
                  {[
                    "Enquête de satisfaction",
                    "#laVoixduClientau237#",
                    "Social listening & E-WOM",
                    "Customer Experience Index"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-all duration-300 group">
                      <MessageSquare className="w-6 h-6 text-primary-500 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Spécialisés */}
              <div className="space-y-8">
                <div className="grid gap-8">
                  {/* Stratégie & compréhension des marchés */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="w-6 h-6 mr-3 text-primary-500" />
                      Stratégie & compréhension des marchés
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Étude de marché</li>
                      <li>• Veille concurrentielle</li>
                      <li>• Benchmark sectoriel</li>
                      <li>• Go To market strategy</li>
                      <li>• Sondage d'opinion</li>
                    </ul>
                  </div>

                  {/* Positionnement de la marque */}
                  <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-6 border border-accent-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Target className="w-6 h-6 mr-3 text-accent-500" />
                      Positionnement de la marque - Suivi de la santé de la marque
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Étude de notoriété</li>
                      <li>• Pré test / post test publicitaire</li>
                      <li>• Mesure d'audience</li>
                      <li>• Suivi de l'activation de marque</li>
                    </ul>
                  </div>

                  {/* Analyse et performance des canaux */}
                  <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <BarChart3 className="w-6 h-6 mr-3 text-secondary-500" />
                      Analyse et performance des canaux
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Mystery shopping</li>
                      <li>• Dimensionnement des opportunités de canaux</li>
                    </ul>
                  </div>

                  {/* Innovation */}
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-6 border border-primary-300">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-3 text-primary-600" />
                      Innovation
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Test produit</li>
                      <li>• Expérience utilisateur</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-8 text-primary-500" />
              <h2 className="text-4xl font-bold mb-6">
                Prêt à transformer vos données en avantage concurrentiel ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Nos experts MatriCx Survey vous accompagnent dans la conception et la mise en œuvre de votre stratégie d'écoute client pour maximiser votre ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Demander une consultation gratuite
                </button>
                <button className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-medium py-4 px-8 rounded-xl transition-all duration-300">
                  Télécharger nos cas d'usage
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

export default Survey