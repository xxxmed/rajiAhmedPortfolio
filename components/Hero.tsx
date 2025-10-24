import React from 'react'
import Button from './ui/Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bonjour, je suis{' '}
              <span className="text-blue-600">Ahmed</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences web 
              exceptionnelles et l'innovation technologique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Voir mes projets
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Télécharger CV
              </Button>
            </div>
          </div>
          
          <div className="animate-fadeInUp">
            <div className="relative">
              <Image
                src="/images/profile.jpg"
                alt="Ahmed - Développeur Full Stack"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Développeur</p>
                <p className="text-sm">Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
