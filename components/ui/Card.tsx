import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseClasses = 'bg-white rounded-lg shadow-md p-6'
  const hoverClasses = hover ? 'card-hover' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}
