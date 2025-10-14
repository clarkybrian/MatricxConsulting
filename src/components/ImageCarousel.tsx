import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image6 from '../images/image6.jpg'

const ImageCarousel: React.FC = () => {
  const { t } = useTranslation()
  const [currentImageIndex, setCurrentImageIndex] = useState(1) // Commencer à 1 pour la première vraie image
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Images professionnelles de MatriCx Consulting avec traductions
  const originalImages = [
    {
      url: image1,
      alt: "MatriCx Consulting - Excellence professionnelle",
      title: t('carousel.images.0.title'),
      subtitle: t('carousel.images.0.subtitle')
    },
    {
      url: image2,
      alt: "MatriCx Consulting - Équipe experte",
      title: t('carousel.images.1.title'),
      subtitle: t('carousel.images.1.subtitle')
    },
    {
      url: image3,
      alt: "MatriCx Consulting - Innovation stratégique",
      title: t('carousel.images.2.title'),
      subtitle: t('carousel.images.2.subtitle')
    },
    {
      url: image4,
      alt: "MatriCx Consulting - Expertise reconnue",
      title: t('carousel.images.3.title'),
      subtitle: t('carousel.images.3.subtitle')
    },
    {
      url: image6,
      alt: "MatriCx Consulting - Solutions professionnelles",
      title: t('carousel.images.4.title'),
      subtitle: t('carousel.images.4.subtitle')
    }
  ]

  // Créer un tableau étendu pour la boucle infinie
  // [dernière image, ...images originales, première image]
  const images = [
    originalImages[originalImages.length - 1], // Copie de la dernière image
    ...originalImages,                          // Toutes les images originales
    originalImages[0]                          // Copie de la première image
  ]

  // Auto-rotation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setIsTransitioning(true)
    setCurrentImageIndex(prev => prev + 1)
  }

  const prevImage = () => {
    setIsTransitioning(true)
    setCurrentImageIndex(prev => prev - 1)
  }

  return (
    <div className="relative">
      {/* Main Carousel Container */}
      <div className="aspect-square bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Images Container */}
        <div 
          className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
            width: `${images.length * 100}%`
          }}
          onTransitionEnd={() => {
            if (currentImageIndex === 0) {
              setIsTransitioning(false)
              setCurrentImageIndex(originalImages.length)
            } else if (currentImageIndex === images.length - 1) {
              setIsTransitioning(false)
              setCurrentImageIndex(1)
            }
          }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="w-full h-full relative flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-transparent to-secondary-900/40"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-shadow-medium">
                    {image.title}
                  </h3>
                  <p className="text-lg lg:text-xl opacity-90 text-shadow-soft">
                    {image.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {originalImages.map((_, index) => {
            const actualIndex = index + 1 // +1 car les vraies images commencent à l'index 1
            const isActive = currentImageIndex === actualIndex || 
                           (currentImageIndex === 0 && index === originalImages.length - 1) ||
                           (currentImageIndex === images.length - 1 && index === 0)
            return (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true)
                  setCurrentImageIndex(actualIndex)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{t('carousel.badges.satisfied')}</div>
            <div className="text-sm text-gray-600">{t('carousel.badges.africa')}</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-600">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{t('carousel.badges.results')}</div>
            <div className="text-sm text-gray-600">{t('carousel.badges.transformation')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel