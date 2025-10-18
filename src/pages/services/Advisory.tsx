import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  Briefcase,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Shield,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Settings,
  MessageSquare,
  Zap,
  Award,
  AlertTriangle,
} from "lucide-react";

const Advisory: React.FC = () => {
  const { currentLanguage } = useTranslation();

  const advisoryQuestions = [
    "Avez-vous défini votre vision, vos objectifs Expérience Client ?",
    "Avez-vous défini votre stratégie de canal?",
    "Votre organisation est-elle alignée sur ces objectifs et êtes-vous prêt pour l'Expérience Client ?",
    "Avez-vous effectué un design du/des parcours de vos clients et identifié le parcours idéal à travers chaque point de contact et chaque canal ?",
    "Votre dispositif de mesure est-il un moteur d'action et d'impact commercial positif ?",
    "Avez-vous mis en place une feuille de route / stratégie Expérience Client et un modèle de gouvernance Expérience Client solide ?",
    "Que savez vous de vos clients? Leurs besoins, leurs attentes?",
  ];

  const advisoryServices = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Audit & évaluation de maturité Expérience Client",
      subtitle: "Objectifs business Vs état des lieux",
      color: "primary",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title:
        "Définition de votre stratégie de canal et mise en place de contact center",
      subtitle: "",
      color: "accent",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pilotage de la performance de l'Expérience Client",
      subtitle: "",
      color: "secondary",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expérience collaborateur et culture centrée client",
      subtitle: "",
      color: "primary",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Définition et déploiement de programmes Voix du Client",
      subtitle: "",
      color: "accent",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Amélioration continue et optimisation",
      subtitle: "",
      color: "secondary",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Évaluation du ROI de votre programme Expérience Client",
      subtitle: "",
      color: "primary",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimisation des parcours clients",
      subtitle: "",
      color: "accent",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Expérience Client",
      subtitle: "Pratiques, outils, transformation",
      color: "secondary",
    },
  ];

  const implementationSteps = [
    {
      title: "Compréhension de votre besoin & environnement",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Diagnostic & évaluation de maturité",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Design & implémentation",
      subtitle: "Collaboration & co-construction",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Mesure et impact ROI",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const fiveLevers = [
    {
      title: "Organisation",
      content: [
        "Il faut tendre vers une organisation qui va permettre :",
        "1. de décloisonner les silos et favoriser le travail collaboratif (co-construction)",
        "2. de mettre au centre des attentions le client.",
      ],
      color: "primary",
    },
    {
      title: "Gouvernance & culture client",
      content: [
        "L'expérience client est une affaire de tous, transverse à l'organisation, cela nécessite la mise en place d'une gouvernance spécifique portée au niveau Top Management",
      ],
      color: "accent",
      hasAlert: true,
    },
    {
      title: "Voix du Client",
      content: [
        "La gouvernance de l'expérience client ne pourra se faire sans dispositif qui sera décliné à tous les niveaux hiérarchiques.",
        "Ce dispositif sera un input important pour le design de l'expérience via de nouveaux parcours",
      ],
      color: "secondary",
    },
    {
      title: "Parcours clients",
      content: [
        "Apporter de nouvelles approches pour designer les parcours clients, de ces derniers découleront ensuite :",
        "1. Les processus",
        "2. Les procédures",
        "3. Les modes opératoires",
      ],
      color: "primary",
      hasLoop: true,
    },
    {
      title: "Mesure et Analyse",
      content: [
        "Disposer des KPI's et des outils d'analyse nécessaires à l'amélioration continue des parcours",
        "1. Indicateurs d'expérience vécue",
        "2. Indicateurs d'expérience délivrée",
        "3. Efficacité des parcours / processus clients",
      ],
      color: "accent",
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
                  <button className="text-white border-2 border-yellow-400 bg-yellow-400/20 hover:border-yellow-300 hover:bg-yellow-400/30 font-medium py-3 px-6 rounded-xl transition-all duration-300">
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
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </div>
        </section>

        {/* Section Questions - Inspiration "Espace enseignant" */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Évaluation de maturité
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Développer l'esprit d'excellence CX de vos équipes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Audit CX</h3>
                    <p className="text-sm text-gray-600">Diagnostic complet</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Des ressources expertes et accessibles pour évaluer votre
                  maturité
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Stratégie</h3>
                    <p className="text-sm text-gray-600">Définition</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Les méthodes efficaces pour accompagner votre projet CX
                </p>
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
