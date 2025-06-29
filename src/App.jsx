import { useState } from 'react'
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'
import SuccessMessage from './components/SuccessMessage'
import Footer from './components/Footer'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState(null)

  const handleSubmissionSuccess = (data) => {
    setFormData(data)
    setIsSubmitted(true)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6">
        {isSubmitted ? (
          <SuccessMessage formData={formData} />
        ) : (
          <RegistrationForm onSubmissionSuccess={handleSubmissionSuccess} />
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default App