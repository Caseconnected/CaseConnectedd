'use client'

import { useState } from 'react'
import Link from 'next/link'

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

export default function ContactSection() {
  const [status, setStatus] = useState({ message: '', color: '' })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus({ message: '', color: '' })

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ message: 'Message sent successfully.', color: '#1E3A5F' })
        form.reset()
      } else {
        setStatus({ message: data.message || 'Unable to send message. Please try again later.', color: '#c05959' })
      }
    } catch {
      setStatus({ message: 'Unable to send message. Please try again later.', color: '#c05959' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="cc-section" id="contact">
      <div className="cc-section-title">Talk to us</div>
      <div className="cc-contact-grid">
        <form className="cc-contact-form" onSubmit={handleSubmit}>
          <label className="cc-input-label" htmlFor="name">Name</label>
          <input className="cc-contact-input" id="name" name="name" type="text" placeholder="Name" required />

          <label className="cc-input-label" htmlFor="email">Email</label>
          <input className="cc-contact-input" id="email" name="email" type="email" placeholder="Email" required />

          <label className="cc-input-label" htmlFor="message">Project brief</label>
          <textarea className="cc-contact-textarea" id="message" name="message" rows={6} placeholder="Project brief" required />

          <button className="cc-cta-button" type="submit" disabled={loading} style={{ width: 'fit-content' }}>
            {loading ? 'Sending...' : 'Send →'}
          </button>

          {status.message && (
            <div className="cc-contact-feedback" style={{ color: status.color }}>
              {status.message}
            </div>
          )}
        </form>

        <div className="cc-contact-info">
          <div className="cc-info-block">
            <div className="cc-info-label">Email</div>
            <div className="cc-info-value">info@caseconnected.com</div>
          </div>
          <div className="cc-info-block">
            <div className="cc-info-label">US Contact</div>
            <div className="cc-info-value">
            </div>
          </div>
          <div className="cc-info-block">
            <div className="cc-info-label">Address</div>
            <div className="cc-info-value">USA — California</div>
          </div>
          <div className="cc-info-block">
            <div className="cc-info-label">Social</div>
            <div className="cc-social-links">
              <Link href="https://www.linkedin.com/company/caseconnected/" target='_blank'>LinkedIn</Link>
              <Link href="https://www.instagram.com/caseconnected?igsh=MWE5ODVvZG96MnhmOA==" target='_blank'>Instagram</Link>
              <Link href="https://www.facebook.com/share/1BeTagM1zA/" target='_blank'>Facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
