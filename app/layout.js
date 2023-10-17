import './globals.css'
import { Open_Sans } from 'next/font/google'
import AuthProvider from './context/AuthContext'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Visado App',
  description: 'Visado App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
