import '@/styles/globals.css'
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin']
})

export const metadata = {
  title: 'IP Address Tracker',
  description: 'Track and locate any IP address with accurate geolocation data, including city, region, timezone, and ISP information.',
  keywords: 'IP address tracker, geolocation, IP lookup, IP finder, IP location, track IP address, ISP information, IP address search',
  author: 'Irish Micole Cando'
}

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <link rel="icon" href="/assets/favicon.png" type="image/x-icon" />
        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        {/* Leaflet JS */}
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
          async
        />
        <title>IP Address Tracker</title>
      </head>
      <body className="w-screen min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}