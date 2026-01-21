import { motion } from 'framer-motion'

const Ministries = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Ministries</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Discover the various ministries and programs we offer to serve our community.
          </p>
          
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-12 mt-12">
            <p className="text-gray-600 text-lg">Content coming soon...</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Ministries
