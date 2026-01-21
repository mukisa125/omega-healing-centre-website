import { motion } from 'framer-motion'

const AboutOmegaMinistry = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}church-building1.jpg`}
            alt="Omega Healing Center Church Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">
                About <span className="text-primary">Omega Ministry</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                An open invitation to a life of healing, restoration, and faith through the Word of God
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              To be a beacon of hope and healing, where lives are transformed through 
              the power of God's Word, and where every person experiences the fullness 
              of God's love, grace, and restoration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To preach the gospel of Jesus Christ, minister healing to the sick, 
                deliver the oppressed, and equip believers to walk in their God-given 
                purpose and destiny. We are committed to building a community where 
                faith thrives and miracles happen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h3>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Faith in the power of God's Word</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Love and compassion for all people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Excellence in worship and service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Integrity and authenticity in ministry</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              What We Believe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">1</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">The Bible</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  The inspired and infallible Word of God, our ultimate authority
                </p>
              </div>
              <div className="text-center bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">2</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Salvation</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Through faith in Jesus Christ alone, available to all who believe
                </p>
              </div>
              <div className="text-center bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">3</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Healing</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Divine healing is available today through faith and prayer
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Join Us</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Experience the transforming power of God's love at Omega Healing Center. 
              You are welcome here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200"
              >
                Service Times
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutOmegaMinistry
