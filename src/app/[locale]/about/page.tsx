import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import {getTranslations} from 'next-intl/server'
import { personalInfo, experiences, education } from '@/lib/data'
import Image from 'next/image'
import { HiMail, HiPhone, HiLocationMarker, HiBriefcase, HiAcademicCap, HiCalendar, HiOfficeBuilding } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'

export default async function About() {
  const t = await getTranslations()
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section with Personal Info */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                    <Image
                      src="/images/profile.webp"
                      alt={personalInfo.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ {t(personalInfo.titleKey)}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {personalInfo.name}
                  </h1>
                  <p className="text-xl text-blue-600 font-semibold mb-3">
                    {t(personalInfo.titleKey)}
                  </p>
                  <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
                    <HiLocationMarker className="text-2xl text-blue-600" /> {personalInfo.location}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t(personalInfo.bioKey)}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <a href={`mailto:${personalInfo.email}`} 
                   className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <HiMail className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase">{t('Pages.about.email')}</p>
                    <p className="text-gray-700 font-medium">{personalInfo.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${personalInfo.phone}`}
                   className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                  <HiPhone className="text-2xl text-green-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase">{t('Pages.about.phone')}</p>
                    <p className="text-gray-700 font-medium">{personalInfo.phone}</p>
                  </div>
                </a>
              </div>
              
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
                <a href={personalInfo.socialLinks.github} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <FaGithub /> GitHub
                </a>
                <a href={personalInfo.socialLinks.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={personalInfo.socialLinks.twitter}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                  <FaTwitter /> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={
              <span className="flex items-center justify-center gap-2">
                <HiBriefcase className="text-blue-600" />
                {t('Pages.sections.experience.title')}
              </span>
            }
            subtitle={t('Pages.sections.experience.subtitle')}
          />
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 card-hover animate-fade-in-up border-l-4 border-blue-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {t(exp.titleKey)}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold flex items-center gap-2">
                      <HiOfficeBuilding /> {t(exp.companyKey)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                    <HiCalendar /> {t(exp.periodKey)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t(exp.descriptionKey)}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-blue-200 hover:bg-blue-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={
              <span className="flex items-center justify-center gap-2">
                <HiAcademicCap className="text-indigo-600" />
                {t('Pages.sections.education.title')}
              </span>
            }
            subtitle={t('Pages.sections.education.subtitle')}
          />
          
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 card-hover animate-fade-in-up border-l-4 border-indigo-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {t(edu.degreeKey)}
                    </h3>
                    <p className="text-lg text-indigo-600 font-semibold flex items-center gap-2">
                      <MdSchool /> {t(edu.schoolKey)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                    <HiCalendar /> {t(edu.periodKey)}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {t(edu.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


