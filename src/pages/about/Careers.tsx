import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Users, Laptop, GraduationCap, Heart, ArrowRight, ChevronRight } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Formation Continue',
      description: 'Programme de développement professionnel personnalisé'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Équipe Internationale',
      description: 'Collaborez avec des experts de divers horizons'
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Travaillez sur des projets digitaux innovants'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Bien-être',
      description: 'Équilibre vie pro/perso et avantages sociaux'
    }
  ];

  const openings = [
    {
      title: 'Consultant(e) en Transformation Digitale',
      location: 'Douala, Cameroun',
      type: 'CDI',
      experience: '3-5 ans'
    },
    {
      title: 'Chef de Projet Digital',
      location: 'Abidjan, Côte d\'Ivoire',
      type: 'CDI',
      experience: '5+ ans'
    },
    {
      title: 'Analyste CX',
      location: 'Dakar, Sénégal',
      type: 'CDI',
      experience: '2-4 ans'
    },
    {
      title: 'Développeur(se) Full Stack',
      location: 'Remote',
      type: 'CDI',
      experience: '3+ ans'
    }
  ];

  const values = [
    {
      name: 'Innovation',
      color: '#FDC300', // Jaune
      textColor: 'text-black'
    },
    {
      name: 'Intégrité',
      color: '#0080AF', // Bleu
      textColor: 'text-white'
    },
    {
      name: 'Engagement',
      color: '#FFFFFF', // Blanc
      textColor: 'text-black'
    },
    {
      name: 'Authenticité',
      color: '#575756', // Gris foncé
      textColor: 'text-white'
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 animate-slide-up">
                Carrières chez MatriCx
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                Rejoignez-nous dans la transformation digitale de l'Afrique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center justify-center">
                  Voir les Opportunités
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                  Candidature Spontanée
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Nous Rejoindre ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Développez votre carrière dans un environnement stimulant
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
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

        {/* Current Openings Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Postes Ouverts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorez nos opportunités actuelles
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openings.map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <button className="text-yellow-500 hover:text-yellow-600">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ce qui nous guide au quotidien
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className={`text-center p-8 rounded-xl shadow-lg transition-transform hover:transform hover:scale-105`}
                    style={{ 
                      backgroundColor: value.color,
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <h3 className={`text-2xl font-bold ${value.textColor} mb-2`}>{value.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Prêt à Nous Rejoindre ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Envoyez-nous votre candidature et participez à l'aventure MatriCx
              </p>
              <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors">
                Postuler Maintenant
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;