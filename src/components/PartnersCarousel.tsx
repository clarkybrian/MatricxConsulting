import React, { useState, useCallback } from 'react'
import finexsLogo from '../images/finexs.png'
import matricxLogo from '../images/logomatricx.png'
import matrixLogo from '../images/matrix.png'
import newtelnetLogo from '../images/newtelnet.png'
import wafaLogo from '../images/wafa.png'
import hotelLogo from '../images/hotel.png'

const PartnersCarousel: React.FC = () => {
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
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          {/* Conteneur du carrousel */}
          <div className="relative overflow-hidden h-20">
            {/* Carrousel avec CSS pur */}
            <div 
              className={`flex space-x-12 ${isHovered ? 'carousel-paused' : 'carousel-scroll'}`}
              style={{ width: 'max-content' }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 w-32 hover:scale-110 transition-transform duration-300"
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
      </div>
    </section>
  )
}

export default PartnersCarousel