import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export const runtime = 'nodejs'

async function getSheet() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  return sheets
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email: string = (body?.email ?? '').trim()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const sheets = await getSheet()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Read existing emails to avoid duplicates
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:A',
    })

    const rows = existing.data.values ?? []
    const emails = rows.map(r => r[0]?.trim())

    if (emails.includes(email)) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
    }

    // Append new row: email | date
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:B',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    })

    return NextResponse.json({ message: 'Subscribed' }, { status: 200 })
  } catch (err) {
    console.error('[newsletter]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
