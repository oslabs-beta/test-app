import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Bboy Blog',
  description: 'The best bboy blog on the web',
}

// const DOMTest = new PerformanceObserver((list) => {
//   list.getEntries().forEach((entry) => {
//       const domContentLoadedTime = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
//       console.log(`${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`);
//   })
// })
// DOMTest.observe({ type: "navigation", buffered: true });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
