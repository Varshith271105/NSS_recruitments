import React, { useRef } from 'react'
import { FaCheckCircle, FaFilePdf } from 'react-icons/fa'
import { generatePDF } from '../utils/pdfGenerator'

const SuccessMessage = ({ formData }) => {
  const componentRef = useRef()

  const handleDownloadPDF = () => {
    if (formData) {
      generatePDF(formData)
    }
  }



  return (
    <div className="max-w-none sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto animate-slide-up px-3 sm:px-0" ref={componentRef}>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-success-100 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center border-b border-success-200">
          <FaCheckCircle className="text-success-600 text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
            Registration Successful!
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
            Thank you for registering with NSS KMIT. Your information has been successfully recorded and you have successfully joined our WhatsApp group.
          </p>

          {/* Registration Details */}
          <div className="mb-6 sm:mb-8">
            <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">
                Registration Details
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base sm:w-32 lg:w-40">Name:</span>
                  <span className="text-gray-700 text-sm sm:text-base mt-1 sm:mt-0">{formData?.fullName}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base sm:w-32 lg:w-40">Roll Number:</span>
                  <span className="text-gray-700 text-sm sm:text-base mt-1 sm:mt-0">{formData?.rollNumber}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base sm:w-32 lg:w-40">Email:</span>
                  <span className="text-gray-700 text-sm sm:text-base mt-1 sm:mt-0 break-all">{formData?.email}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base sm:w-32 lg:w-40">Graduation:</span>
                  <span className="text-gray-700 text-sm sm:text-base mt-1 sm:mt-0">{formData?.graduationYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="btn btn-primary flex items-center justify-center text-sm sm:text-base lg:text-lg py-3 px-6 sm:px-8 lg:px-12"
            >
              <FaFilePdf className="mr-2" />
              Download PDF
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
              If you have any questions, please contact the NSS Program Officer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessMessage
