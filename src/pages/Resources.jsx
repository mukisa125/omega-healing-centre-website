import { motion } from 'framer-motion'
import { useState } from 'react'

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  // Live streaming configuration - Update with your actual YouTube live stream embed
  const liveStreamConfig = {
    isLive: false, // Set to true when streaming live
    embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCYourChannelID', // Update when going live
    channelUrl: 'https://www.youtube.com/@omegahealingcentrechurch'
  }

  // Sermon categories
  const categories = [
    { id: 'all', name: 'All Sermons' },
    { id: 'healing', name: 'Healing' },
    { id: 'deliverance', name: 'Deliverance' },
    { id: 'faith', name: 'Faith' },
    { id: 'prayer', name: 'Prayer' },
    { id: 'prophecy', name: 'Prophecy' }
  ]

  // Sermon videos - TO UPDATE: Go to your YouTube video, copy the URL
  // Example: https://www.youtube.com/watch?v=ABC123xyz - use "ABC123xyz" as the videoId
  const sermons = [
    {
      id: 1,
      title: 'Sunday Online Service / 11th January 2026',
      speaker: 'Bishop Michael Kyazze',
      date: '11th January 2026',
      category: 'healing',
      videoId: 'L0qzM4ssQww',
      thumbnail: 'https://img.youtube.com/vi/L0qzM4ssQww/maxresdefault.jpg',
      description: 'Join us for a powerful Sunday service filled with worship, healing, and life-transforming teaching from God\'s Word.'
    },
    {
      id: 2,
      title: 'Sunday Online Service / 4th January 2026',
      speaker: 'Bishop Michael Kyazze',
      date: '4th January 2026',
      category: 'healing',
      videoId: '9ZqWkv8yP54',
      thumbnail: 'https://img.youtube.com/vi/9ZqWkv8yP54/maxresdefault.jpg',
      description: 'Experience divine healing and restoration through the power of God\'s Word in this anointed service.'
    },
    {
      id: 3,
      title: 'Praying with Confidence',
      speaker: 'Pr Michael Kyazze',
      date: 'December 2025',
      category: 'prayer',
      videoId: 'n5s71NNfJmI',
      thumbnail: 'https://img.youtube.com/vi/n5s71NNfJmI/maxresdefault.jpg',
      description: 'Learn how to pray with boldness and confidence, knowing that God hears and answers your prayers.'
    },
    {
      id: 5,
      title: 'Thanks Giving Sunday Online Service / 14th December 2025',
      speaker: 'Bishop Michael Kyazze',
      date: '14th December 2025',
      category: 'faith',
      videoId: 'clUTwyqHQMc',
      thumbnail: 'https://img.youtube.com/vi/clUTwyqHQMc/maxresdefault.jpg',
      description: 'A special thanksgiving service celebrating God\'s faithfulness and goodness throughout the year.'
    },
    {
      id: 6,
      title: '2nd Service at Omega Healing Centre Church - Namasuba',
      speaker: 'Omega Healing Centre',
      date: 'December 2025',
      category: 'faith',
      videoId: 'XhCh9r_xZik',
      thumbnail: 'https://img.youtube.com/vi/XhCh9r_xZik/maxresdefault.jpg',
      description: 'Join us for our second service filled with powerful worship and life-changing teaching from God\'s Word.'
    },
    {
      id: 7,
      title: 'True Worship',
      speaker: 'Pr Joseph Kizito',
      date: 'December 2025',
      category: 'faith',
      videoId: 'ZdwmKfgkClE',
      thumbnail: 'https://img.youtube.com/vi/ZdwmKfgkClE/maxresdefault.jpg',
      description: 'Discover what it means to worship God in spirit and in truth, and experience His presence in a new way.'
    },
    {
      id: 8,
      title: 'Tusembere',
      speaker: 'Omega Choral Team',
      date: 'December 2025',
      category: 'faith',
      videoId: 'rLPUIPK71Sw',
      thumbnail: 'https://img.youtube.com/vi/rLPUIPK71Sw/maxresdefault.jpg',
      description: 'A beautiful worship song by the Omega Choral Team that will lift your spirit and draw you closer to God.'
    },
    {
      id: 9,
      title: '9AM Online Service // The Daniel Prophecy',
      speaker: 'Pr Michael Kyazze',
      date: 'December 2025',
      category: 'prophecy',
      videoId: 'sCWpc9H47fw',
      thumbnail: 'https://img.youtube.com/vi/sCWpc9H47fw/maxresdefault.jpg',
      description: 'An in-depth prophetic teaching on the book of Daniel and its relevance for today\'s believers.'
    },
    {
      id: 10,
      title: 'From Waiting to Rejoicing | The Hakwas\' Testimony',
      speaker: 'Omega Testimonies',
      date: 'December 2025',
      category: 'healing',
      videoId: 'tuoZ2IMrvY4',
      thumbnail: 'https://img.youtube.com/vi/tuoZ2IMrvY4/maxresdefault.jpg',
      description: 'A powerful testimony of God\'s faithfulness and miraculous intervention in the lives of the Hakwas family.'
    }
  ]

  const filteredSermons = activeCategory === 'all' 
    ? sermons 
    : sermons.filter(sermon => sermon.category === activeCategory)

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
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
              Resources & Sermons
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Access powerful teachings, sermons, and live streams to strengthen your faith
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Live Streaming Section */}
        {liveStreamConfig.isLive && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 sm:mb-20"
          >
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="relative">
                  <span className="flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  🔴 Live Now
                </h2>
              </div>
              
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                  src={liveStreamConfig.embedUrl}
                  title="Live Stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-700 mb-4">
                  Join us for live worship and powerful teaching from God's Word
                </p>
                <a
                  href={liveStreamConfig.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Subscribe to Our Channel
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Sermon Library
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${sermon.videoId}`}
                  title={sermon.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-6">
                <div className="inline-block mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {categories.find(cat => cat.id === sermon.category)?.name}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                  {sermon.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {sermon.speaker} • {sermon.date}
                </p>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {sermon.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 text-primary mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Subscribe to Our YouTube Channel
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Don't miss any of our powerful teachings! Subscribe to get notified when we upload new sermons and go live.
            </p>
            <a
              href={liveStreamConfig.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200"
            >
              Visit Our Channel
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resources
