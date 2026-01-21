import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WelcomeSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-primary">Omega Healing Center</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            A community dedicated to spiritual healing, growth, and transformation through the power of God's Word.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Healing',
              description: 'Experience divine healing and restoration in spirit, soul, and body through faith and prayer.',
              icon: '✨',
            },
            {
              title: 'Community',
              description: 'Join a loving family of believers committed to supporting one another in faith and life.',
              icon: '🤝',
            },
            {
              title: 'Growth',
              description: 'Grow deeper in your relationship with God through biblical teaching and discipleship.',
              icon: '📖',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 shadow-md"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
