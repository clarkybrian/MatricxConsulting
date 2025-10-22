import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Award, BookOpen, Star, Users, ArrowRight } from 'lucide-react';

const Founder: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expert en Transformation',
      description: '15+ années d\'expérience en conseil et transformation digitale'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Leader Visionnaire',
      description: 'Création et développement de MatriCx à l\'échelle internationale'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Formateur & Mentor',
      description: 'Formation de plus de 500 professionnels en Afrique'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Pionnier de la transformation digitale en Afrique'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-24">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                  Didier Tiomela
                </h1>
                <p className="text-xl text-white/90 mb-8 animation-delay-200 animate-fade-in">
                  Fondateur & CEO de MatriCx Consulting
                </p>
                <p className="text-lg text-white/80 mb-8">
                  "Notre mission est de transformer l'Afrique à travers l'innovation digitale et l'excellence opérationnelle."
                </p>
                <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center">
                  En savoir plus
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/src/images/founder/didier-tiomela.jpg"
                    alt="Didier Tiomela"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Parcours & Réalisations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un leader engagé dans la transformation digitale de l'Afrique
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Vision & Valeurs
                </h2>
              </div>
              
              <div className="prose prose-lg mx-auto">
                <p className="text-gray-700 mb-6">
                  Didier Tiomela a fondé MatriCx Consulting avec une vision claire : transformer l'Afrique à travers l'innovation digitale et l'excellence opérationnelle. Son parcours unique combine expertise technique, leadership stratégique et engagement social.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Diplômé en ingénierie et management, il a travaillé pour des entreprises internationales avant de créer MatriCx. Sa connaissance approfondie du marché africain et sa passion pour l'innovation font de lui un leader respecté dans l'industrie du conseil.
                </p>

                <p className="text-gray-700">
                  Sous sa direction, MatriCx est devenue une référence en matière de transformation digitale en Afrique, accompagnant des entreprises de toutes tailles dans leur évolution technologique et organisationnelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
                <p className="text-gray-600">Professionnels Formés</p>
              </div>
              <div className="text-center p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
                <p className="text-gray-600">Pays Africains</p>
              </div>
              <div className="text-center p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-2">200+</div>
                <p className="text-gray-600">Projets Réalisés</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Founder;