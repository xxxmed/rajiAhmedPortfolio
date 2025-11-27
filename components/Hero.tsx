
import Button from './ui/Button'
import Image from 'next/image'
import {useTranslations} from 'next-intl'
import { useLocale } from 'next-intl';
import { Link } from '@/src/i18n/navigation';

export default function Hero() {
  const t = useTranslations('Hero')
  const locale = useLocale();
  let cvHref = '';

  switch (locale) {
    case 'ar':
      cvHref = '/cv/AhmedRajiCV_fr.pdf';
      break;
    case 'en':
      cvHref = '/cv/AhmedRajiCV_en.pdf';
      break;
    default:
      cvHref = '/cv/AhmedRajiCV_fr.pdf';
      break;
  }
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('title', {name: 'Ahmed'})}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                {t('viewProjects')}
              </Button>
              </Link>
              <a href={cvHref} download="Ahmed_Raji_CV">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t('downloadCv')}
              </Button>
              </a>
            </div>
          </div>
          
          <div className="animate-fadeInUp">
            <div className="relative">
              <Image
                src="/images/profile.webp"
                alt={t('imageAlt')}
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">{t('badgeTitle')}</p>
                <p className="text-sm">{t('badgeSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
