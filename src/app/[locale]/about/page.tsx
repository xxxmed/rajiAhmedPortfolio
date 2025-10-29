import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import {getTranslations} from 'next-intl/server'

export default async function About() {
  const t = await getTranslations('Pages')
  return (
    <main>
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title={t('about.title')} />
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.body')}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}


