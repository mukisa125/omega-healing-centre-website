import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const UpcomingEvents = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const events = [
    {
      title: 'Thursday Healing Service',
      date: 'Every Thursday',
      time: '5:00 PM (EAT)',
      description: 'Join us for a powerful time of healing prayer and ministry.',
      color: 'from-purple-600 to-primary',
    },
    {
      title: 'Sunday Worship',
      date: 'Every Sunday',
      time: '9:00 AM & 11:30 AM',
      description: 'Experience dynamic worship and life-changing messages.',
      color: 'from-primary to-purple-600',
    },
    {
      title: 'Prayer & Intercession',
      date: 'Weekly',
      time: 'Various Times',
      description: 'Corporate prayer meetings for breakthrough and transformation.',
      color: 'from-purple-700 to-primary-dark',
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Join us for life-transforming services and events throughout the week.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}></div>
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 h-full hover:border-primary/50 hover:shadow-xl transition-all duration-300 shadow-md">
                <div className={`inline-block bg-gradient-to-r ${event.color} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                  {event.date}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{event.title}</h3>
                <p className="text-primary font-bold mb-4 text-lg">{event.time}</p>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            Get Directions
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default UpcomingEvents
