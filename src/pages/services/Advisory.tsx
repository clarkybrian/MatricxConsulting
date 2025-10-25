import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { advisoryImage } from "../../images/services";
import {
  ArrowRight,
  Briefcase,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Shield,
  Lightbulb,
  ChevronDown,
  Settings,
  MessageSquare,
  Zap,
  AlertTriangle,
} from "lucide-react";

const Advisory: React.FC = () => {
  const { currentLanguage } = useTranslation();

  return (
    <div
      key={currentLanguage}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <Header />
      <main className="pt-8">
        {/* Hero Section */}
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
                  <Briefcase className="w-4 h-4 mr-2" />
                  Conseil Stratégique
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Advisory</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Conseil, stratégie, pilotage, amélioration continue,
                  optimisation, CXM
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Nos consultants experts vous accompagnent dans la définition
                  et l'implémentation de votre stratégie d'expérience client
                  pour créer un avantage concurrentiel durable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group flex items-center justify-center">
                    Découvrir notre approche
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link to="/contact" className="text-white hover:text-white border-2 border-yellow-400 bg-yellow-400/20 hover:border-yellow-300 hover:bg-yellow-400/30 font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Évaluer votre maturité CX
                  </Link>
                </div>
              </div>
              <div className="relative">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={advisoryImage}
                    alt="MatriCx Advisory - Conseil stratégique"
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

        {/* Section Questions MatriCx Advisory */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                MatriCx <span className="text-yellow-400">advisory</span>
              </h2>
              
              {/* Questions Section avec fond jaune */}
              <div className="bg-yellow-400 rounded-2xl p-8 mb-8">
                <ul className="space-y-4 text-black">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous défini votre vision, vos objectifs Expérience Client ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous défini votre stratégie de canal?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Votre organisation est-elle alignée sur ces objectifs et êtes-vous prêt pour l'Expérience Client ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous effectué un design du/des parcours de vos clients et identifié le parcours idéal à travers chaque point de contact et chaque canal ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Votre dispositif de mesure est-il un moteur d'action et d'impact commercial positif ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Avez-vous mis en place une feuille de route / stratégie Expérience Client et un modèle de gouvernance Expérience Client solide ?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span>Que savez vous de vos clients? Leurs besoins, leurs attentes?</span>
                  </li>
                </ul>
              </div>

              {/* Section Description avec flèche */}
              <div className="border-2 border-yellow-400 rounded-2xl p-6 relative">
                {/* Flèche pointant vers le bas */}
                <div className="absolute -top-8 right-20">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-white"></div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Nous proposons une gamme de services : de l'évaluation votre maturité Expérience Client à la conception de systèmes de pilotage, en passant par une cartographie des parcours clients et employés.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                  Définissez une vision claire de l'expérience voulue et délivrée par votre entreprise. Une expérience qui respecte vos promesses clients et engagent vos collaborateurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services MatriCx Advisory */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                MatriCx <span className="text-yellow-400">advisory</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Audit & évaluation de maturité Expérience Client
                </h3>
                <p className="text-yellow-500 font-medium text-sm mb-4">
                  Objectifs business Vs état des lieux
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Définition de votre stratégie de canal et mise en place de contact center
                </h3>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Pilotage de la performance de l'Expérience Client
                </h3>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Expérience collaborateur et culture centrée client
                </h3>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Définition et déploiement de programmes Voix du Client
                </h3>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Amélioration continue et optimisation
                </h3>
              </div>

              {/* Service 7 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Évaluation du ROI de votre programme Expérience Client
                </h3>
              </div>

              {/* Service 8 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Optimisation des parcours clients
                </h3>
              </div>

              {/* Service 9 */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Innovation Expérience Client
                </h3>
                <p className="text-yellow-500 font-medium text-sm mb-4">
                  Pratiques, outils, transformation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Modèle d'implémentation */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                MatriCx <span className="text-yellow-400">advisory</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Modèle d'implémentation d'un programme Expérience Client de{" "}
                <span className="text-yellow-400">MatriCx (Engage more)</span>
              </h3>
            </div>

            {/* Processus avec cercles connectés */}
            <div className="relative max-w-6xl mx-auto mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                {/* Étape 1 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-blue-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Compréhension de votre besoin & environnement
                  </h4>
                </div>

                {/* Étape 2 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-blue-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Diagnostic & évaluation de maturité
                  </h4>
                </div>

                {/* Étape 3 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-blue-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Design & implémentation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Collaboration & co-construction
                  </p>
                </div>

                {/* Étape 4 */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-blue-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Mesure et impact ROI
                  </h4>
                </div>

                {/* Ligne de connexion */}
                <div className="absolute top-12 left-0 right-0 h-1 bg-yellow-400 -z-10 hidden md:block"></div>
              </div>

              {/* Icône utilisateur à gauche */}
              <div className="absolute -left-16 top-8 hidden lg:block">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-black" />
                </div>
              </div>

              {/* Icône ampoule à droite */}
              <div className="absolute -right-16 top-8 hidden lg:block">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl font-bold text-gray-900 mb-4">
                Pour bâtir un programme Expérience Client innovant et réaliste, vous avez besoin d'une approche différente et adaptée à votre contexte.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 Leviers */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                MatriCx <span className="text-yellow-400">advisory</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                L'amélioration de l'expérience client repose sur 5 leviers complémentaires
              </h3>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {/* Levier 1 */}
              <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-black mb-4">
                  Organisation
                </h4>
                <div className="bg-white rounded-xl p-4 text-left">
                  <p className="text-sm text-gray-700 mb-2">
                    Il faut tendre vers une organisation qui va permettre :
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>1. de décloisonner les silos et favoriser le travail collaboratif (co-construction)</li>
                    <li>2. de mettre au centre des attentions <strong>le client</strong>.</li>
                  </ul>
                </div>
              </div>

              {/* Levier 2 */}
              <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-black mb-4">
                  Gouvernance & culture client
                </h4>
                <div className="bg-white rounded-xl p-4 text-left">
                  <p className="text-xs text-gray-700 mb-2">
                    L'expérience client est une affaire de tous, transverse à l'organisation, cela nécessite la mise en place d'une gouvernance spécifique portée au niveau Top Management
                  </p>
                  <div className="flex justify-center mt-2">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                </div>
              </div>

              {/* Levier 3 */}
              <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-black mb-4">
                  Voix du Client
                </h4>
                <div className="bg-white rounded-xl p-4 text-left">
                  <p className="text-xs text-gray-700 mb-2">
                    La gouvernance de l'expérience client ne pourra se faire sans dispositif qui sera décliné à tous les niveaux hiérarchiques.
                  </p>
                  <p className="text-xs text-gray-700">
                    Ce dispositif sera un input important pour le design de l'expérience via de nouveaux parcours
                  </p>
                </div>
              </div>

              {/* Levier 4 */}
              <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-black mb-4">
                  Parcours clients
                </h4>
                <div className="bg-white rounded-xl p-4 text-left">
                  <p className="text-xs text-gray-700 mb-2">
                    Apporter de nouvelles approches pour designer les parcours clients, de ces derniers découleront ensuite :
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>1. Les processus</li>
                    <li>2. Les procédures</li>
                    <li>3. Les modes opératoires</li>
                  </ul>
                  <div className="flex justify-center mt-2">
                    <div className="w-8 h-8 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-yellow-600" />
                    </div>
                  </div>
                  <p className="text-xs text-center text-yellow-600 mt-1">
                    Boucle d'amélioration continue
                  </p>
                </div>
              </div>

              {/* Levier 5 */}
              <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-black mb-4">
                  Mesure et Analyse
                </h4>
                <div className="bg-white rounded-xl p-4 text-left">
                  <p className="text-xs text-gray-700 mb-2">
                    Disposer des KPI's et des outils d'analyse nécessaires à l'amélioration continue des parcours
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>1. Indicateurs d'expérience vécue</li>
                    <li>2. Indicateurs d'expérience délivrée</li>
                    <li>3. Efficacité des parcours / processus clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Advisory;
