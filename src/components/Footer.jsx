import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gray-900">Omega</span>
              <span className="text-primary"> Healing Center</span>
            </h3>
            <p className="text-gray-700 mb-4">
              An open invitation to a life of healing, restoration, and faith through the Word of God.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="text-gray-700 hover:text-primary transition-colors font-medium">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-gray-700 hover:text-primary transition-colors font-medium">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Service Times</h4>
            <ul className="space-y-2 text-gray-700 font-medium">
              <li>Thursday: 5:00 PM</li>
              <li>Sunday: 9:00 AM</li>
              <li>Sunday: 11:30 AM</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Omega Healing Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
