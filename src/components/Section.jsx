import React from 'react'

const Section = ({ title, children, className = '' }) => {
  return (
    <section className={`mb-8 animate-entry ${className}`}>
      {title && <h3 className="section-title">{title}</h3>}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}

export default Section