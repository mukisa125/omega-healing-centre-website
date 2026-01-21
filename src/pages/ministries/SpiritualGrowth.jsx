import { motion } from 'framer-motion'

const SpiritualGrowth = () => {
  const ministries = [
    {
      title: 'Follow-up Department',
      description: 'We ensure no one falls through the cracks. Our follow-up team reaches out to new believers, visitors, and members, providing spiritual support and helping them integrate into the church family.',
      responsibilities: [
        'Contacting and welcoming new visitors',
        'Supporting new believers in their faith journey',
        'Tracking member attendance and engagement',
        'Providing pastoral care and support'
      ],
      image: '/church-building1.jpg'
    },
    {
      title: 'Christian Education and Training',
      description: 'Equipping believers with sound biblical knowledge and practical ministry skills. We offer structured teaching programs, discipleship courses, and leadership training to build mature Christians.',
      responsibilities: [
        'Organizing Bible study programs',
        'Conducting discipleship classes',
        'Leadership development training',
        'Theological education and seminars'
      ],
      image: '/church-building.jpg'
    },
    {
      title: 'Cell Department',
      description: 'Building authentic community through small groups. Our cell groups provide intimate settings for fellowship, prayer, Bible study, and mutual support throughout the week.',
      responsibilities: [
        'Coordinating cell group meetings',
        'Training cell leaders',
        'Facilitating group discussions and studies',
        'Fostering community and accountability'
      ],
      image: '/church-building1.jpg'
    },
    {
      title: 'Prayer Ministry',
      description: 'The powerhouse of our church. Our prayer warriors intercede for the church, community, and nations. We believe in the transforming power of persistent, faith-filled prayer.',
      responsibilities: [
        'Organizing prayer meetings and vigils',
        'Interceding for church and community needs',
        'Teaching on prayer and spiritual warfare',
        'Providing prayer support for individuals'
      ],
      image: '/church-building.jpg'
    },
    {
      title: 'Deliverance Ministry',
      description: 'Setting captives free through the power of Jesus Christ. We minister deliverance to those bound by spiritual oppression, bringing freedom and restoration through prayer and the Word.',
      responsibilities: [
        'Conducting deliverance sessions',
        'Spiritual counseling and guidance',
        'Teaching on spiritual warfare',
        'Post-deliverance follow-up and support'
      ],
      image: '/church-building1.jpg'
    },
    {
      title: 'Church in Church (Evening Services)',
      description: 'A dynamic evening gathering focused on worship, teaching, and fellowship. These services provide an alternative worship experience for those who cannot attend morning services.',
      responsibilities: [
        'Organizing Friday evening services',
        'Leading worship and praise',
        'Teaching and preaching the Word',
        'Creating a vibrant worship atmosphere'
      ],
      image: '/church-building.jpg'
    },
    {
      title: 'Church Tribes',
      description: 'Building community through cultural diversity. Our tribes bring together members from different backgrounds, celebrating our unity in Christ while honoring our diverse heritage.',
      responsibilities: [
        'Organizing tribal fellowship events',
        'Promoting cultural exchange and unity',
        'Supporting members from various backgrounds',
        'Celebrating diversity in the body of Christ'
      ],
      image: '/church-building1.jpg'
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
              Spiritual Growth & Development
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Nurturing believers to maturity in Christ through discipleship, prayer, and spiritual formation
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
            Grow Deeper in Your Faith
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join one of our spiritual growth ministries and experience transformation through discipleship, prayer, and community.
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

export default SpiritualGrowth
