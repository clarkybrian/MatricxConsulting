import React, { useState, useEffect } from 'react'

interface AnimatedTextProps {
  baseText: string
  animatedWords: string[]
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ baseText, animatedWords, className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  // Réinitialiser l'animation quand les mots changent (changement de langue)
  useEffect(() => {
    setCurrentWordIndex(0)
    setDisplayedText('')
    setIsTyping(true)
  }, [animatedWords])

  useEffect(() => {
    const currentWord = animatedWords[currentWordIndex]
    
    if (isTyping) {
      // Animation de frappe (écriture)
      if (displayedText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, 100) // Vitesse de frappe (gardée telle quelle)
        return () => clearTimeout(timer)
      } else {
        // Mot complètement écrit, attendre puis commencer à effacer
        const timer = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Temps d'affichage du mot complet
        return () => clearTimeout(timer)
      }
    } else {
      // Animation d'effacement
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 40) // Vitesse d'effacement (2x plus rapide : 80ms -> 40ms)
        return () => clearTimeout(timer)
      } else {
        // Mot complètement effacé, passer au suivant
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentWordIndex, animatedWords])

  // Animation du curseur
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500) // Clignote toutes les 500ms
    
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {baseText}
      <span 
        className="inline-block min-w-fit"
        style={{ 
          background: 'linear-gradient(135deg, #2563EB, #F59E0B)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 'bold'
        }}
      >
        {displayedText}
        <span 
          className={`inline-block w-1 h-0.5 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundColor: '#2563EB',
            transform: 'translateY(-0.2em)',
            transition: 'opacity 0.1s'
          }}
        />
      </span>
    </span>
  )
}

export default AnimatedText