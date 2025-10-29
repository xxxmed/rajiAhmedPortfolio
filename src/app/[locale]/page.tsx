import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {setRequestLocale} from 'next-intl/server'

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const {locale} = await params
  setRequestLocale(locale)
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}


