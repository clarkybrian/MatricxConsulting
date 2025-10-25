import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Company: React.FC = () => {
  useTranslation(); // Keep the hook call even if we don't use it directly

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

        {/* Experience Client Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/equipe.jpg"
                    alt="Notre équipe en action"
                    className="w-full h-[600px] object-cover bg-white"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-yellow-400/10 px-4 py-2 rounded-full inline-block">
                  <span className="text-yellow-600 font-semibold">À PROPOS DE NOUS</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Et si l'expérience client n'était qu'un besoin fondamental ?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nos consultants vous accompagnent sur des sujets variés tels que les études de marché, 
                  le conseil en stratégie & finance, l'expérience & la relation client, la voix du client, 
                  la formation sur les thématiques client, le développement et l'intégration des solutions 
                  de relation client (Chabots, outil CRM, social listening, etc.).
                </p>
                <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors inline-flex items-center group">
                  DÉCOUVREZ PLUS
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Équipe Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="bg-yellow-400/10 px-4 py-2 rounded-full inline-block mb-4">
                <span className="text-yellow-600 font-semibold">NOTRE ÉQUIPE</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Des experts passionnés à votre service
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez les talents qui font de MatriCx Consulting un leader dans la transformation digitale en Afrique.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Expert 1 */}
              <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img
                  src="/team1.jpg"
                  alt="Amadou Nkongho"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amadou Nkongho</h3>
                <p className="text-yellow-600 font-medium mb-4">Responsable Innovation Digitale</p>
                <p className="text-gray-600">
                  Expert en solutions CRM et intelligence artificielle, il transforme les défis clients en opportunités de croissance grâce à des stratégies digitales innovantes.
                </p>
              </div>

              {/* Expert 2 */}
              <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <img
                  src="/team2.jpg"
                  alt="Marie-Claire Fotso"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marie-Claire Fotso</h3>
                <p className="text-yellow-600 font-medium mb-4">Directrice Expérience Client</p>
                <p className="text-gray-600">
                  Spécialiste en expérience client, elle révolutionne la relation client en intégrant technologies avancées et approche humaine personnalisée.
                </p>
              </div>

              {/* Expert 3 */}
              <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <img
                  src="/team3.jpg"
                  alt="Jean-Paul Mbarga"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jean-Paul Mbarga</h3>
                <p className="text-yellow-600 font-medium mb-4">Lead Stratégie Digitale</p>
                <p className="text-gray-600">
                  Architecte de solutions digitales, il conçoit des stratégies sur mesure pour optimiser la performance et la croissance de nos clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Approche Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-right">
                <div className="bg-yellow-400/10 px-4 py-2 rounded-full inline-block">
                  <span className="text-yellow-600 font-semibold">NOTRE APPROCHE</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Innovation et expertise au service de votre réussite
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Notre approche unique combine expertise technique, compréhension approfondie des marchés africains 
                  et méthodologies agiles pour garantir des résultats exceptionnels. Nous créons des solutions 
                  sur mesure qui répondent aux défis spécifiques de votre entreprise.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">98%</div>
                    <div className="text-gray-600">Satisfaction client</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">150+</div>
                    <div className="text-gray-600">Projets réussis</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-slide-left">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/innovation.jpg"
                    alt="Innovation en action"
                    className="w-full h-[500px] object-cover"
                  />
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

export default Company;