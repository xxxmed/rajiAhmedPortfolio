import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import SkillCard from '@/components/SkillCard'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <main>
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="Mes Compétences" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
