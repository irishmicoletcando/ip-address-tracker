import '@/styles/globals.css'
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin']
})

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <link rel="icon" href="/assets/favicon.png" type="image/x-icon" />
      </head>
      <body className="w-screen min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}