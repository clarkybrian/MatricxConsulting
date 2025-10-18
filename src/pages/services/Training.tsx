import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  GraduationCap,
  Users,
  CheckCircle2,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  ChevronDown,
  Clock,
  Star,
  FileText,
  MessageCircle,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const Training: React.FC = () => {
  const { currentLanguage } = useTranslation();

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
    "Stratégie de marque",
  ];

  const evaluationCriteria = [
    { title: "Le contenu", desc: "respect du programme et des objectifs" },
    {
      title: "L'animation",
      desc: "expertise du formateur, réponses aux questions, interactions avec les apprenants",
    },
    {
      title: "La pédagogie",
      desc: "atteinte des objectifs, équilibre entre théorie et pratique, prise en compte du contexte professionnel",
    },
    {
      title: "La logistique",
      desc: "organisation et planning, qualité de l'accueil, qualité des outils digitaux déployés",
    },
  ];

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
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Formation & Certification
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                  MatriCx
                  <span className="block text-primary-400">Training</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animation-delay-200 animate-fade-in">
                  Leader CX, formation sur mesure, certificats CX, culture
                  centrée client
                </p>
                <p className="text-lg text-white/80 max-w-xl animation-delay-400 animate-fade-in">
                  Développez l'excellence de vos équipes avec nos programmes de
                  formation certifiants en expérience client et culture centrée
                  client.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in">
                  <button className="btn-primary group flex items-center justify-center">
                    Explorer nos formations
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="text-white border-2 border-yellow-400 bg-yellow-400/20 hover:border-yellow-300 hover:bg-yellow-400/30 font-medium py-3 px-6 rounded-xl transition-all duration-300">
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
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </div>
        </section>

        {/* Section Formation - Inspiration "Espace enseignant" */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Espace formation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Développer l'esprit d'excellence CX de vos collaborateurs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Formations</h3>
                    <p className="text-sm text-gray-600">Certifiantes</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Des ressources expertes et accessibles pour vos équipes
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Programmes</h3>
                    <p className="text-sm text-gray-600">Sur mesure</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Les formations utiles pour accompagner votre projet CX
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Certifications</h3>
                    <p className="text-sm text-gray-600">Reconnues</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Découvrez l'écosystème local de certification CX
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Performance</h3>
                    <p className="text-sm text-gray-600">Mesurable</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Métriques d'évaluation et de progression
                </p>
              </div>
            </div>

            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="lg:w-2/3">
                <div className="bg-gray-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Qu'est-ce que la Formation CX ?
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Cette approche vise à rassembler l'offre de formation des
                    acteurs qui œuvrent au développement de l'excellence CX.
                    L'objectif n'est pas de faire de tous vos collaborateurs des
                    experts, mais de développer en eux une culture centrée
                    client exceptionnelle.
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                    Je découvre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Actualités Formation - Inspiration "À la une" */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">À la une</h2>
                <p className="text-gray-600">
                  Restez informés en suivant de près nos actualités formation
                </p>
              </div>
            </div>

            <div className="lg:flex lg:gap-12">
              <div className="lg:w-1/2">
                <div className="bg-yellow-400 rounded-2xl p-8 text-black mb-8 lg:mb-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Nouveauté</h3>
                      <p className="text-gray-800">15/10/2025</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">
                    Formation CX 2026 : un programme certifiant annoncé à 3 700
                    €
                  </h4>
                  <p className="text-gray-800 mb-6">
                    Publié hier, le projet de certification CX pour 2026 annonce
                    un seuil de base en formation à 3 700 € et à 2 500 € pour
                    les prestations de conseil personnalisées. Pour rappel, la
                    certification CX est un dispositif de...
                  </p>
                  <button className="text-black font-semibold hover:underline">
                    Lire plus →
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Dernières actualités
                  </h3>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Comment développer vos compétences CX grâce aux nouvelles
                      méthodes
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      Ce guide, publié par MatriCx Training, explique aux
                      entreprises comment développer leur performance CX et
                      former une nouvelle génération...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Un projet de formation pour augmenter les compétences CX
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      MatriCx Training propose des formations certifiantes pour
                      améliorer la performance de vos équipes et de certaines
                      personnes en situation de...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Le mois de la formation CX en Nouvelle-Excellence
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">14/10/2025</p>
                    <p className="text-gray-700 text-sm mb-3">
                      Durant tout le mois de novembre, la Région et ses
                      partenaires organisent différents événements pour
                      sensibiliser et former les chefs d'entreprise...
                    </p>
                    <button className="text-yellow-600 font-semibold text-sm hover:underline">
                      Lire plus...
                    </button>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                    Voir toutes les actualités
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Programmes Formation */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos programmes
              </h2>
              <p className="text-gray-600">
                Vous avez un besoin ? Nous avons les formations pour vous
                accompagner : certification, leadership, culture client, etc.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Certification CX Manager
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Cette formation vous est proposée par MatriCx Training
                      afin de vous aider à identifier les principales
                      compétences pour votre développement CX...
                    </p>
                    <div className="text-sm text-gray-500">
                      Besoin: Leadership • Management • Stratégie
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Culture centrée client
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Vous ne savez pas quelle approche culturelle choisir pour
                      optimiser votre activité ? Cette formation vous guidera
                      vers les meilleures pratiques...
                    </p>
                    <div className="text-sm text-gray-500">
                      Besoin: Culture • Engagement • Transformation
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Excellence opérationnelle CX
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Cette formation vous permet de découvrir les bonnes
                      pratiques régionales et locales pour optimiser votre
                      excellence opérationnelle efficacement...
                    </p>
                    <div className="text-sm text-gray-500">
                      Besoin: Opérations • Processus • Qualité
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Certification équipes terrain
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Cette approche, animée par MatriCx, regroupe sur un seul
                      programme les certifications d'excellence terrain fournies
                      par plusieurs experts...
                    </p>
                    <div className="text-sm text-gray-500">
                      Besoin: Terrain • Certification • Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Voir toutes nos formations
              </button>
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos résultats en chiffres
              </h2>
              <p className="text-gray-600">
                L'expertise MatriCx Training en données
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-2xl p-8 mb-6">
                  <div className="text-4xl font-bold text-black mb-2">95%</div>
                  <div className="text-sm font-medium text-black">
                    Satisfaction
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Taux de satisfaction
                </h3>
                <p className="text-gray-600">
                  De nos participants aux formations
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-400 rounded-2xl p-8 mb-6">
                  <div className="text-4xl font-bold text-black mb-2">500+</div>
                  <div className="text-sm font-medium text-black">
                    Professionnels
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Formés chaque année
                </h3>
                <p className="text-gray-600">
                  Across différents secteurs d'activité
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-400 rounded-2xl p-8 mb-6">
                  <div className="text-4xl font-bold text-black mb-2">12</div>
                  <div className="text-sm font-medium text-black">
                    Programmes
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Certifiants disponibles
                </h3>
                <p className="text-gray-600">Du débutant à l'expert CX</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à développer l'excellence de vos équipes ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez nos programmes de formation certifiants et développez
              une culture centrée client exceptionnelle dans votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Explorer nos formations
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Catalogue de formations
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
