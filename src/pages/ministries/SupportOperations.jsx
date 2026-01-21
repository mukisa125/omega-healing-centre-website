import { motion } from 'framer-motion'

const SupportOperations = () => {
  const ministries = [
    {
      title: 'Ushering Ministry',
      description: 'Our ushering team creates a warm, welcoming atmosphere for all who enter our doors. They ensure smooth service flow, assist visitors in finding seats, and provide guidance throughout the worship experience.',
      responsibilities: [
        'Welcoming and greeting church members and visitors',
        'Guiding people to available seats',
        'Managing offering collection',
        'Maintaining order and safety during services'
      ],
      image: `${import.meta.env.BASE_URL}church-building1.jpg`
    },
    {
      title: 'Protocol Department',
      description: 'The Protocol Department ensures excellence in all church events and services. They coordinate special programs, manage guest speakers, and maintain the dignity and order of church functions.',
      responsibilities: [
        'Coordinating special church events',
        'Managing guest speaker arrangements',
        'Ensuring proper event etiquette',
        'Organizing official church ceremonies'
      ],
      image: `${import.meta.env.BASE_URL}church-building.jpg`
    },
    {
      title: 'Administration',
      description: 'The administrative team keeps our church operations running smoothly. They handle documentation, coordinate between departments, and ensure effective communication throughout the ministry.',
      responsibilities: [
        'Managing church records and documentation',
        'Coordinating inter-departmental activities',
        'Handling official correspondence',
        'Supporting pastoral leadership'
      ],
      image: `${import.meta.env.BASE_URL}church-building1.jpg`
    },
    {
      title: 'Finance',
      description: 'Our finance team exercises faithful stewardship over God\'s resources. They manage church finances with integrity, transparency, and accountability, ensuring every resource is used for Kingdom advancement.',
      responsibilities: [
        'Managing church budget and expenses',
        'Processing tithes and offerings',
        'Financial reporting and accountability',
        'Supporting ministry projects financially'
      ],
      image: `${import.meta.env.BASE_URL}church-building.jpg`
    },
    {
      title: 'Media',
      description: 'The media team captures and shares the message of hope through various platforms. They handle audio-visual production, live streaming, photography, and social media presence.',
      responsibilities: [
        'Live streaming services and events',
        'Audio and video production',
        'Social media management',
        'Photography and videography'
      ],
      image: `${import.meta.env.BASE_URL}church-building1.jpg`
    },
    {
      title: 'Technical',
      description: 'Our technical team ensures all equipment and systems function flawlessly. They manage sound systems, lighting, projection, and all technical aspects that enhance worship and ministry.',
      responsibilities: [
        'Sound system operation and maintenance',
        'Lighting and stage management',
        'Projection and visual displays',
        'Technical equipment maintenance'
      ],
      image: `${import.meta.env.BASE_URL}church-building.jpg`
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Support and Operations
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The backbone of our ministry - ensuring excellence in every aspect of church operations
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-block mb-4">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    Ministry {index + 1} of {ministries.length}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {ministry.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  {ministry.description}
                </p>
                <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {ministry.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join Our Support Team
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Be part of the team that makes everything possible. Your skills and dedication can help create an excellent worship experience for everyone.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200"
          >
            Get Involved
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default SupportOperations
