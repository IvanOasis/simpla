import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, country, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Simpla <onboarding@resend.dev>',
      to: 'ivan.barbarosch@gmail.com',
      subject: `Nuevo contacto: ${name}`,
      html: `
        <h2>Nuevo mensaje desde Simpla.agency</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:8px;color:#666;width:120px;">Nombre</td><td style="padding:8px;font-weight:bold;">${name}</td></tr>
          <tr><td style="padding:8px;color:#666;">Email</td><td style="padding:8px;font-weight:bold;"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px;color:#666;">Empresa</td><td style="padding:8px;">${company}</td></tr>` : ''}
          ${country ? `<tr><td style="padding:8px;color:#666;">País</td><td style="padding:8px;">${country}</td></tr>` : ''}
          ${message ? `<tr><td style="padding:8px;color:#666;vertical-align:top;">Mensaje</td><td style="padding:8px;">${message}</td></tr>` : ''}
        </table>
      `,
    })

    return NextResponse.json({ message: 'Sent' }, { status: 200 })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
