import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UnderConstruction from '../../components/UnderConstruction'

const Training: React.FC = () => {
  const { currentLanguage } = useTranslation()
  
  return (
    <div key={currentLanguage} className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <UnderConstruction pageName="MatriCx Training" />
      </main>
      <Footer />
    </div>
  )
}

export default Training