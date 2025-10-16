import React, { useState, useCallback } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import finexsLogo from '../images/finexs.png'
import matricxLogo from '../images/logomatricx.png'
import matrixLogo from '../images/matrix.png'
import newtelnetLogo from '../images/newtelnet.png'
import wafaLogo from '../images/wafa.png'
import hotelLogo from '../images/hotel.png'

const PartnersCarousel: React.FC = () => {
  const { currentLanguage } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)
  
  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  const partners = [
    {
      type: 'image',
      src: finexsLogo,
      alt: 'Finexs',
      name: 'Finexs'
    },
    {
      type: 'image',
      src: matricxLogo,
      alt: 'MatriCx',
      name: 'MatriCx'
    },
    {
      type: 'image',
      src: matrixLogo,
      alt: 'Matrix',
      name: 'Matrix'
    },
    {
      type: 'image',
      src: newtelnetLogo,
      alt: 'New Telnet',
      name: 'New Telnet'
    },
    {
      type: 'image',
      src: wafaLogo,
      alt: 'WAFA',
      name: 'WAFA'
    },
    {
      type: 'image',
      src: hotelLogo,
      alt: 'Hotel',
      name: 'Hotel'
    }
  ]

  // Dupliquer exactement 2 fois pour un défilement CSS fluide
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'fr' ? 'Ils nous font confiance' : 'They Trust Us'}
          </h2>
          <p className="text-lg text-gray-600">
            {currentLanguage === 'fr' 
              ? 'Des partenaires de confiance qui ont choisi notre expertise' 
              : 'Trusted partners who chose our expertise'
            }
          </p>
        </div>

        {/* Conteneur du carrousel avec gradient fade */}
        <div className="relative overflow-hidden h-20">
          {/* Gradient fade gauche */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Gradient fade droite */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Carrousel avec CSS pur - fluide garanti */}
          <div 
            className={`flex space-x-12 ${isHovered ? 'carousel-paused' : 'carousel-scroll'}`}
            style={{ width: 'max-content' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 w-32 hover:scale-130 transition-transform duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {partner.type === 'image' ? (
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="max-h-16 max-w-28 object-contain transition-all duration-300"
                  />
                ) : (
                  <div className="text-2xl font-bold text-gray-700 hover:text-gray-900 transition-colors duration-300 font-primary">
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel