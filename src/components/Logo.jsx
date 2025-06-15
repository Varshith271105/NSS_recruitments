import React from 'react'
import logoImage from '../assets/logo.jpg'

const Logo = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <img 
        src={logoImage} 
        alt="KMIT Logo"
        className="h-full w-full object-contain"
      />
    </div>
  )
}

export default Logo