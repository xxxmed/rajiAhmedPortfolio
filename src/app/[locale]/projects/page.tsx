import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import {getTranslations} from 'next-intl/server'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'
import { HiCode } from 'react-icons/hi'

export default async function Projects() {
  const t = await getTranslations('Pages')
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={
              <span className="flex items-center justify-center gap-2">
                <HiCode className="text-blue-600" />
                {t('projects.title')}
              </span>
            }
            subtitle={t('projects.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


