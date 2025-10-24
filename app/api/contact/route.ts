import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Ici vous pouvez intégrer EmailJS ou un autre service d'email
    // Pour l'instant, on simule l'envoi
    console.log('Nouveau message:', { name, email, message })

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
