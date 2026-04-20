import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email: string = (body?.email ?? '').trim()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Notify you when someone subscribes
    await resend.emails.send({
      from: 'Simpla <onboarding@resend.dev>',
      to: 'ivan.barbarosch@gmail.com',
      subject: `Nuevo suscriptor: ${email}`,
      html: `<p>Se suscribió al newsletter: <strong>${email}</strong></p><p>${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</p>`,
    })

    return NextResponse.json({ message: 'Subscribed' }, { status: 200 })
  } catch (err) {
    console.error('[newsletter]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
