import { motion } from 'framer-motion'
import { useState } from 'react'

const Give = () => {
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [reason, setReason] = useState('')

  // Flutterwave configuration - Replace with your actual public key
  const flutterwaveConfig = {
    publicKey: 'FLWPUBK-YOUR_PUBLIC_KEY_HERE', // Replace with your Flutterwave public key
    currency: 'UGX', // Ugandan Shillings
    country: 'UG', // Uganda
    paymentOptions: 'card,mobilemoney,ussd,banktransfer'
  }

  const handleFlutterwavePayment = () => {
    // Validate inputs
    if (!name || !email || !phone || !reason) {
      alert('Please fill in all required fields')
      return
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount')
      return
    }

    // Initialize Flutterwave payment
    if (window.FlutterwaveCheckout) {
      window.FlutterwaveCheckout({
        public_key: flutterwaveConfig.publicKey,
        tx_ref: `OHC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        amount: parseFloat(amount),
        currency: flutterwaveConfig.currency,
        country: flutterwaveConfig.country,
        payment_options: flutterwaveConfig.paymentOptions,
        customer: {
          email: email,
          phone_number: phone,
          name: name,
        },
        customizations: {
          title: 'Omega Healing Centre',
          description: `${reason} - Thank you for your generosity!`,
          logo: 'https://your-church-logo-url.com/logo.png',
        },
        callback: function (data) {
          if (data.status === 'successful') {
            alert('Thank you for your generous gift! Your payment was successful.')
            setAmount('')
            setName('')
            setEmail('')
            setPhone('')
            setReason('')
          }
        },
        onclose: function () {
          console.log('Payment modal closed')
        },
      })
    } else {
      alert('Payment system is loading. Please try again in a moment.')
    }
  }

  return (
    <div className="min-h-screen bg-[#262C55] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        {/* Scripture */}
        <div className="text-center mb-6">
          <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            2 Corinthians 9:8 (KJV) - And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work
          </p>
        </div>

        {/* Payment Form Card */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Online Giving
          </h2>

          {/* Form Fields */}
          <div className="space-y-5 mb-8">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Amount (UGX)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-base"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-base"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-base"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+256 700 000 000"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-base"
              />
            </div>

            {/* Reason for Giving */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Reason for Giving
              </label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="e.g., Tithes, Offering, Building Fund, Missions"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-base"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleFlutterwavePayment}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Proceed to Payment
          </button>

          {/* Footer Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Secure payment powered by Flutterwave
            </p>
            <p className="text-xs text-gray-400">
              We accept cards, mobile money, USSD, and bank transfers
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-white/70 text-sm">
          <p>Need help? Contact us at omegahealingcentre9@gmail.com</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Give
