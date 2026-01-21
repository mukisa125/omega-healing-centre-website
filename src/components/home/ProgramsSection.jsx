import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const ProgramsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openProgram, setOpenProgram] = useState(null)

  const toggleProgram = (id) => {
    setOpenProgram(openProgram === id ? null : id)
  }

  const programs = [
    {
      id: 'sunday',
      title: 'Sunday Services',
      icon: '⛪',
      color: 'from-purple-600 to-primary',
      description: 'Join us for powerful worship and teaching',
      schedule: [
        { time: '7:00 AM - 8:30 AM', name: 'First Service', description: 'Early morning worship and prayer' },
        { time: '9:00 AM - 11:00 AM', name: 'Second Service', description: 'Main worship service with full program' },
      ]
    },
    {
      id: 'monday',
      title: 'Monday - Intercession',
      icon: '🙏',
      color: 'from-blue-600 to-blue-400',
      description: 'Corporate prayer and intercession',
      schedule: [
        { time: '5:00 PM - 8:00 PM', name: 'Intercession Prayer', description: 'Join us for powerful intercession and breakthrough prayers' },
      ]
    },
    {
      id: 'tuesday',
      title: 'Tuesday - Home Cell',
      icon: '🏠',
      color: 'from-green-600 to-green-400',
      description: 'Fellowship and Bible study in homes',
      schedule: [
        { time: '6:00 PM - 8:00 PM', name: 'Home Cell Groups', description: 'Small group fellowship, Bible study, and prayer' },
      ]
    },
    {
      id: 'wednesday',
      title: 'Wednesday - Evening Service',
      icon: '✨',
      color: 'from-orange-600 to-orange-400',
      description: 'Midweek worship and teaching',
      schedule: [
        { time: '5:00 PM - 8:00 PM', name: 'Evening Service', description: 'Midweek service with worship, teaching, and prayer' },
      ]
    },
    {
      id: 'thursday',
      title: 'Thursday - Healing Service',
      icon: '💫',
      color: 'from-pink-600 to-pink-400',
      description: 'Special healing and deliverance service',
      schedule: [
        { time: '5:00 PM - 8:00 PM', name: 'Healing Service', description: 'Experience divine healing and restoration' },
      ]
    },
    {
      id: 'friday',
      title: 'Friday - Evening Service',
      icon: '🌟',
      color: 'from-indigo-600 to-indigo-400',
      description: 'End the week with worship',
      schedule: [
        { time: '5:00 PM - 8:00 PM', name: 'Evening Service', description: 'Friday evening worship and fellowship' },
      ]
    },
  ]

  return (
    <section id="programs" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Join us throughout the week for worship, prayer, and fellowship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div
                onClick={() => toggleProgram(program.id)}
                className={`
                  relative bg-white border-2 rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-300 shadow-md hover:shadow-xl
                  ${openProgram === program.id ? 'border-primary shadow-xl' : 'border-gray-200 hover:border-primary/50'}
                `}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${program.color} p-4 md:p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl md:text-4xl">{program.icon}</span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {program.title}
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm mt-1">
                          {program.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openProgram === program.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {openProgram === program.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 space-y-3 md:space-y-4 bg-gray-50">
                        {program.schedule.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-xl p-3 md:p-4 border border-gray-200 hover:border-primary/30 transition-colors"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0">
                                <svg
                                  className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="font-bold text-primary text-sm md:text-base">
                                  {item.time}
                                </p>
                                <p className="font-semibold text-gray-900 text-base md:text-lg mt-1">
                                  {item.name}
                                </p>
                                <p className="text-gray-600 text-xs md:text-sm mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">
              New Here?
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We'd love to have you join us! Click on any program above to see the schedule details.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
            >
              Plan Your Visit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsSection
