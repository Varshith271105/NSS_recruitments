import React from 'react'
import logoImage from '../assets/nss.jpg'

const NssLogo = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-center h-full w-full bg-primary-100 rounded-full">
        <img 
          src={logoImage} 
          alt="NSS Logo"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
    </div>
  )
}

export default NssLogo