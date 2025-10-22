import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Shield, Heart, Sparkles, Lightbulb, Users, Target, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Company: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      name: t('values.innovation.name'),
      description: t('values.innovation.description'),
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "#FDC300",
      textColor: "text-black"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: t('values.integrity.name'),
      description: t('values.integrity.description'),
      gradient: "from-blue-500 to-blue-700",
      bgColor: "#0080AF",
      textColor: "text-white"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: t('values.engagement.name'),
      description: t('values.engagement.description'),
      gradient: "from-white to-gray-100",
      bgColor: "#FFFFFF",
      textColor: "text-black"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: t('values.authenticity.name'),
      description: t('values.authenticity.description'),
      gradient: "from-gray-800 to-black",
      bgColor: "#575756",
      textColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section avec Animation */}
        <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-24">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 animate-slide-up">
                MatriCx Consulting
              </h1>
              <p className="text-xl text-white/90 mb-12 animation-delay-200 animate-fade-in">
                Leader de la transformation digitale en Afrique
              </p>
              <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center group">
                Notre Histoire
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Values Section avec Animation */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Nos Valeurs
                </h2>
                <div className="space-y-8">
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-xl transition-all duration-500 cursor-pointer transform hover:scale-105 bg-gradient-to-r ${value.gradient}`}
                      style={{ backgroundColor: value.bgColor }}
                    >
                      <div className={`flex items-center gap-4 ${value.textColor}`}>
                        {value.icon}
                        <div>
                          <h3 className="text-xl font-bold mb-1">{value.name}</h3>
                          <p className="opacity-90">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                  <img
                    src="/values-team.jpg"
                    alt="Notre équipe en action"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transformer l'Afrique à travers l'innovation digitale et l'excellence opérationnelle
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: 'Excellence',
                  description: "Nous visons l'excellence dans chaque projet"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Collaboration',
                  description: "Nous croyons en la force du travail d'équipe"
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: 'Innovation',
                  description: "Nous repoussons les limites de l'innovation"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section avec Animation */}
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
          <div className="container-custom relative">
            {/* Éléments de design animés */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 5}s`
                  }}
                >
                  <div className="w-3 h-3 bg-yellow-400/20 rounded-full"></div>
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Notre Impact
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Des résultats concrets qui transforment l'Afrique
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '200+', label: 'Projets Réalisés' },
                  { value: '15+', label: 'Pays Africains' },
                  { value: '500+', label: 'Experts Formés' },
                  { value: '50M€+', label: 'Impact Généré' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center group transform hover:scale-110 transition-all duration-300"
                  >
                    <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-bounce">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 group-hover:text-yellow-400 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Rejoignez l'Aventure
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez les opportunités de carrière et de partenariat chez MatriCx
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors">
                  Voir les Carrières
                </button>
                <button className="bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">
                  Devenir Partenaire
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;