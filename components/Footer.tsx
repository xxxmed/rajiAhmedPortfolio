import {personalInfo} from '@/lib/data'
import {Link} from '@/src/i18n/navigation'
import {useTranslations} from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400">
              {t('tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">{t('links.about')}</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">{t('links.projects')}</Link></li>
              <li><Link href="/skills" className="text-gray-400 hover:text-white transition-colors">{t('links.skills')}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">{t('links.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.title')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t('contact.email', {value: ''})}<a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a></p>
              <p>{t('contact.phone', {value: ''})}<a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">{personalInfo.phone}</a></p>
              <div className="flex space-x-4 mt-4">
                {personalInfo.socialLinks.linkedin && (
                  <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                )}
                {personalInfo.socialLinks.github && (
                  <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
