import React, { useRef } from 'react'
import { FaCheckCircle, FaFilePdf, FaWhatsapp } from 'react-icons/fa'
import { generatePDF } from '../utils/pdfGenerator'

const SuccessMessage = ({ formData }) => {
  const componentRef = useRef()
  
  const handleDownloadPDF = () => {
    if (formData) {
      generatePDF(formData)
    }
  }
  
  const openWhatsApp = () => {
    if (formData?.phoneNumber) {
      const whatsappGroupLink = 'https://chat.whatsapp.com/Lf378cgWw2k4WyVBqHA1dq'
      const whatsappMessage = encodeURIComponent(
        `Welcome to NSS KMIT! Here's your WhatsApp group invite link: ${whatsappGroupLink}`
      )
      window.open(`https://wa.me/${formData.phoneNumber}?text=${whatsappMessage}`, '_blank')
    }
  }
  
  return (
    <div className="max-w-3xl mx-auto animate-slide-up" ref={componentRef}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-success-100 p-6 flex items-center justify-center border-b border-success-200">
          <FaCheckCircle className="text-success-600 text-5xl mb-2" />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Registration Successful!
          </h2>
          
          <p className="text-center text-gray-600 mb-6">
            Thank you for registering with NSS KMIT. Your information has been successfully recorded. 
            Please check your WhatsApp for the group invitation link.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-800 mb-2">Registration Details</h3>
              <p className="text-gray-700">
                <span className="font-medium">Name:</span> {formData?.fullName}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">JNTU Roll Number:</span> {formData?.rollNumber}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {formData?.email}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="btn btn-primary flex items-center justify-center"
            >
              <FaFilePdf className="mr-2" />
              Download PDF
            </button>
            
            <button
              type="button"
              onClick={openWhatsApp}
              className="btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              Join WhatsApp Group
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          If you have any questions, please contact the NSS Program Officer.
        </p>
      </div>
    </div>
  )
}

export default SuccessMessage