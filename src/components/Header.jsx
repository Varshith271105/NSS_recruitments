import React from 'react'
import Logo from './Logo'
import NssLogo from './NssLogo'

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-2 sm:py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col items-center space-y-3 sm:space-y-2 lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-4">
          {/* Left side - KMIT (Main Institution) */}
          <div className="flex items-center justify-center sm:justify-start lg:flex-1">
            <Logo className="h-10 w-10 sm:h-12 lg:h-12 flex-shrink-0" />
            <div className="ml-2 sm:ml-3 lg:ml-3 text-center sm:text-left">
              <h1 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-tight">
                Keshav Memorial Institute of Technology
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 hidden sm:block">
                An Autonomous Institution - Accredited by NAAC with 'A' Grade
              </p>
            </div>
          </div>
          
          {/* Right side - NSS KMIT */}
          <div className="flex items-center justify-center bg-primary-50 rounded-md p-2 lg:p-2 border border-primary-100">
            <div className="text-center sm:text-right mr-2 lg:mr-3">
              <h2 className="text-xs sm:text-sm lg:text-base font-bold text-primary-700">
                NSS KMIT
              </h2>
              <p className="text-xs lg:text-sm text-primary-600 leading-relaxed pb-0.5">
                Volunteer Registration
              </p>
            </div>
            <NssLogo className="h-8 w-8 sm:h-10 lg:h-10 flex-shrink-0" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header