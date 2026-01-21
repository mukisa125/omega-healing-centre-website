import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}church-building.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-center">
          {/* Headline - shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 order-1 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 lg:mb-6 text-white drop-shadow-2xl text-center lg:text-left"
            >
              An open invitation to a life of{' '}
              <span className="text-primary drop-shadow-lg">healing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden md:block text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl drop-shadow-lg font-medium"
            >
              Experience restoration, faith, and the transformative power of God's Word. 
              Join us as we journey together in healing and spiritual growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden md:block"
            >
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
              >
                Join Us This Sunday
              </Link>
            </motion.div>
          </motion.div>

          {/* Service Times Card - shows second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-1 order-2 lg:order-2 w-full"
          >
            <div className="bg-white/95 backdrop-blur-lg border-2 border-primary/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-6 text-center border-b-2 border-primary/30 pb-4 text-gray-900">
                SERVICE TIMES
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-primary font-bold text-lg mb-4 uppercase tracking-wide">Sunday Services</h4>
                  <div className="space-y-3">
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-gray-800 font-medium">First Service – <span className="font-bold text-gray-900">7:00 AM - 8:40 AM</span></p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-gray-800 font-medium">Second Service – <span className="font-bold text-gray-900">9:00 AM - 11:50 AM</span></p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <p className="text-gray-800 font-medium">Third Service – <span className="font-bold text-gray-900">11:30 AM - 12:20 PM</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8"
              >
                <a
                  href="#programs"
                  className="block w-full text-center bg-primary hover:bg-primary-dark border-2 border-primary text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Other Programs
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
