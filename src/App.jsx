import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FeaturesSlider from './components/FeaturesSlider/FeaturesSlider'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Examples from './components/Examples/Examples'
import Footer from './components/Footer/Footer'
import TermsOfService from './pages/TermsOfService/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Pricing from './pages/Pricing/Pricing'
import SendOff from './components/SendOff/SendOff'
 
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSlider />
        <HowItWorks />
        <Examples />
      </main>
      <Footer />
    </>
  )
}

function SendOffPage() {
  return (
    <>
      <Navbar />
      <main>
        <SendOff />
      </main>
      <Footer />
    </>
  )
}
 
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/send-off" element={<SendOffPage />} />
    </Routes>
  )
}
