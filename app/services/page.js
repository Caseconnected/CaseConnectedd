import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'Services | CaseConnected',
  description: 'Explore our full suite of professional services including case management, records handling, medical report analysis, intake services, and virtual assistant support.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="cc-container">
        {/* Hero */}
        <section className="cc-hero">
          <div className="cc-hero-grid">
            <div className="cc-hero-copy">
              <h1>A Full Range of Services to Keep Your Operations Running Smoothly</h1>
              <p>
                CaseConnected offers specialized remote administrative and case management support
                tailored to the unique demands of the legal and medical-legal industries.
              </p>
            </div>
            <div className="cc-hero-panel">
              <h2>Choose the Support You Need</h2>
              <p>
                Whether you need ongoing support or help with a specific project, our services are
                designed to bring clarity, accuracy, and efficiency to your daily operations.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="cc-section">
          <div className="cc-section-title">Our Core Services</div>
          <div className="cc-services-grid">
            <div className="cc-service-card">
              <span>📂</span>
              <h3>Case Management</h3>
              <p>
                End-to-end support for tracking, organizing, and managing case files from intake
                through resolution.
              </p>
            </div>
            <div className="cc-service-card">
              <span>🗄️</span>
              <h3>Records Management</h3>
              <p>
                Organized, accurate handling of medical and legal records, including retrieval,
                filing, and document organization.
              </p>
            </div>
            <div className="cc-service-card">
              <span>👥</span>
              <h3>Virtual Assistant Services</h3>
              <p>
                Dedicated remote support for scheduling, correspondence, data entry, and general
                administrative tasks.
              </p>
            </div>
            <div className="cc-service-card">
              <span>🩺</span>
              <h3>Medical Report Analysis</h3>
              <p>
                Detailed review and analysis of medical reports to extract key information and
                identify relevant findings.
              </p>
            </div>
            <div className="cc-service-card">
              <span>✅</span>
              <h3>QA of Medical-Legal Reports</h3>
              <p>
                Thorough quality assurance review of QME and medical-legal reports for accuracy,
                completeness, and compliance.
              </p>
            </div>
            <div className="cc-service-card">
              <span>📝</span>
              <h3>Report Editing</h3>
              <p>
                Professional editing and formatting of medical and legal reports for clarity and
                consistency.
              </p>
            </div>
            <div className="cc-service-card">
              <span>📞</span>
              <h3>Intake Services</h3>
              <p>
                Skilled intake specialists handling client and patient intake calls with
                professionalism and care.
              </p>
            </div>
            <div className="cc-service-card">
              <span>🧭</span>
              <h3>Remote Hiring Support</h3>
              <p>
                Assistance with sourcing, screening, and onboarding remote staff for your practice.
              </p>
            </div>
            <div className="cc-service-card">
              <span>📣</span>
              <h3>Marketing &amp; Outreach</h3>
              <p>
                Support with marketing campaigns, outreach efforts, and client communication
                strategies.
              </p>
            </div>
            <div className="cc-service-card">
              <span>💳</span>
              <h3>Billing Support</h3>
              <p>
                Accurate and timely billing assistance to keep your revenue cycle on track.
              </p>
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="cc-section">
          <div className="cc-section-title">Custom Solutions</div>
          <p className="cc-section-text">
            Don&apos;t see what you need listed? Reach out, and we will offer tailored solutions
            based on your specific requirements.
          </p>
        </section>

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer text="A full range of services to keep your operations running smoothly." />
    </>
  )
}