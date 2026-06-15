import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'CaseConnected | Home',
  description: 'Specialized remote administrative and case management support for legal and medical-legal professionals.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="cc-container">
        {/* Hero */}
        <section className="cc-hero">
          <div className="cc-hero-grid">
            <div className="cc-hero-copy">
              <h1>Your Trusted Partner in Legal &amp; Medical Administrative Support</h1>
              <p>
                CaseConnected provides specialized remote administrative and case management
                support for attorneys, medical-legal management companies, QME offices, doctors&apos;
                offices, SIBTF management firms, copy service companies, and legal practices
                nationwide.
              </p>
              <div className="cc-button-group">
                <Link className="cc-cta-button" href="/about">Learn More About Us</Link>
                <Link className="cc-button" href="/services">See Services</Link>
              </div>
            </div>
            <div className="cc-hero-panel">
              <h2>Streamlining Legal &amp; Medical Workflows</h2>
              <p>
                We handle the time-consuming administrative work that slows your operations down,
                so you can focus on your clients and cases.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="cc-section">
          <div className="cc-section-title">What we do</div>
          <p className="cc-section-text">
            From case management and records handling to medical report analysis, intake, billing,
            and virtual assistant support, we deliver reliable, accurate, and timely services tailored
            to the unique demands of the legal and medical-legal industries.
          </p>
          <div className="cc-stats-grid">
            <div className="cc-stat-card">
              <strong>Case Management</strong>
              <p>End-to-end support for tracking, organizing, and managing case files from intake through resolution.</p>
            </div>
            <div className="cc-stat-card">
              <strong>Records Management</strong>
              <p>Organized, accurate handling of medical and legal records, including retrieval, filing, and document organization.</p>
            </div>
            <div className="cc-stat-card">
              <strong>Medical Report Analysis</strong>
              <p>Detailed review and analysis of medical reports to extract key information and identify relevant findings.</p>
            </div>
          </div>
        </section>

        {/* Why CaseConnected */}
        <section className="cc-section">
          <div className="cc-section-title">Why Choose CaseConnected</div>
          <div className="cc-feature-grid">
            <div className="cc-feature-card">
              <h3>Specialized Expertise</h3>
              <p>
                Trained professionals familiar with WC, PI, QME, and SIBTF workflows, with deep
                expertise in legal and medical-legal administrative processes.
              </p>
            </div>
            <div className="cc-feature-card">
              <h3>Flexible &amp; Scalable</h3>
              <p>
                Flexible support that scales with your caseload, giving you a cost-effective
                alternative to in-house staffing.
              </p>
            </div>
            <div className="cc-feature-card">
              <h3>Fast &amp; Accurate</h3>
              <p>
                Fast turnaround without sacrificing accuracy, so your team can keep moving without
                bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer text="Your trusted partner in legal & medical administrative support." />
    </>
  )
}