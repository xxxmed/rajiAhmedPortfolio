import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <main>
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="Mes Projets" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
