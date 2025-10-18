import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Search,
  BarChart3,
  Target,
  Lightbulb,
  MessageSquare,
  CheckCircle,
  Award,
  ChevronDown,
} from "lucide-react";

const Survey: React.FC = () => {
  const { currentLanguage } = useTranslation();

  return (
    <div
      key={currentLanguage}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <Header />
      <main className="pt-8">
        {/* Hero Section avec Animation */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 from-40% via-gray-700 via-50% to-yellow-500 to-100% text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-32 w-24 h-24 border border-white rounded-lg -rotate-12"></div>
            <div className="absolute top-20 right-40 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute bottom-40 right-10 w-12 h-12 border-2 border-white rounded-lg rotate-45"></div>
            <div className="absolute top-40 left-1/4 w-6 h-6 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-32 left-1/3 w-14 h-14 border border-white/50 rounded-lg rotate-12"></div>
          </div>
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
                  Études de marché, connaissance client, stratégie de marché /
                  marque
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Transformez vos données en insights stratégiques pour une
                  prise de décision éclairée et une croissance durable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group flex items-center justify-center">
                    Découvrir nos services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-yellow-400 bg-yellow-400/20 hover:border-yellow-300 hover:bg-yellow-400/30 font-medium py-3 px-6 rounded-xl transition-all duration-300">
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
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </div>
        </section>

        {/* Section Études thématiques - Inspiration design */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Nos études thématiques
                </h2>
                <p className="text-gray-600 mt-2">
                  Nos analyses des chiffres de la recherche client et l'Indice
                  Satisfaction Client Français (ISCF).
                </p>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                En savoir +
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Études de satisfaction client
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Nos analyses des chiffres de la satisfaction client et
                      l'Indice de Satisfaction Client Français (ISCF).
                    </p>
                    <div className="text-xs text-gray-500">
                      France, métropolitaine • Territoires d'outre-mer
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Ressources documentaires
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Notre sélection d'études et rapports sur la recherche
                      client en France et à l'international.
                    </p>
                    <div className="text-xs text-gray-500">
                      Rapports • Analyses • Benchmarks
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Observatoire des insights client
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Nos missions et nos activités destinées à éclairer les
                      acteurs de la recherche client.
                    </p>
                    <div className="text-xs text-gray-500">
                      Insights • Tendances • Innovation
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Dataviz RECHERCHE
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Les données nationales, régionales et départementales de
                      la recherche client en France depuis 2012.
                    </p>
                    <div className="text-xs text-gray-500">
                      Données • Visualisation • Historique
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-800 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Qu'est-ce que l'Insight Client ?
                    </h3>
                    <p className="text-gray-200 mb-6">
                      Cette approche vise à rassembler l'offre de service des
                      acteurs qui œuvrent au développement de la connaissance
                      client. L'objectif est de transformer vos données en
                      insights stratégiques.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                      Je découvre
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Méthodologie - Inspiration événements */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Méthodologie Survey
              </h2>
              <p className="text-gray-600">
                Notre processus structuré d'analyse et d'insights
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-400"></div>

              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">01</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-600">
                        ÉTAPE 1
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Design de l'étude
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Organisateur : MatriCx Survey, en partenariat avec vos
                      équipes
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700">
                        Définition des objectifs, méthodologie et questionnaire
                        adapté à vos besoins spécifiques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">02</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-600">
                        ÉTAPE 2
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Collecte de données
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Organisateur : Équipe terrain, supervision MatriCx
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700">
                        Recueil des données via différents canaux : téléphone,
                        web, face-à-face selon vos besoins.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">03</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-600">
                        ÉTAPE 3
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Analyse & Insights
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Organisateur : Data Scientists MatriCx - Restitution
                      stratégique
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700">
                        Transformation des données en insights stratégiques et
                        recommandations actionnables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section statistiques */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos résultats en chiffres
              </h2>
              <p className="text-gray-600">
                L'expertise MatriCx Survey en données
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-2xl p-8 mb-6">
                  <div className="text-4xl font-bold text-black mb-2">25x</div>
                  <div className="text-sm font-medium text-black">
                    Plus d'insights
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Insights stratégiques
                </h3>
                <p className="text-gray-600">
                  Transformation des données en recommandations actionnables
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-400 rounded-2xl p-8 mb-6">
                  <div className="text-4xl font-bold text-black mb-2">3x</div>
                  <div className="text-sm font-medium text-black">
                    Plus rapide
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Délais optimisés
                </h3>
                <p className="text-gray-600">
                  Restitution accélérée grâce à nos process digitalisés
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-400 rounded-2xl p-8 mb-6">
                  <div className="text-4xl font-bold text-black mb-2">65%</div>
                  <div className="text-sm font-medium text-black">
                    Satisfaction
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Taux de réponse
                </h3>
                <p className="text-gray-600">
                  Engagement élevé grâce à nos méthodologies éprouvées
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à transformer vos données en insights ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez ce que pensent vraiment vos clients avec nos études sur
              mesure et nos analyses approfondies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Démarrer une étude
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Télécharger notre brochure
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Survey;
