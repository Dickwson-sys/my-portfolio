import './globals.css'

export const metadata = {
  title: 'MacDickson Dziedorm — Full Stack Engineer',
  description: 'Frontend-Focused Full Stack Software Engineer. React, Next.js, Python, FastAPI, AI/ML.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
