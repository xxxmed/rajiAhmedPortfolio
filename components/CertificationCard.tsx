'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { HiBadgeCheck, HiCalendar, HiExternalLink, HiX, HiDownload, HiPhotograph } from 'react-icons/hi'

interface Certification {
  titleKey: string
  issuerKey: string
  dateKey: string
  descriptionKey: string
  skills?: string[]
  credentialUrl?: string
  certificateImage?: string
}

interface CertificationCardProps {
  certification: Certification
  index: number
}

export default function CertificationCard({ certification, index }: CertificationCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const t = useTranslations('Pages')
  const tData = useTranslations('Data')

  const hasCertificateImage = !!certification.certificateImage
  const isPdf = certification.certificateImage?.toLowerCase().endsWith('.pdf')

  const handleCardClick = () => {
    if (hasCertificateImage) {
      if (isPdf) {
        // Open PDF in new tab
        window.open(certification.certificateImage, '_blank')
      } else {
        // Open modal for images
        setImageError(false)
        setIsModalOpen(true)
      }
    }
  }

  const handleDownload = () => {
    if (certification.certificateImage) {
      const link = document.createElement('a')
      link.href = certification.certificateImage
      link.download = certification.certificateImage.split('/').pop() || 'certificate'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <>
      <div 
        onClick={handleCardClick}
        className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 animate-fade-in-up group ${hasCertificateImage ? 'cursor-pointer' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Certificate Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform">
            <HiBadgeCheck className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {tData(certification.titleKey.replace('Data.', ''))}
            </h3>
            <p className="text-blue-600 font-semibold">
              {tData(certification.issuerKey.replace('Data.', ''))}
            </p>
          </div>
          {hasCertificateImage && (
            <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
              <HiPhotograph className="w-5 h-5" />
            </div>
          )}
        </div>
        
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <HiCalendar className="w-4 h-4" />
          <span className="text-sm">{tData(certification.dateKey.replace('Data.', ''))}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {tData(certification.descriptionKey.replace('Data.', ''))}
        </p>
        
        {/* Skills Tags */}
        {certification.skills && certification.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {/* Actions Row */}
        <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
          {/* Credential Link */}
          {certification.credentialUrl && (
            <a 
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
            >
              <HiExternalLink className="w-4 h-4" />
              {t('certifications.viewCredential')}
            </a>
          )}
          
          {/* View Certificate hint */}
          {hasCertificateImage && (
            <span className="text-xs text-gray-400">
              {isPdf ? t('certifications.clickToViewPdf') : t('certifications.clickToView')}
            </span>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && hasCertificateImage && !isPdf && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {tData(certification.titleKey.replace('Data.', ''))}
                </h3>
                <p className="text-sm text-gray-600">
                  {tData(certification.issuerKey.replace('Data.', ''))}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Download"
                >
                  <HiDownload className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Certificate Image */}
            <div className="relative w-full h-[70vh] bg-gray-100 flex items-center justify-center">
              {imageError ? (
                <div className="text-center text-gray-500">
                  <HiPhotograph className="w-16 h-16 mx-auto mb-2" />
                  <p>Image could not be loaded</p>
                  <a 
                    href={certification.certificateImage!} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Open in new tab
                  </a>
                </div>
              ) : (
                <Image
                  src={certification.certificateImage!}
                  alt={tData(certification.titleKey.replace('Data.', ''))}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  unoptimized
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
