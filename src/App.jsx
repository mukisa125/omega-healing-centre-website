import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import AboutPtMichael from './pages/AboutPtMichael'
import AboutOmegaMinistry from './pages/AboutOmegaMinistry'
import Ministries from './pages/Ministries'
import SupportOperations from './pages/ministries/SupportOperations'
import SpiritualGrowth from './pages/ministries/SpiritualGrowth'
import CommunityOutreach from './pages/ministries/CommunityOutreach'
import LifeStages from './pages/ministries/LifeStages'
import Specialized from './pages/ministries/Specialized'
import Resources from './pages/Resources'
import Sermons from './pages/Sermons'
import Contact from './pages/Contact'
import Give from './pages/Give'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/pt-michael" element={<AboutPtMichael />} />
            <Route path="/about/omega-ministry" element={<AboutOmegaMinistry />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/ministries/support-operations" element={<SupportOperations />} />
            <Route path="/ministries/spiritual-growth" element={<SpiritualGrowth />} />
            <Route path="/ministries/community-outreach" element={<CommunityOutreach />} />
            <Route path="/ministries/life-stages" element={<LifeStages />} />
            <Route path="/ministries/specialized" element={<Specialized />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/give" element={<Give />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
