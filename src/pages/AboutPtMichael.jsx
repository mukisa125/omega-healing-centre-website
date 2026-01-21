import { motion } from 'framer-motion'

const AboutPtMichael = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 flex justify-center md:justify-start"
            >
              <div className="relative w-full max-w-sm md:max-w-none">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img 
                    src="pastor-michael.jpg" 
                    alt="Pr Michael Kyazze" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-3 space-y-4 sm:space-y-6 text-center md:text-left"
            >
              <div className="inline-block">
                <span className="bg-primary/20 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Senior Pastor & Founder
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Pr Michael <span className="text-primary">Kyazze</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                A man of God with a prophetic voice, dedicated to bringing healing, 
                restoration, and transformation through the power of God's Word.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-300">Theologian</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-300">Author & Speaker</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span className="text-sm sm:text-base text-gray-300">Spiritual Mentor</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            About Pastor <span className="text-primary">Michael</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Pastor Michael Kyazze is the founding pastor of Omega Healing Center, 
              a dynamic ministry established with a clear mandate from God to bring 
              healing, restoration, and transformation to lives through the Word of God.
            </p>
            <p>
              With years of dedicated service in ministry, Pastor Michael has touched 
              countless lives through his powerful teaching, prophetic insights, and 
              unwavering commitment to the gospel. His ministry is characterized by 
              signs, wonders, and miraculous healings that testify to the power of God.
            </p>
            <p>
              Known for his deep understanding of Scripture and practical application 
              of biblical principles, Pastor Michael equips believers to walk in their 
              God-given authority and purpose. His heart for souls and passion for 
              seeing lives transformed has made Omega Healing Center a beacon of hope 
              for many.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Ministry <span className="text-primary">Focus</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teaching Ministry</h3>
              <p className="text-gray-600">
                Powerful, anointed teaching that brings revelation and transformation 
                through the Word of God.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healing Ministry</h3>
              <p className="text-gray-600">
                Demonstrating God's healing power through prayer, faith, and the 
                laying on of hands.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prophetic Ministry</h3>
              <p className="text-gray-600">
                Operating in prophetic gifts to bring direction, encouragement, and 
                breakthrough to believers.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Development</h3>
              <p className="text-gray-600">
                Mentoring and equipping leaders to fulfill their calling and maximize 
                their potential.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Vision & <span className="text-primary">Mandate</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0">1</span>
                  <span>The Vision</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  To raise a generation that walks in divine health, wholeness, and the 
                  fullness of God's promises. A people who understand their identity in 
                  Christ and operate in the supernatural power of God.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0">2</span>
                  <span>The Mission</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  To preach the uncompromising Word of God, minister healing to the sick, 
                  deliver the oppressed, and equip believers to walk in their God-given 
                  authority and destiny.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0">3</span>
                  <span>The Heart</span>
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  A burning passion to see souls saved, lives transformed, and families 
                  restored. To create a community where faith thrives, miracles happen, 
                  and God's presence is tangible.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">A Word from Pastor Michael</h2>
            <blockquote className="text-lg sm:text-xl text-gray-300 italic leading-relaxed mb-4 sm:mb-6">
              "God has called us to be a people of faith, power, and love. At Omega Healing 
              Center, we believe in the supernatural power of God to heal, deliver, and 
              transform lives. This is an open invitation to experience the fullness of 
              God's love and walk in the abundant life He has promised us."
            </blockquote>
            <p className="text-primary font-semibold text-base sm:text-lg">— Pr Michael Kyazze</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPtMichael
