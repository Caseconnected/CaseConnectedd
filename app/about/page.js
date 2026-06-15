import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'About Us | CaseConnected',
  description: 'Discover CaseConnected\'s mission to empower legal and medical professionals with skilled remote administrative support and case management services.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="cc-container">
        {/* Hero */}
        <section className="cc-hero">
          <div className="cc-hero-grid">
            <div className="cc-hero-copy">
              <h1>Bridging the Gap Between Legal and Medical Case Management</h1>
              <p>
                CaseConnected was founded to address a growing challenge in the legal and
                medical-legal fields: the overwhelming administrative burden that pulls professionals
                away from their core work.
              </p>
            </div>
            <div className="cc-hero-panel">
              <h2>Who We Are</h2>
              <p>
                We bridge that gap by providing skilled, remote administrative support tailored
                specifically to the needs of attorneys, medical-legal management companies, QME
                offices, copy services, and SIBTF administrators.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="cc-section">
          <div className="cc-section-title">Our Mission</div>
          <p className="cc-section-text">
            To empower legal and medical professionals by managing the behind-the-scenes work,
            including case files, records, reports, intake, and billing, with precision and
            reliability, so our clients can dedicate their time to what they do best: serving their
            clients and patients.
          </p>
        </section>

        {/* Who we serve */}
        <section className="cc-section">
          <div className="cc-section-title">Who We Serve</div>
          <ul className="cc-card-list">
            <li>
              <strong>Attorneys &amp; Law Firms</strong>
              <p>
                Workers&apos; Compensation and Personal Injury attorneys, along with law firms of all
                sizes, rely on us for ongoing administrative support.
              </p>
            </li>
            <li>
              <strong>QME &amp; Medical-Legal Companies</strong>
              <p>
                QME and medical-legal management companies, doctors&apos; offices, and medical
                practices trust us with their case and records management.
              </p>
            </li>
            <li>
              <strong>SIBTF &amp; Copy Services</strong>
              <p>
                SIBTF management companies and copy service companies depend on our expertise to
                keep their operations running smoothly.
              </p>
            </li>
          </ul>
        </section>

        {/* Our Approach */}
        <section className="cc-section">
          <div className="cc-section-title">Our Approach</div>
          <div className="cc-feature-grid">
            <div className="cc-feature-card">
              <h3>Tailored to your workflow</h3>
              <p>
                Every client&apos;s workflow is different. We take the time to understand your
                processes before stepping in.
              </p>
            </div>
            <div className="cc-feature-card">
              <h3>Seamless integration</h3>
              <p>
                We integrate seamlessly with your existing systems and team, so nothing feels
                disruptive.
              </p>
            </div>
            <div className="cc-feature-card">
              <h3>Flexible engagement</h3>
              <p>
                Whether you need ongoing support or help with a specific project, CaseConnected
                adapts to fit your needs, not the other way around.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer text="Bridging the gap between legal and medical case management." />
    </>
  )
}