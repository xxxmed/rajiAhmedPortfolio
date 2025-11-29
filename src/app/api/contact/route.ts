import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Extract locale from referer URL path /<locale>/...
function extractLocale(req: NextRequest): string {
  try {
    const referer = req.headers.get('referer') || ''
    const url = new URL(referer)
    const first = url.pathname.split('/').filter(Boolean)[0]
    if (['en','fr','ar'].includes(first)) return first
  } catch (_) {}
  return 'en'
}

export async function POST(request: NextRequest) {
  const locale = extractLocale(request)
  try {
    const body = await request.json()
    const { name, email, message } = body || {}

    const fieldErrors: Record<string,string> = {}
    if (!name) fieldErrors.name = 'Pages.contact.validation.nameRequired'
    if (!email) fieldErrors.email = 'Pages.contact.validation.emailRequired'
    if (!message) fieldErrors.message = 'Pages.contact.validation.messageRequired'

    if (Object.keys(fieldErrors).length) {
      return NextResponse.json(
        {
          ok: false,
          locale,
          messageKey: 'Pages.contact.error',
          errors: fieldErrors
        },
        { status: 400 }
      )
    }

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL 
    const toEmail = process.env.CONTACT_TO 

    if (!resendApiKey || !fromEmail || !toEmail) {
      console.warn('RESEND_API_KEY, RESEND_FROM_EMAIL or CONTACT_TO missing. Skipping email send.')
    } else {
      const resend = new Resend(resendApiKey)

      const subjectMap: Record<string,string> = {
        en: 'New contact message from Portfolio',
        fr: 'Nouveau message de contact depuis Portfolio',
        ar: 'رسالة تواصل جديدة من البورتفوليو',
      }

      const mailSubject = subjectMap[locale] || subjectMap.en
      const htmlContent = `
        <h2>New Contact Message</h2>
        <p><strong>Locale:</strong> ${locale}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `

      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: mailSubject,
        html: htmlContent,
      })
    }

    return NextResponse.json(
      {
        ok: true,
        locale,
        messageKey: 'Pages.contact.success',
        detailKey: 'Pages.contact.successMessage'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json(
      {
        ok: false,
        locale,
        messageKey: 'Pages.contact.error',
        detailKey: 'Pages.contact.errorMessage'
      },
      { status: 500 }
    )
  }
}


