import './globals.css'  // ← ADD THIS
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'MacDickson Dziedorm',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}