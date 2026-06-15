import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync, readdirSync } from 'fs'

export async function POST(request) {
  try {
    const body = await request.text()
    const params = new URLSearchParams(body)

    const contactData = {
      name: params.get('name') || '',
      email: params.get('email') || '',
      message: params.get('message') || '',
      timestamp: new Date().toISOString(),
    }

    const submissionsDir = path.join(process.cwd(), 'submissions')

    if (!existsSync(submissionsDir)) {
      await mkdir(submissionsDir, { recursive: true })
    }

    const count = readdirSync(submissionsDir).length + 1
    const filename = path.join(submissionsDir, `contact_${count}.json`)
    await writeFile(filename, JSON.stringify(contactData, null, 2), 'utf-8')

    return Response.json({ status: 'success', message: 'Message received.' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ status: 'error', message: 'Failed to send message.' }, { status: 500 })
  }
}
