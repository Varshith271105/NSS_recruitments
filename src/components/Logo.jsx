import React from 'react'
import logoImage from '../assets/logo.jpg'

const Logo = ({ className }) => {
  return (
    <div className={`text-primary-600 ${className}`}>
      {/* Using text as a placeholder */}
      <div className="flex items-center justify-center h-full w-full bg-primary-100 rounded-full font-bold text-primary-600">
      <img 
          src={logoImage} 
          alt="Logo"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
    </div>
  )
}

export default Logo