import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
import Birthday from './components/Birthday/Birthday'
import Appreciation from './components/Appreciation/Appreciation'
import Retirement from './components/Retirement/Retirement'
import Condolence from './components/Condolence/Condolence'
import WorkMilestone from './components/WorkMilestone/WorkMilestone'
import SpeedyRecovery from './components/SpeedyRecovery/SpeedyRecovery'
import BabyArrival from './components/BabyArrival/BabyArrival'
import Onboarding from './components/Onboarding/Onboarding'
import Kudos from './components/Kudos/Kudos'
import FestiveSeason from './components/FestiveSeason/FestiveSeason'
import FAQ from './components/FAQ/FAQ'
import BirthdayExample from './pages/ExampleBoard/BirthdayExample'
import FarewellExample from './pages/ExampleBoard/FarewellExample'
import MilestoneExample from './pages/ExampleBoard/MilestoneExample'
import GetWellExample from './pages/ExampleBoard/GetWellExample'
import RetirementExample from './pages/ExampleBoard/RetirementExample'
import PromotionExample from './pages/ExampleBoard/PromotionExample'
import Enterprise from './pages/Enterprise/Enterprise'
import Gifting from './pages/Gifting/Gifting'
import DistributedWorkforces from './pages/DistributedWorkforces/DistributedWorkforces'
import PeopleCulture from './pages/PeopleCulture/PeopleCulture'
import Healthcare from './pages/Healthcare/Healthcare'
import Nonprofits from './pages/Nonprofits/Nonprofits'
import Startups from './pages/Startups/Startups'
import AwardStyle from './pages/AwardStyle/AwardStyle'
import AboutUs from './pages/AboutUs/AboutUs'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -80; // Space for fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'auto' });
        }
      }, 10);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash])
  return null
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSlider />
        <HowItWorks />
        <Examples />
        <FAQ />
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

function BirthdayPage() {
  return (
    <>
      <Navbar />
      <main>
        <Birthday />
      </main>
      <Footer />
    </>
  )
}

function AppreciationPage() {
  return (
    <>
      <Navbar />
      <main>
        <Appreciation />
      </main>
      <Footer />
    </>
  )
}

function RetirementPage() {
  return (
    <>
      <Navbar />
      <main>
        <Retirement />
      </main>
      <Footer />
    </>
  )
}

function CondolencePage() {
  return (
    <>
      <Navbar />
      <main>
        <Condolence />
      </main>
      <Footer />
    </>
  )
}

function WorkMilestonePage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkMilestone />
      </main>
      <Footer />
    </>
  )
}

function SpeedyRecoveryPage() {
  return (
    <>
      <Navbar />
      <main>
        <SpeedyRecovery />
      </main>
      <Footer />
    </>
  )
}

function BabyArrivalPage() {
  return (
    <>
      <Navbar />
      <main>
        <BabyArrival />
      </main>
      <Footer />
    </>
  )
}

function OnboardingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Onboarding />
      </main>
      <Footer />
    </>
  )
}

function KudosPage() {
  return (
    <>
      <Navbar />
      <main>
        <Kudos />
      </main>
      <Footer />
    </>
  )
}

function FestiveSeasonPage() {
  return (
    <>
      <Navbar />
      <main>
        <FestiveSeason />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/send-off" element={<SendOffPage />} />
      <Route path="/birthday" element={<BirthdayPage />} />
      <Route path="/appreciation" element={<AppreciationPage />} />
      <Route path="/retirement" element={<RetirementPage />} />
      <Route path="/condolence" element={<CondolencePage />} />
      <Route path="/work-milestone" element={<WorkMilestonePage />} />
      <Route path="/speedy-recovery" element={<SpeedyRecoveryPage />} />
      <Route path="/baby-arrival" element={<BabyArrivalPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/kudos" element={<KudosPage />} />
      <Route path="/festive-season" element={<FestiveSeasonPage />} />
      <Route path="/examples/birthday" element={<BirthdayExample />} />
      <Route path="/examples/farewell" element={<FarewellExample />} />
      <Route path="/examples/milestone" element={<MilestoneExample />} />
      <Route path="/examples/getwell" element={<GetWellExample />} />
      <Route path="/examples/retirement" element={<RetirementExample />} />
      <Route path="/examples/promotion" element={<PromotionExample />} />
      <Route path="/solutions/enterprise" element={<Enterprise />} />
      <Route path="/solutions/distributed" element={<DistributedWorkforces />} />
      <Route path="/solutions/people-culture" element={<PeopleCulture />} />
      <Route path="/solutions/healthcare" element={<Healthcare />} />
      <Route path="/solutions/nonprofits" element={<Nonprofits />} />
      <Route path="/solutions/startups" element={<Startups />} />
      <Route path="/award-style" element={<AwardStyle />} />
      <Route path="/gifting" element={<Gifting />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    </>
  )
}
