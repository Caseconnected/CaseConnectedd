export default function Footer({ text }) {
  return (
    <footer className="cc-footer">
      <div className="cc-container cc-footer-grid">
        <div>
          <p className="cc-footer-brand">CaseConnected</p>
          <p>{text}</p>
        </div>
        {/* <div>
          <p>Professional legal & medical administrative support.</p>
        </div> */}
      </div>
    </footer>
  )
}
