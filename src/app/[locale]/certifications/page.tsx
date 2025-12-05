import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import CertificationCard from '@/components/CertificationCard'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import { certifications } from '@/lib/data'
import { HiAcademicCap } from 'react-icons/hi'

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Certifications({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Pages' })
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={
              <span className="flex items-center justify-center gap-2">
                <HiAcademicCap className="text-blue-600" />
                {t('certifications.title')}
              </span>
            }
            subtitle={t('certifications.subtitle')}
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard 
                  key={index} 
                  certification={cert} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
