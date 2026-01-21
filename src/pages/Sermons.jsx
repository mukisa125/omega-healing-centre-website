import { motion } from 'framer-motion'

const Sermons = () => {
  // App store links - Update these with your actual app store URLs when available
  const appLinks = {
    playStore: 'https://play.google.com/store/apps/details?id=com.omegahealingcentre', // Update with actual link
    appStore: 'https://apps.apple.com/app/omega-healing-centre/id123456789', // Update with actual link
    isAvailable: false // Set to true when app is published
  }

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Live Streaming',
      description: 'Watch live services and events directly from your mobile device, anytime, anywhere.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Sermon Library',
      description: 'Access hundreds of powerful sermons and teachings from Bishop Michael Kyazze.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Push Notifications',
      description: 'Get instant notifications for upcoming services, events, and important announcements.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Event Calendar',
      description: 'Stay updated with all church events, programs, and special services in one place.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Online Giving',
      description: 'Give your tithes and offerings securely through the app with multiple payment options.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Community Connect',
      description: 'Join cell groups, connect with other members, and build meaningful relationships.'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white py-16 sm:py-20 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block mb-4">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Omega Healing Centre
                <span className="block text-white/90 mt-2">Mobile App</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Experience church on the go! Stream live services, access sermons, give online, and stay connected with our community - all from your mobile device.
              </p>
              
              {appLinks.isAvailable ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href={appLinks.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </a>
                  
                  <a
                    href={appLinks.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </a>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 inline-block">
                  <p className="text-white font-semibold mb-2">📱 App Coming Soon!</p>
                  <p className="text-white/80 text-sm">We're working hard to bring you the best mobile experience. Stay tuned!</p>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto w-64 h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-[3rem] backdrop-blur-sm border-8 border-white/30 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-white/20 rounded-b-3xl"></div>
                  <div className="p-6 pt-12 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <span className="text-3xl">⛪</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">Omega Healing Centre</h3>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                        <div className="h-2 bg-white/40 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-white/30 rounded w-1/2"></div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                        <div className="h-2 bg-white/40 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-white/30 rounded w-4/5"></div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                        <div className="h-2 bg-white/40 rounded w-1/2 mb-2"></div>
                        <div className="h-2 bg-white/30 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need in <span className="text-primary">One App</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with Omega Healing Centre wherever you are. Our mobile app brings the church experience to your fingertips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Connected, Stay Blessed
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Be the first to know when our mobile app launches. Join thousands of believers experiencing church in a whole new way.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Notified on Launch
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Sermons
