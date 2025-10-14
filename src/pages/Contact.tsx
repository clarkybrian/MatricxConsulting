import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Calendar, Clock, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact: React.FC = () => {
  const { t, currentLanguage } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation d'envoi d'email
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  const openCalendly = () => {
    window.open('https://calendly.com/enablermoney/new-meeting', '_blank')
  }

  const ContactForm = () => {
    if (isSubmitted) {
      return (
        <div className="max-w-2xl mx-auto text-center py-16">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('contact.page.form.success')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('contact.page.form.successDescription', { name: formData.name, hours: '24' })}
          </p>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-3">{t('contact.page.form.scheduleText')}</h3>
            <button 
              onClick={openCalendly}
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <Calendar size={20} />
              <span>{t('contact.page.form.scheduleButton')}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.page.info.title')}</h2>
            
            {/* Téléphone */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t('contact.page.info.phone')}</h3>
                <p className="text-gray-600 mb-2">{t('contact.page.info.phoneDescription')}</p>
                <a href="tel:+237677810120" className="text-primary-600 font-medium hover:text-primary-700">
                  +237 677 810 120
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t('contact.page.info.email')}</h3>
                <p className="text-gray-600 mb-2">{t('contact.page.info.emailDescription')}</p>
                <a href="mailto:contact@matricxconsulting.com" className="text-primary-600 font-medium hover:text-primary-700">
                  contact@matricxconsulting.com
                </a>
              </div>
            </div>

            {/* Adresse */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t('contact.page.info.address')}</h3>
                <p className="text-gray-600 mb-2">{t('contact.page.info.addressDescription')}</p>
                <p className="text-primary-600 font-medium">
                  Douala, Makepe BM<br />
                  BP 12777, Cameroun
                </p>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6" />
              <h3 className="font-semibold">{t('contact.page.info.hours')}</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{t('contact.page.info.mondayFriday')}</span>
                <span>8h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('contact.page.info.saturday')}</span>
                <span>9h00 - 13h00</span>
              </div>
              <div className="flex justify-between opacity-75">
                <span>{t('contact.page.info.sunday')}</span>
                <span>{t('contact.page.info.closed')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('contact.page.form.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('contact.page.form.formDescription')}
              </p>
              
              {/* Options de contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors duration-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageSquare className="w-6 h-6 text-primary-600" />
                    <h3 className="font-semibold text-gray-900">Écrire un message</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Décrivez votre projet et nous vous répondrons sous 24h
                  </p>
                  <button
                    type="button"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center space-x-2"
                  >
                    <span>Utiliser le formulaire</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
                
                <div className="border-2 border-primary-300 bg-primary-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="w-6 h-6 text-primary-600" />
                    <h3 className="font-semibold text-gray-900">Prendre rendez-vous</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Réservez directement un créneau dans mon agenda
                  </p>
                  <button
                    type="button"
                    onClick={openCalendly}
                    className="btn-primary inline-flex items-center space-x-2 group"
                  >
                    <Calendar size={16} />
                    <span>Réserver maintenant</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>

            <div id="contact-form"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.page.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder={t('contact.page.form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.page.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder={t('contact.page.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.page.form.company')} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder={t('contact.page.form.companyPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.page.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder={t('contact.page.form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.page.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={t('contact.page.form.messagePlaceholder')}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary flex-1 inline-flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('contact.page.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.page.form.send')}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={openCalendly}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-primary-300 text-primary-600 font-medium rounded-xl hover:bg-primary-50 transition-all duration-300 group"
                >
                  <Calendar size={20} />
                  <span>{t('contact.page.form.orSchedule')}</span>
                </button>
              </div>
            </form>

            {/* Temps de réponse */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 text-green-700">
                <CheckCircle size={18} />
                <span className="text-sm font-medium">
                  {t('contact.page.form.responseGuarantee')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div key={currentLanguage} className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <Header />
      <main className="pt-20">
        <div className="container-custom py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <MessageSquare size={18} className="mr-2" />
              {t('contact.page.badge')}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('contact.page.title')} <span className="gradient-text">{t('contact.page.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.page.subtitle')}
            </p>
          </div>

          <ContactForm />

          {/* Carte Google Maps */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.page.location')}</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.4142436057587!2d9.757311314770143!3d4.048404497209794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0b6f9f5b49%3A0x7a6f8b5c2d3e4a5b!2sMakep%C3%A9%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1697299200000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MatriCx Consulting Location"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact