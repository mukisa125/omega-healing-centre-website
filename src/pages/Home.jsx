import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import WelcomeSection from '../components/home/WelcomeSection'
import MissionSection from '../components/home/MissionSection'
import ProgramsSection from '../components/home/ProgramsSection'
import UpcomingEvents from '../components/home/UpcomingEvents'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <MissionSection />
      <ProgramsSection />
      <UpcomingEvents />
    </div>
  )
}

export default Home
