'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi'

interface Project {
  titleKey: string
  descriptionKey: string
  image: string
  architectureImage?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const t = useTranslations()

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header avec image */}
        <div className="relative h-64 sm:h-80">
          <Image
            src={project.image}
            alt={t(project.titleKey)}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
          >
            <HiX className="w-6 h-6" />
          </button>
          
          {/* Titre sur l'image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t(project.titleKey)}
            </h2>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)]">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description complète */}
          <div className="prose prose-gray max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed text-base">
              {t(project.descriptionKey)}
            </p>
          </div>

          {/* Architecture technique (si disponible) */}
          {project.architectureImage && (
            <div className="mb-6 bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Architecture Technique
              </h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={project.architectureImage}
                  alt={`${t(project.titleKey)} - Architecture`}
                  fill
                  className="object-contain bg-gray-900"
                />
              </div>
            </div>
          )}

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <HiCode className="w-5 h-5" />
                  {t('Projects.sourceCode')}
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <HiExternalLink className="w-5 h-5" />
                  {t('Projects.viewProject')}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
