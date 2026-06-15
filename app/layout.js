import './globals.css'

export const metadata = {
  title: 'CaseConnected',
  description: 'Professional legal and medical administrative support for remote teams and firms.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
