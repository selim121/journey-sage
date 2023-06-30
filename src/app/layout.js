import Footer from '@/components/Footer/Footer.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Journey Sage',
  description: 'created by JourneySage',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <script>
          AOS.init();
        </script>
      </body>
    </html>
  )
}

export default RootLayout;