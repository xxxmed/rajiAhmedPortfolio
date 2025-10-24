import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="À propos de moi" />
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            Développeur passionné avec une expertise en développement full-stack...
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
