import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import Header from '../components/Header'
import UnderConstruction from '../components/UnderConstruction'
import Footer from '../components/Footer'

const About: React.FC = () => {
  const { currentLanguage } = useTranslation() // Force re-render when language changes
  return (
    <div key={currentLanguage} className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <UnderConstruction pageName="À Propos" />
      </main>
      <Footer />
    </div>
  )
}

export default About