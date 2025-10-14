import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Bot, User, ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

interface ChatMessage {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface QuickAction {
  id: string
  text: string
  category: string
}

const Chatbot: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentQuickActions, setCurrentQuickActions] = useState<QuickAction[]>([])
  const [questionHistory, setQuestionHistory] = useState<QuickAction[][]>([])
  const [showQuestions, setShowQuestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)



  // Auto-scroll vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialiser le chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: '1',
          text: t('chatbot.welcome'),
          isUser: false,
          timestamp: new Date()
        }])
        setCurrentQuickActions([
          { id: 'services', text: t('chatbot.questions.services'), category: 'general' },
          { id: 'about', text: t('chatbot.questions.about'), category: 'general' },
          { id: 'contact', text: t('chatbot.questions.contact'), category: 'contact' },
          { id: 'experience', text: t('chatbot.questions.experience'), category: 'expertise' }
        ])
        setQuestionHistory([]) // Réinitialiser l'historique
        setShowQuestions(true) // Afficher les questions par défaut
      }, 500)
    }
  }, [isOpen, messages.length, currentLanguage, t])

  // Réinitialiser les messages quand la langue change (si chatbot ouvert)
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      setMessages([{
        id: '1',
        text: t('chatbot.welcome'),
        isUser: false,
        timestamp: new Date()
      }])
      setCurrentQuickActions([
        { id: 'services', text: t('chatbot.questions.services'), category: 'general' },
        { id: 'about', text: t('chatbot.questions.about'), category: 'general' },
        { id: 'contact', text: t('chatbot.questions.contact'), category: 'contact' },
        { id: 'experience', text: t('chatbot.questions.experience'), category: 'expertise' }
      ])
      setQuestionHistory([])
      setShowQuestions(true)
    }
  }, [currentLanguage, isOpen, t, messages.length])

  // Fonction pour fermer le chatbot et réinitialiser
  const closeChatbot = () => {
    setIsOpen(false)
    // Optionnel : réinitialiser complètement l'état pour une nouvelle session
    // setMessages([])
    // setCurrentQuickActions([])
    // setQuestionHistory([])
    // setShowQuestions(true)
  }

  const handleQuickAction = (action: QuickAction) => {
    // Sauvegarder les questions actuelles dans l'historique
    if (currentQuickActions.length > 0) {
      setQuestionHistory(prev => [...prev, currentQuickActions])
    }
    
    // Ajouter le message utilisateur
    const userMessage: ChatMessage = {
      id: Date.now().toString() + '_user',
      text: action.text,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setCurrentQuickActions([])
    
    // Simuler la frappe
    setIsTyping(true)
    
    setTimeout(() => {
      setIsTyping(false)
      
      // Ajouter la réponse - utiliser les traductions directement
      let responseText = ''
      let responseActions: QuickAction[] = []
      
      if (action.id === 'services') {
        responseText = t('chatbot.responses.services')
        responseActions = [
          { id: 'advisory_details', text: t('chatbot.actions.advisoryDetails'), category: 'services' },
          { id: 'survey_details', text: t('chatbot.actions.surveyDetails'), category: 'services' },
          { id: 'technology_details', text: t('chatbot.actions.technologyDetails'), category: 'services' },
          { id: 'training_details', text: t('chatbot.actions.trainingDetails'), category: 'services' }
        ]
      } else if (action.id === 'about') {
        responseText = t('chatbot.responses.about')
        responseActions = [
          { id: 'values', text: t('chatbot.actions.values'), category: 'info' },
          { id: 'team', text: t('chatbot.actions.team'), category: 'info' },
          { id: 'contact', text: t('chatbot.actions.contact'), category: 'contact' }
        ]
      } else if (action.id === 'contact') {
        responseText = t('chatbot.responses.contact')
        responseActions = [
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      } else {
        responseText = t('chatbot.responses.defaultResponse')
        responseActions = [
          { id: 'redirect_contact', text: t('chatbot.actions.redirectContact'), category: 'redirect' }
        ]
      }
      
      const botMessage: ChatMessage = {
        id: Date.now().toString() + '_bot',
        text: responseText,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setCurrentQuickActions(responseActions)
    }, 1500) // Animation de 1.5 seconde
  }

  // Fonction pour revenir en arrière
  const goBack = () => {
    if (questionHistory.length > 0) {
      const previousQuestions = questionHistory[questionHistory.length - 1]
      setCurrentQuickActions(previousQuestions)
      setQuestionHistory(prev => prev.slice(0, -1))
    }
  }

  const handleSpecialAction = (actionId: string) => {
    if (actionId === 'take_appointment') {
      window.open('https://calendly.com/matricx-consulting', '_blank')
    } else if (actionId === 'redirect_contact') {
      // Fermer le chatbot et rediriger vers la page contact
      setIsOpen(false)
      window.location.href = '/contact'
    }
    // Ajouter d'autres actions spéciales si nécessaire
  }

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.includes('**') ? (
          <div dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/✅|🎯|📊|⚙️|🎓|📞|💬|⏰|📈|🔄|✨|🔍|👥|📝|🗓️|💰|🆓|📋/g, '<span style="font-size: 1.1em;">$&</span>')
          }} />
        ) : (
          <span>{line}</span>
        )}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => isOpen ? closeChatbot() : setIsOpen(true)}
        className={`fixed bottom-[1.5rem] right-[1.5rem] w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-[9999] ${
          isOpen ? 'bg-gray-600 hover:bg-gray-700' : 'bg-secondary-500 hover:bg-secondary-600'
        }`}
        style={{ position: 'fixed' }}
      >
        {isOpen ? (
          <X className="w-6 md:w-8 h-6 md:h-8 text-white mx-auto" />
        ) : (
          <MessageCircle className="w-6 md:w-8 h-6 md:h-8 text-white mx-auto" />
        )}
      </button>

      {/* Fenêtre de chat - Responsive */}
      {isOpen && (
        <div 
          className="fixed right-[1.5rem] left-4 md:left-auto w-auto md:w-[365px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-[9998]"
          style={{ 
            position: 'fixed',
            bottom: '5.5rem',
            height: 'min(650px, calc(100vh - 8rem))',
            maxHeight: 'calc(100vh - 8rem)'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">{t('chatbot.name')}</h3>
                <p className="text-sm opacity-90">{t('chatbot.status')}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser ? 'bg-primary-500' : 'bg-gray-200'
                  }`}>
                    {message.isUser ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.isUser 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="text-sm leading-relaxed">
                      {formatMessage(message.text)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Animation de frappe */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Actions rapides avec navigation améliorée */}
          {currentQuickActions.length > 0 && !isTyping && (
            <div className="border-t border-gray-100">
              {/* Barre de navigation */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
                <div className="flex items-center space-x-2">
                  {/* Bouton retour */}
                  {questionHistory.length > 0 && (
                    <button
                      onClick={goBack}
                      className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-primary-600 hover:bg-white rounded transition-colors duration-200"
                      title="Revenir aux questions précédentes"
                    >
                      <ArrowLeft size={14} />
                      <span>{t('chatbot.back')}</span>
                    </button>
                  )}
                  
                  {/* Indicateur de navigation */}
                  <span className="text-xs text-gray-500">
                    {t('chatbot.suggestions')} {questionHistory.length > 0 && `(${t('chatbot.level')} ${questionHistory.length + 1})`}
                  </span>
                </div>
                
                {/* Bouton replier/déplier */}
                <button
                  onClick={() => setShowQuestions(!showQuestions)}
                  className="flex items-center space-x-1 px-2 py-1 text-xs text-gray-600 hover:text-primary-600 hover:bg-white rounded transition-colors duration-200"
                  title={showQuestions ? t('chatbot.hide') + ' les suggestions' : t('chatbot.show') + ' les suggestions'}
                >
                  {showQuestions ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  <span>{showQuestions ? t('chatbot.hide') : t('chatbot.show')}</span>
                </button>
              </div>
              
              {/* Questions (repliables) */}
              {showQuestions && (
                <div className="p-4 space-y-2">
                  {currentQuickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => {
                        if (action.id === 'take_appointment' || action.id === 'redirect_contact') {
                          handleSpecialAction(action.id)
                        } else {
                          handleQuickAction(action)
                        }
                      }}
                      className="w-full text-left px-3 py-2 text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition-colors duration-200 border border-primary-200"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Chatbot