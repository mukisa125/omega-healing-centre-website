import { motion } from 'framer-motion'

const About = () => {
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
            src="omega-church.jpg" 
            alt="Omega Healing Center" 
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
                About <span className="text-primary">Us</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Learn more about our ministry, vision, and the heart behind Omega Healing Center
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Welcome to <span className="text-primary">Omega Healing Center</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed text-left">
            <p>
              Omega Healing Center is a vibrant, Spirit-filled ministry dedicated to bringing 
              the transforming power of God's Word to our community and beyond. Founded on the 
              principles of faith, healing, and restoration, we are committed to creating an 
              environment where lives are changed and destinies are fulfilled.
            </p>
            <p>
              Under the leadership of Pr Michael Kyazze, our church has become a beacon of hope 
              for many seeking spiritual growth, physical healing, and emotional restoration. 
              We believe in the power of God to heal, deliver, and transform lives through His 
              Word and the ministry of the Holy Spirit.
            </p>
            <p>
              Whether you're seeking healing, looking for a church home, or wanting to grow 
              deeper in your faith, Omega Healing Center welcomes you with open arms. Join us 
              as we journey together in faith, experiencing the fullness of God's love and power.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Community</h3>
            <p className="text-sm sm:text-base text-gray-700">
              A diverse, welcoming family united in faith, worship, and service to God and one another.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Heart</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Passionate about seeing lives transformed through the love of Christ and the power of His Word.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Learn More About Us</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Discover more about our leadership and ministry through these pages
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/about/pt-michael"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200"
            >
              About Pr Michael Kyazze
            </a>
            <a
              href="/about/omega-ministry"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200"
            >
              About Omega Ministry
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
