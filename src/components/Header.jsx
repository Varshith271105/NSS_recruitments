import React from 'react'
import Logo from './Logo'
import NssLogo from './NssLogo'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo className="h-12 w-auto mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Keshav Memorial Institute of Technology
              </h1>
              <p className="text-sm text-gray-600">
                An Autonomous Institution - Accredited by NAAC with 'A' Grade
              </p>
            </div>
          </div>
          <div className="animate-entry">
            <div className="flex items-center justify-end">
              <h2 className="text-lg md:text-xl font-semibold text-primary-700 mr-3">
                NSS KMIT Volunteer Registration
              </h2>
              <NssLogo className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
