import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { projects, skillCategories, certifications, personalInfo } from '@/lib/data'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import { HiArrowRight, HiMail, HiPhone, HiLocationMarker, HiBriefcase, HiAcademicCap, HiExternalLink, HiBadgeCheck } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })

  // Get preview data (limited items for home page)
  const previewProjects = projects.slice(0, 3)
  const previewSkillCategories = Object.entries(skillCategories).slice(0, 4)
  const previewCertifications = certifications.slice(0, 2)

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t('Pages.about.title')}
              </h2>
              <p className="text-gray-600">{t('Home.aboutSubtitle')}</p>
            </div>
            <Link 
              href="/about" 
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              {t('Home.viewMore')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                <Image
                  src="/images/profile.webp?v=1"
                  alt={personalInfo.name}
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{personalInfo.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{t(personalInfo.titleKey)}</p>
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                {t(personalInfo.bioKey)}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <HiMail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <HiPhone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <HiLocationMarker className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                {t('Home.learnMore')} <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t('Pages.skills.title')}
              </h2>
              <p className="text-gray-600">{t('Pages.skills.subtitle')}</p>
            </div>
            <Link 
              href="/skills" 
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              {t('Home.viewAll')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewSkillCategories.map(([key, category]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
                  {t(category.titleKey)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {category.skills.length > 5 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{category.skills.length - 5}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link 
              href="/skills" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              {t('Home.viewAll')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t('Pages.projects.title')}
              </h2>
              <p className="text-gray-600">{t('Pages.projects.subtitle')}</p>
            </div>
            <Link 
              href="/projects" 
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              {t('Home.viewAll')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {t(project.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      <FaGithub className="w-4 h-4" /> {t('Projects.sourceCode')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('Home.viewAllProjects')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Preview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t('Pages.certifications.title')}
              </h2>
              <p className="text-gray-600">{t('Pages.certifications.subtitle')}</p>
            </div>
            <Link 
              href="/certifications" 
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              {t('Home.viewAll')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewCertifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <HiBadgeCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {t(cert.titleKey)}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {t(cert.issuerKey)} • {t(cert.dateKey)}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {t(cert.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {cert.credentialUrl && (
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        {t('Pages.certifications.viewCredential')} <HiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/certifications" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('Home.viewAllCertifications')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('Pages.contact.title')}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {t('Home.contactDescription')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-xl transition-colors"
              >
                <HiMail className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium" dir="ltr">{personalInfo.email}</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-xl transition-colors"
              >
                <HiPhone className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium" dir="ltr">{personalInfo.phone}</span>
              </a>
            </div>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              {t('Home.sendMessage')} <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


