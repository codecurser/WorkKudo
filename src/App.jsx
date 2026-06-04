import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FeaturesSlider from './components/FeaturesSlider/FeaturesSlider'
import HowItWorks from './components/HowItWorks/HowItWorks'
import SendOff from './components/SendOff/SendOff'

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isSendOff = currentHash === '#/send-off'

  return (
    <>
      <Navbar />
      <main>
        {isSendOff ? (
          <SendOff />
        ) : (
          <>
            <Hero />
            <FeaturesSlider />
            <HowItWorks />
          </>
        )}
      </main>
    </>
  )
}

