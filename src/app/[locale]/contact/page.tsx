'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import {useTranslations} from 'next-intl'
import { personalInfo } from '@/lib/data'
import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin,FaGlobeAmericas } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { MdMessage } from 'react-icons/md'

export default function Contact() {
  const t = useTranslations()
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('Pages.contact.title')} 
            subtitle={t('Pages.contact.subtitle')}
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Contact Information Card */}
              <div className="space-y-6 animate-fade-in-left">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MdMessage className="text-blue-600" /> {t('Pages.contact.infoTitle')}
                  </h3>
                  
                  <div className="space-y-4">
                    <a href={`mailto:${personalInfo.email}`}
                       className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all group">
                      <div className="bg-blue-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <HiMail className="text-2xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{t('Pages.about.email')}</p>
                        <p className="text-gray-900 font-semibold">{personalInfo.email}</p>
                      </div>
                    </a>
                    
                    <a href={`tel:${personalInfo.phone}`}
                       className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all group">
                      <div className="bg-green-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <HiPhone className="text-2xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{t('Pages.about.phone')}</p>
                        <p className="text-gray-900 font-semibold">{personalInfo.phone}</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className="bg-purple-600 text-white p-3 rounded-lg">
                        <HiLocationMarker className="text-2xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{t('Pages.about.location')}</p>
                        <p className="text-gray-900 font-semibold">{personalInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Links Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <FaGlobeAmericas className="text-white" /> {t('Pages.contact.socialTitle')}
                    </h3>
                  <div className="space-y-3">
                    <a href={personalInfo.socialLinks.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all backdrop-blur">
                      <FaGithub className="text-xl" />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a href={personalInfo.socialLinks.linkedin}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all backdrop-blur">
                      <FaLinkedin className="text-xl" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form Card */}
              <div className="animate-fade-in-right">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <IoMdSend className="text-blue-600" /> {t('Pages.contact.formTitle')}
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('Pages.contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                        placeholder={t('Pages.contact.namePlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('Pages.contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                        placeholder={t('Pages.contact.emailPlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('Pages.contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        required
                        placeholder={t('Pages.contact.messagePlaceholder')}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all transform hover:scale-105 ${
                        formStatus === 'loading' 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : formStatus === 'success'
                          ? 'bg-green-600 hover:bg-green-700'
                          : formStatus === 'error'
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      }`}
                    >
                      {formStatus === 'loading' && `⏳ ${t('Pages.contact.sending')}`}
                      {formStatus === 'success' && `✅ ${t('Pages.contact.success')}`}
                      {formStatus === 'error' && `❌ ${t('Pages.contact.error')}`}
                      {formStatus === 'idle' && (
                        <span className="flex items-center justify-center gap-2">
                          <IoMdSend /> {t('Pages.contact.form.submit')}
                        </span>
                      )}
                    </button>
                  </form>
                  
                  {formStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg animate-fade-in-up">
                      <p className="text-green-800 font-medium">
                        ✅ {t('Pages.contact.successMessage')}
                      </p>
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-fade-in-up">
                      <p className="text-red-800 font-medium">
                        ❌ {t('Pages.contact.errorMessage')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


