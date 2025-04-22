import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-sky-600 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">National Service Scheme (NSS)</h3>
            <p className="text-sm text-sky-200">Keshav Memorial Institute of Technology</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {currentYear} KMIT NSS Unit. All rights reserved.
            </p>
            <p className="text-xs text-sky-200 mt-1">
              Not Me , But You
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer