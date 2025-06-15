import React from 'react'
import logoImage from '../assets/nss.jpg'

const NssLogo = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <div className="h-full w-full rounded-full border-2 border-primary-100">
        <img 
          src={logoImage} 
          alt="NSS Logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export default NssLogo