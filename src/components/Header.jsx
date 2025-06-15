import React from 'react'
import Logo from './Logo'
import NssLogo from './NssLogo'

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-2 sm:py-4">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Left side with KMIT logo and text */}
          <div className="flex items-center flex-shrink-0">
            <Logo className="h-12 w-12 sm:h-16 md:h-20 sm:w-16 md:w-20" />
            <div className="ml-2 sm:ml-3">
              <h1 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 leading-tight">
                Keshav Memorial Institute of Technology
              </h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                An Autonomous Institution - Accredited by NAAC with 'A' Grade
              </p>
            </div>
          </div>
          
          {/* Right side with NSS text and logo */}
          <div className="flex items-center flex-shrink-0">
            <h2 className="text-xs sm:text-sm md:text-lg font-semibold text-primary-700 mr-2 sm:mr-3 text-right">
              NSS KMIT<br />Volunteer Registration
            </h2>
            <NssLogo className="h-12 w-12 sm:h-16 md:h-20 sm:w-16 md:w-20" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header