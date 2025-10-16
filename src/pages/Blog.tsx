import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from '../hooks/useTranslation'
import { Calendar, User, ArrowRight, TrendingUp, Users, Lightbulb, Target, BarChart3, Briefcase } from 'lucide-react'

// Import des images
import vert1 from '../images/blog/vert1.jpg'
import vert2 from '../images/blog/vert2.jpg'
import vert3 from '../images/blog/vert3.jpg'
import whatsapp1 from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.04_8110d4ba.jpg'
import whatsapp2 from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.34_2a28bb0e.jpg'
import whatsapp3 from '../images/blog/WhatsApp Image 2025-10-15 à 16.38.49_2b3172a9.jpg'
import whatsapp4 from '../images/blog/WhatsApp Image 2025-10-15 à 16.39.17_1ce3d0a9.jpg'
import whatsapp5 from '../images/blog/WhatsApp Image 2025-10-15 à 16.39.32_808f1fec.jpg'
import designersImage from '../images/blog/designers-industriels-travaillant-sur-un-modele-3d.jpg'
import personnesBureau from '../images/blog/personnes-au-bureau-pendant-une-journee-de-travail.jpg'
import affiliesImage from '../images/blog/affilies-de-prevision-examinant-les-donnees-sur-les-objectifs-et-les-indicateurs-de-performance.jpg'

const Blog: React.FC = () => {
  const { currentLanguage } = useTranslation()
  const [selectedTopic, setSelectedTopic] = useState('all')

  // Topics/catégories adaptées à MatriCx Consulting
  const topics = [
    {
      id: 'all',
      name: currentLanguage === 'fr' ? 'Tous les articles' : 'All Articles',
      icon: BarChart3,
      color: 'blue'
    },
    {
      id: 'transformation',
      name: currentLanguage === 'fr' ? 'Transformation Digitale' : 'Digital Transformation',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      id: 'leadership',
      name: currentLanguage === 'fr' ? 'Leadership & Management' : 'Leadership & Management',
      icon: Users,
      color: 'blue'
    },
    {
      id: 'innovation',
      name: currentLanguage === 'fr' ? 'Innovation & Stratégie' : 'Innovation & Strategy',
      icon: Lightbulb,
      color: 'blue'
    },
    {
      id: 'performance',
      name: currentLanguage === 'fr' ? 'Performance Organisationnelle' : 'Organizational Performance',
      icon: Target,
      color: 'blue'
    },
    {
      id: 'consulting',
      name: currentLanguage === 'fr' ? 'Méthodologie Conseil' : 'Consulting Methodology',
      icon: Briefcase,
      color: 'blue'
    }
  ]

  // Articles professionnels avec focus africain
  const articles = [
    {
      id: 1,
      title: currentLanguage === 'fr' 
        ? 'Leadership Africain dans la Transformation Digitale'
        : 'African Leadership in Digital Transformation',
      excerpt: currentLanguage === 'fr'
        ? 'Comment les leaders africains redéfinissent l\'approche de la transformation digitale en entreprise, créant des solutions innovantes adaptées au contexte local.'
        : 'How African leaders are redefining the approach to digital transformation in business, creating innovative solutions adapted to the local context.',
      date: '15 Oct 2025',
      author: 'Dr. Amina Kone',
      category: 'transformation',
      readTime: '8 min',
      image: whatsapp1
    },
    {
      id: 2,
      title: currentLanguage === 'fr'
        ? 'Innovation en Afrique : Défis et Opportunités'
        : 'Innovation in Africa: Challenges and Opportunities',
      excerpt: currentLanguage === 'fr'
        ? 'L\'écosystème entrepreneurial africain connaît une croissance remarquable. Découvrez les stratégies gagnantes des leaders innovants.'
        : 'The African entrepreneurial ecosystem is experiencing remarkable growth. Discover the winning strategies of innovative leaders.',
      date: '12 Oct 2025', 
      author: 'Emmanuel Okonkwo',
      category: 'innovation',
      readTime: '6 min',
      image: designersImage
    },
    {
      id: 3,
      title: currentLanguage === 'fr'
        ? 'Management Interculturel : L\'Atout Africain'
        : 'Intercultural Management: The African Advantage',
      excerpt: currentLanguage === 'fr'
        ? 'Les compétences multiculturelles des managers africains représentent un avantage concurrentiel majeur dans l\'économie globalisée.'
        : 'The multicultural skills of African managers represent a major competitive advantage in the globalized economy.',
      date: '8 Oct 2025',
      author: 'Fatou Diallo',
      category: 'leadership',
      readTime: '7 min',
      image: personnesBureau
    },
    {
      id: 4,
      title: currentLanguage === 'fr'
        ? 'Performance Organisationnelle : Méthodes Agiles Africaines'
        : 'Organizational Performance: African Agile Methods',
      excerpt: currentLanguage === 'fr'
        ? 'Les entreprises africaines développent des approches agiles uniques, combinant traditions locales et méthodologies modernes.'
        : 'African companies are developing unique agile approaches, combining local traditions and modern methodologies.',
      date: '5 Oct 2025',
      author: 'Kwame Asante',
      category: 'performance',
      readTime: '9 min',
      image: affiliesImage
    },
    {
      id: 5,
      title: currentLanguage === 'fr'
        ? 'Conseil en Afrique : Nouvelles Approches Collaboratives'
        : 'Consulting in Africa: New Collaborative Approaches',
      excerpt: currentLanguage === 'fr'
        ? 'Les cabinets de conseil africains redéfinissent leur métier en privilégiant des approches plus collaboratives et participatives.'
        : 'African consulting firms are redefining leur business by favoring more collaborative and participatory approaches.',
      date: '2 Oct 2025',
      author: 'Dr. Sarah Mensah',
      category: 'consulting',
      readTime: '10 min',
      image: whatsapp2
    },
    {
      id: 6,
      title: currentLanguage === 'fr'
        ? 'Stratégies d\'Innovation Technologique en Afrique'
        : 'Technology Innovation Strategies in Africa',
      excerpt: currentLanguage === 'fr'
        ? 'Les entreprises africaines adoptent des stratégies d\'innovation uniques pour surmonter les défis technologiques et créer des opportunités.'
        : 'African companies adopt unique innovation strategies to overcome technological challenges and create opportunities.',
      date: '1 Oct 2025',
      author: 'Prof. Kofi Mensah',
      category: 'innovation',
      readTime: '12 min',
      image: whatsapp3
    },
    {
      id: 7,
      title: currentLanguage === 'fr'
        ? 'Développement des Talents : L\'Approche Africaine'
        : 'Talent Development: The African Approach',
      excerpt: currentLanguage === 'fr'
        ? 'Comment les organisations africaines développent leurs talents en combinant formation moderne et sagesse traditionnelle.'
        : 'How African organizations develop their talents by combining modern training with traditional wisdom.',
      date: '28 Sep 2025',
      author: 'Dr. Aisha Traore',
      category: 'leadership',
      readTime: '8 min',
      image: whatsapp4
    },
    {
      id: 8,
      title: currentLanguage === 'fr'
        ? 'Transformation Organisationnelle Post-Pandémie'
        : 'Post-Pandemic Organizational Transformation',
      excerpt: currentLanguage === 'fr'
        ? 'Les leçons apprises et les nouvelles pratiques organisationnelles qui émergent dans le contexte africain post-COVID.'
        : 'Lessons learned and new organizational practices emerging in the African post-COVID context.',
      date: '25 Sep 2025',
      author: 'Emmanuel Diop',
      category: 'transformation',
      readTime: '11 min',
      image: whatsapp5
    }
  ]

  // Services/thèmes verticaux pour la section principale
  const featuredServices = [
    {
      id: 'advisory',
      title: currentLanguage === 'fr' ? 'Conseil Stratégique' : 'Strategic Advisory',
      description: currentLanguage === 'fr' 
        ? 'Accompagnement dans la définition et mise en œuvre de stratégies de croissance'
        : 'Support in defining and implementing growth strategies',
      image: vert1,
      gradient: null
    },
    {
      id: 'transformation',
      title: currentLanguage === 'fr' ? 'Transformation Digitale' : 'Digital Transformation',
      description: currentLanguage === 'fr'
        ? 'Modernisation des processus et adoption des nouvelles technologies'
        : 'Process modernization and adoption of new technologies',
      image: vert2,
      gradient: null
    },
    {
      id: 'leadership',
      title: currentLanguage === 'fr' ? 'Développement Leadership' : 'Leadership Development',
      description: currentLanguage === 'fr'
        ? 'Formation et coaching des équipes dirigeantes'
        : 'Training and coaching of leadership teams',
      image: vert3,
      gradient: null
    }
  ]

  const filteredArticles = selectedTopic === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedTopic)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentLanguage === 'fr' ? 'Centre d\'Expertise' : 'Expertise Center'}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {currentLanguage === 'fr' 
                ? 'Insights, analyses et tendances du consulting en Afrique'
                : 'Insights, analysis and consulting trends in Africa'
              }
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Sidebar gauche - Topics */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {currentLanguage === 'fr' ? 'Sujets d\'expertise' : 'Topics of Expertise'}
                </h3>
                <nav className="space-y-2">
                  {topics.map((topic) => {
                    const IconComponent = topic.icon
                    return (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                          selectedTopic === topic.id
                            ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-600'
                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        <IconComponent size={18} />
                        <span className="text-sm font-medium">{topic.name}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Contenu principal */}
            <main className="col-span-12 lg:col-span-9">
              
              {/* Services Cards Verticaux avec effet hover */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLanguage === 'fr' ? 'Nos Domaines d\'Excellence' : 'Our Areas of Excellence'}
                </h2>
                <div className="flex flex-col md:flex-row gap-4 h-96">
                  {featuredServices.map((service) => (
                    <div
                      key={service.id}
                      className="group relative flex-1 rounded-xl overflow-hidden transition-all duration-700 ease-out hover:flex-[1.8] cursor-pointer shadow-lg hover:shadow-2xl"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 30%'
                      }}
                    >
                      {/* Overlay subtil seulement pour la lisibilité du texte */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700"></div>
                      
                      {/* Effet de brillance subtil au survol */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Content avec effet subtil */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="transform transition-all duration-500 ease-out group-hover:translate-y-[-15px]">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-xl transition-all duration-500 drop-shadow-lg">
                            {service.title}
                          </h3>
                          <p className="text-sm opacity-85 group-hover:opacity-100 transition-all duration-500 line-clamp-2 group-hover:line-clamp-none drop-shadow-md">
                            {service.description}
                          </p>
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                              <span className="text-sm font-medium">{currentLanguage === 'fr' ? 'Explorer' : 'Explore'}</span>
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Articles correspondant au topic sélectionné */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedTopic === 'all' 
                      ? (currentLanguage === 'fr' ? 'Tous nos articles' : 'All our articles')
                      : topics.find(t => t.id === selectedTopic)?.name
                    }
                  </h2>
                  <span className="text-sm text-gray-500">
                    {filteredArticles.length} {currentLanguage === 'fr' ? 'articles' : 'articles'}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {filteredArticles.map((article) => (
                    <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                      {/* Image de l'article */}
                      <div className="h-48 relative overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{
                            objectPosition: 'center 30%'
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {topics.find(t => t.id === article.category)?.name}
                          </span>
                        </div>
                      </div>

                      {/* Contenu de l'article */}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{article.author}</span>
                          </div>
                          <span className="text-blue-600">{article.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                          <span>{currentLanguage === 'fr' ? 'Lire l\'article' : 'Read article'}</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Bouton Load More */}
                {filteredArticles.length > 0 && (
                  <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-yellow-500 text-black font-bold rounded-lg hover:from-blue-700 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
                      {currentLanguage === 'fr' ? 'Charger plus d\'articles' : 'Load more articles'}
                    </button>
                  </div>
                )}
              </section>
            </main>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {currentLanguage === 'fr' ? 'Restez à la pointe' : 'Stay ahead'}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'fr' 
                ? 'Recevez nos analyses exclusives et insights du consulting africain'
                : 'Receive our exclusive analysis and insights from African consulting'
              }
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={currentLanguage === 'fr' ? 'Votre email professionnel' : 'Your professional email'}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors font-medium">
                {currentLanguage === 'fr' ? 'S\'abonner' : 'Subscribe'}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blog