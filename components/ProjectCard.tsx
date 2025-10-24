import React from 'react'
import Card from './ui/Card'
import Button from './ui/Button'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="h-full">
      <div className="relative mb-4">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {project.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        {project.liveUrl && (
          <Button size="sm" className="flex-1">
            Voir le projet
          </Button>
        )}
        {project.githubUrl && (
          <Button variant="outline" size="sm" className="flex-1">
            Code source
          </Button>
        )}
      </div>
    </Card>
  )
}
