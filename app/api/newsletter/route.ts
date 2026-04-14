import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

// On Vercel the project root is read-only; /tmp is the only writable directory.
const FILE_PATH = path.join('/tmp', 'newsletter.txt')

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email: string = (body?.email ?? '').trim()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Read existing list to avoid duplicates
    let existing = ''
    try {
      existing = await fs.readFile(FILE_PATH, 'utf-8')
    } catch {
      // File doesn't exist yet — that's fine
    }

    const emails = existing.split('\n').map(l => l.split('|')[0].trim())
    if (emails.includes(email)) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
    }

    const entry = `${email} | ${new Date().toISOString()}\n`
    await fs.appendFile(FILE_PATH, entry, 'utf-8')

    return NextResponse.json({ message: 'Subscribed' }, { status: 200 })
  } catch (err) {
    console.error('[newsletter]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
