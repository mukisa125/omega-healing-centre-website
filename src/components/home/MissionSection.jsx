import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MissionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              At Omega Healing Center, we are committed to creating a space where individuals can 
              encounter the healing presence of God. Through the teaching of His Word, fervent prayer, 
              and genuine fellowship, we believe in the restoration of lives and the manifestation of 
              God's power.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our mission is to equip believers with faith, hope, and the tools needed to walk in 
              divine health and purpose. We welcome everyone seeking transformation and a deeper 
              relationship with Christ.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}worship-praise.jpg`}
                alt="Mission"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white rounded-xl p-6 shadow-xl"
            >
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">Years of Ministry</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
