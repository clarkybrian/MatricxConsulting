import React from 'react'
import Header from '../components/Header'
import UnderConstruction from '../components/UnderConstruction'
import Footer from '../components/Footer'

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <UnderConstruction pageName="Blog" />
      </main>
      <Footer />
    </div>
  )
}

export default Blog