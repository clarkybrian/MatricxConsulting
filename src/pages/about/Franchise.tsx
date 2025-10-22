import React from 'react';
import {
  Store,
  TrendingUp,
  Users,
  BookOpen,
  ChevronDown,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Franchise: React.FC = () => {

  const benefits = [
    {
      icon: <Store className="w-6 h-6" />,
      title: 'Marque Reconnue',
      description: 'Bénéficiez de la notoriété et de l\'expertise de MatriCx'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Support Continu',
      description: 'Formation initiale et accompagnement régulier'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Réseau d\'Experts',
      description: 'Accès à notre communauté de professionnels'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Méthodologie Éprouvée',
      description: 'Processus et outils testés et approuvés'
    }
  ];

  const steps = [
    {
      title: 'Candidature',
      description: 'Soumettez votre dossier de candidature et partagez votre vision'
    },
    {
      title: 'Évaluation',
      description: 'Étude approfondie de votre profil et de votre projet'
    },
    {
      title: 'Formation',
      description: 'Programme complet de formation à nos méthodes'
    },
    {
      title: 'Lancement',
      description: 'Accompagnement personnalisé pour le démarrage de votre activité'
    }
  ];

  const requirements = [
    'Expérience significative en conseil ou transformation digitale',
    'Capacité d\'investissement minimum',
    'Adhésion aux valeurs MatriCx',
    'Leadership et esprit entrepreneurial',
    'Réseau professionnel local'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-24">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 animate-slide-up">
                Devenez Franchisé MatriCx
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                Créez votre propre cabinet de conseil et rejoignez le leader de la transformation digitale en Afrique
              </p>
              <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center">
                Découvrir l'Opportunité
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Devenir Franchisé ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Développez votre activité avec le soutien d'une marque leader
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Le Processus
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un parcours structuré pour votre réussite
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Profil Recherché
                </h2>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/team.jpg"
                    alt="Équipe MatriCx"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Investissement et ROI
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    25-50K€
                  </div>
                  <p className="text-gray-600">
                    Investissement Initial
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    12-18 mois
                  </div>
                  <p className="text-gray-600">
                    Retour sur Investissement
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    5 ans
                  </div>
                  <p className="text-gray-600">
                    Durée du Contrat
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                * Ces chiffres sont donnés à titre indicatif et peuvent varier selon les marchés et les conditions locales.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Prêt à Lancer Votre Cabinet MatriCx ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Rejoignez notre réseau de franchisés et développez votre activité avec notre soutien
              </p>
              <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors">
                Demander une Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Franchise;