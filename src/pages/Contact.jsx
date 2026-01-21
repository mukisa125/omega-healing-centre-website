import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      value: '+256 123 456 789',
      link: 'tel:+256123456789',
      description: 'Available Monday - Friday, 9AM - 5PM',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      title: 'WhatsApp',
      value: '+256 987 654 321',
      link: 'https://wa.me/256987654321',
      description: 'Message us anytime',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'info@omegahealingcenter.org',
      link: 'mailto:info@omegahealingcenter.org',
      description: 'We\'ll respond within 24 hours',
      color: 'from-purple-600 to-primary',
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6">
            <span className="text-primary">Contact</span> Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us. We'd love to hear from you and answer any questions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.title === 'WhatsApp' ? '_blank' : undefined}
              rel={info.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 shadow-md cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">
                  {info.title}
                </h3>
                
                <p className="text-lg md:text-xl font-semibold text-primary mb-2">
                  {info.value}
                </p>
                
                <p className="text-sm md:text-base text-gray-600">
                  {info.description}
                </p>

                <div className="mt-4 flex items-center text-primary font-medium text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                  <span>Get in touch</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="bg-gradient-to-r from-primary to-primary-light p-4 md:p-6">
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                Visit Us
              </h2>
            </div>
            <p className="text-white/90 mt-2 text-center md:text-left text-sm md:text-base">
              Kampala, Uganda
            </p>
          </div>
          
          <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573234567!2d32.5635383!3d0.2659562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd6ba50c46d9%3A0x25ddeb35d6ace15e!2s7H87%2B9CM%2C%20Kampala!5e0!3m2!1sen!2sug!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Omega Healing Center Location"
            ></iframe>
          </div>
          
          <div className="p-4 md:p-6 bg-gray-50 border-t-2 border-gray-200">
            <a
              href="https://www.google.com/maps/dir//7H87%2B9CM,+Kampala/@0.3078737,32.5938274,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x177dbd6ba50c46d9:0x25ddeb35d6ace15e!2m2!1d32.5635383!2d0.2659562?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-6 md:p-8 border-2 border-primary/10"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
            Office Hours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto text-gray-700">
            <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
              <p className="font-semibold text-primary text-base md:text-lg">Monday - Friday</p>
              <p className="text-sm md:text-base">9:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
              <p className="font-semibold text-primary text-base md:text-lg">Saturday - Sunday</p>
              <p className="text-sm md:text-base">Service Times Only</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
