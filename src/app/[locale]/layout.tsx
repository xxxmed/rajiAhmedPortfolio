import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import {getMessages, setRequestLocale} from 'next-intl/server'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};
export const metadata: Metadata = {
  title: 'Portfolio - Ahmed',
  description: "Portfolio professionnel d'Ahmed - Développeur Full Stack",
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}


