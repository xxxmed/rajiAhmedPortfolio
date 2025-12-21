'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Card from './ui/Card'
import Button from './ui/Button'
import Image from 'next/image'
import ProjectModal from './ProjectModal'

interface Project {
  titleKey: string
  descriptionKey: string
  image: string
  architectureImage?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card hover className="h-full cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <div className="relative mb-4">
          <Image
            src={project.image}
            alt={t(project.titleKey)}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-lg"
          />
          
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {t(project.titleKey)}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {t(project.descriptionKey)}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                {t('Projects.sourceCode')}
              </Button>
            </a>
          )}
        </div>
      </Card>

      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
