import React, { useState, useRef, useEffect } from 'react'
import { FaWhatsapp, FaLock } from 'react-icons/fa'

const PasscodeModal = ({ isOpen, onClose, onSuccess }) => {
  const [passcode, setPasscode] = useState(['', '', '', ''])
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const inputRefs = useRef([])
  
  const correctPasscode = '2526'

  useEffect(() => {
    if (isOpen && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [isOpen])

  const handleInputChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return
    
    const newPasscode = [...passcode]
    newPasscode[index] = value
    setPasscode(newPasscode)
    setError('')

    // Auto-focus next input
    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !passcode[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
    
    // Handle paste
    if (e.key === 'Enter') {
      handleVerify()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 4)
    const newPasscode = pastedData.split('').concat(Array(4).fill('')).slice(0, 4)
    setPasscode(newPasscode)
    
    // Focus last filled input or first empty
    const lastIndex = Math.min(pastedData.length, 3)
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus()
    }
  }

  const handleVerify = async () => {
    const enteredCode = passcode.join('')
    
    if (enteredCode.length !== 4) {
      setError('Please enter all 4 digits')
      return
    }

    setIsVerifying(true)
    
    // Simulate verification delay
    setTimeout(() => {
      if (enteredCode === correctPasscode) {
        onSuccess()
        onClose()
      } else {
        setError('Incorrect passcode. Please check the WhatsApp group description.')
        setPasscode(['', '', '', ''])
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus()
        }
      }
      setIsVerifying(false)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm sm:max-w-md p-5 sm:p-6 lg:p-8 animate-entry max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="flex items-center">
            <FaWhatsapp className="text-green-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              Join WhatsApp Group
            </h2>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-5 sm:mb-6 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-4">
            <p className="text-xs sm:text-sm text-green-800 font-medium leading-relaxed">
              Join our NSS KMIT WhatsApp group to stay updated with activities and events!
            </p>
          </div>
          
          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
            <p className="flex items-center justify-center">
              <span className="bg-primary-100 text-primary-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2">1</span>
              First, join our WhatsApp group using the link
            </p>
            <p className="flex items-center justify-center">
              <span className="bg-primary-100 text-primary-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2">2</span>
              Find the passcode in the group description
            </p>
                         <p className="flex items-center justify-center font-medium">
               <span className="bg-primary-100 text-primary-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2">3</span>
               Enter the 4-digit passcode below to complete
             </p>
          </div>
        </div>

        {/* WhatsApp Join Button */}
        <div className="mb-5 sm:mb-6 text-center">
          <a
            href="https://chat.whatsapp.com/your-group-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <FaWhatsapp className="mr-2" />
            Join WhatsApp Group
          </a>
        </div>

        {/* Passcode Input */}
        <div className="mb-5 sm:mb-6">
          <div className="flex items-center justify-center mb-4">
            <FaLock className="text-primary-600 mr-2 text-sm sm:text-base" />
            <label className="text-sm sm:text-base font-medium text-gray-700">
              Enter 4-digit passcode:
            </label>
          </div>
          
          <div className="flex justify-center space-x-2 mb-4 px-4">
            {passcode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value.replace(/\D/, ''))}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 sm:w-14 sm:h-14 text-center text-lg sm:text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                style={{ fontSize: '16px' }} // Prevent iOS zoom
              />
            ))}
          </div>

          {error && (
            <div className="bg-error-50 border border-error-200 rounded-lg p-3 mb-4">
              <p className="text-error-700 text-xs sm:text-sm text-center font-medium">
                {error}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <button
            onClick={handleVerify}
            disabled={isVerifying || passcode.join('').length !== 4}
            className={`w-full px-4 py-3 bg-primary-600 text-white rounded-lg font-medium transition-colors text-sm sm:text-base ${
              isVerifying || passcode.join('').length !== 4
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-primary-700'
            }`}
          >
            {isVerifying ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </span>
            ) : (
              'Verify & Complete'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasscodeModal 