import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Next sections get top padding to clear the overlapping stats bar */}
        <div style={{ paddingTop: '80px' }} />
      </main>
    </>
  )
}
