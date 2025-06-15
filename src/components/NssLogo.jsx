import React from 'react'
import logoImage from '../assets/nss_logo.png'

const NssLogo = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <img 
        src={logoImage} 
        alt="NSS Logo"
        className="h-full w-full object-contain"
      />
    </div>
  )
}

export default NssLogo