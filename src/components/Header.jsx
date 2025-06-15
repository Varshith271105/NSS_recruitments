import React from 'react'
import Logo from './Logo'
import NssLogo from './NssLogo'

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-2 sm:py-4 lg:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-3 sm:space-y-6 lg:flex-row lg:justify-between lg:space-y-0 xl:space-x-12">
          {/* Left side - KMIT (Main Institution) */}
          <div className="flex items-center justify-center sm:justify-start lg:flex-1">
            <Logo className="h-10 w-10 sm:h-16 md:h-18 lg:h-22 xl:h-24 flex-shrink-0" />
            <div className="ml-2 sm:ml-4 lg:ml-6 text-center sm:text-left lg:text-left">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
                Keshav Memorial Institute of Technology
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 mt-0.5 sm:mt-1 lg:mt-2 hidden sm:block">
                An Autonomous Institution - Accredited by NAAC with 'A' Grade
              </p>
            </div>
          </div>
          
          {/* Right side - NSS KMIT (Club within the college) */}
          <div className="flex items-center justify-center bg-primary-50 rounded-md p-2 sm:p-3 lg:p-6 xl:p-8 border border-primary-100 lg:shadow-lg xl:shadow-xl">
            <div className="text-center sm:text-right mr-2 sm:mr-4 lg:mr-6">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-primary-700 leading-tight">
                NSS KMIT
              </h2>
              <p className="text-xs lg:text-sm xl:text-base text-primary-600 font-medium">
                National Service Scheme
              </p>
            </div>
            <NssLogo className="h-8 w-8 sm:h-12 md:h-14 lg:h-18 xl:h-20 flex-shrink-0" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header