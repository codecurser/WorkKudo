import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FeaturesSlider from './components/FeaturesSlider/FeaturesSlider'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSlider />
      </main>
    </>
  )
}
