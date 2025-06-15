import React from 'react'
import logoImage from '../assets/logo.jpg'

const Logo = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <div className="h-full w-full rounded-full border-2 border-primary-100">
        <img 
          src={logoImage} 
          alt="KMIT Logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export default Logo