import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [ministriesDropdownOpen, setMinistriesDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Pr Michael Kyazze', path: '/about/pt-michael' },
        { name: 'About Omega Ministry', path: '/about/omega-ministry' }
      ]
    },
    { 
      name: 'Ministries', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Support and Operations', path: '/ministries/support-operations' },
        { name: 'Spiritual Growth & Development', path: '/ministries/spiritual-growth' },
        { name: 'Community and Outreach', path: '/ministries/community-outreach' },
        { name: 'Life Stages and Gender', path: '/ministries/life-stages' },
        { name: 'Specialized Ministries', path: '/ministries/specialized' }
      ]
    },
    { name: 'Resources', path: '/resources' },
    { name: 'Mobile App', path: '/sermons' },
    { name: 'Contact', path: '/contact' },
    { name: 'Give', path: '/give' },
  ]

  const isActive = (path) => location.pathname === path
  
  const isAboutActive = () => {
    return location.pathname.startsWith('/about')
  }

  const isMinistriesActive = () => {
    return location.pathname.startsWith('/ministries')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="text-gray-900">Omega</span>
              <span className="text-primary"> Healing Center</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (link.name === 'About Us') setAboutDropdownOpen(true)
                    if (link.name === 'Ministries') setMinistriesDropdownOpen(true)
                  }}
                  onMouseLeave={() => {
                    if (link.name === 'About Us') setAboutDropdownOpen(false)
                    if (link.name === 'Ministries') setMinistriesDropdownOpen(false)
                  }}
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                      (link.name === 'About Us' && isAboutActive()) || (link.name === 'Ministries' && isMinistriesActive())
                        ? 'text-primary'
                        : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                  {((link.name === 'About Us' && isAboutActive()) || (link.name === 'Ministries' && isMinistriesActive())) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <AnimatePresence>
                    {((link.name === 'About Us' && aboutDropdownOpen) || (link.name === 'Ministries' && ministriesDropdownOpen)) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      >
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                              isActive(item.path)
                                ? 'text-primary bg-primary/5'
                                : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-primary'
                        : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </motion.span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-md shadow-lg border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => {
                        if (link.name === 'About Us') setAboutDropdownOpen(!aboutDropdownOpen)
                        if (link.name === 'Ministries') setMinistriesDropdownOpen(!ministriesDropdownOpen)
                      }}
                      className={`w-full flex items-center justify-between py-3 text-base font-medium transition-colors duration-200 ${
                        (link.name === 'About Us' && isAboutActive()) || (link.name === 'Ministries' && isMinistriesActive())
                          ? 'text-primary'
                          : 'text-gray-900 hover:text-primary'
                      }`}
                    >
                      {link.name}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          (link.name === 'About Us' && aboutDropdownOpen) || (link.name === 'Ministries' && ministriesDropdownOpen) ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {((link.name === 'About Us' && aboutDropdownOpen) || (link.name === 'Ministries' && ministriesDropdownOpen)) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2 overflow-hidden"
                        >
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                                isActive(item.path)
                                  ? 'text-primary'
                                  : 'text-gray-700 hover:text-primary'
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-base font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-primary'
                        : 'text-gray-900 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
