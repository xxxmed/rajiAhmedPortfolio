import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import SkillCard from '@/components/SkillCard'
import { skillCategories } from '@/lib/data'
import { HiLightningBolt, HiCode, HiDatabase, HiDesktopComputer, HiCog, HiBeaker, HiChartBar, HiTemplate, HiCube } from 'react-icons/hi'

const categoryIcons: Record<string, React.ReactNode> = {
  erp: <HiCube className="w-8 h-8" />,
  backend: <HiCode className="w-8 h-8" />,
  database: <HiDatabase className="w-8 h-8" />,
  frontend: <HiDesktopComputer className="w-8 h-8" />,
  devops: <HiCog className="w-8 h-8" />,
  testing: <HiBeaker className="w-8 h-8" />,
  dataScience: <HiChartBar className="w-8 h-8" />,
  modeling: <HiTemplate className="w-8 h-8" />,
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Skills({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Pages' })
  const tData = await getTranslations({ locale, namespace: 'Data' })
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={
              <span className="flex items-center justify-center gap-2">
                <HiLightningBolt className="text-yellow-500" />
                {t('skills.title')}
              </span>
            }
            subtitle={t('skills.subtitle')}
          />
          
          <div className="max-w-7xl mx-auto space-y-16">
            {Object.entries(skillCategories).map(([key, category]) => (
              <div key={key} className="animate-fade-in-up">
                {/* Category Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-xl shadow-md text-blue-600">
                    {categoryIcons[key] || <HiCode className="w-8 h-8" />}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {tData(category.titleKey.replace('Data.', ''))}
                  </h2>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-transparent rounded-full" />
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                  {category.skills.map((skill) => (
                    <SkillCard 
                      key={skill.name} 
                      skill={{ ...skill, categoryKey: category.titleKey }} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


