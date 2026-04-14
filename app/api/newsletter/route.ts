import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const FILE_PATH = path.join(process.cwd(), 'data', 'newsletter.txt')

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // Ensure data/ directory exists
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true })

  // Read existing emails to avoid duplicates
  let existing = ''
  try {
    existing = await fs.readFile(FILE_PATH, 'utf-8')
  } catch {
    // File doesn't exist yet, that's fine
  }

  if (existing.split('\n').some(line => line.trim() === email.trim())) {
    return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
  }

  const entry = `${email.trim()} | ${new Date().toISOString()}\n`
  await fs.appendFile(FILE_PATH, entry, 'utf-8')

  return NextResponse.json({ message: 'Subscribed' }, { status: 200 })
}
