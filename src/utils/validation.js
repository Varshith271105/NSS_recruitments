// Form validation functions

// Validate required field
export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} is required`
  }
  return ''
}

// Validate email format
export const validateEmail = (email) => {
  if (!email) return 'Email is required'
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }
  return ''
}

// Validate phone number (10 digits)
export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return 'Phone number is required'
  
  const phoneRegex = /^\d{10}$/
  if (!phoneRegex.test(phoneNumber)) {
    return 'Please enter a valid 10-digit phone number'
  }
  return ''
}

// Validate JNTU Roll Number
export const validateRollNumber = (rollNumber) => {
  if (!rollNumber) return 'JNTU Roll Number is required'
  
  // Basic validation - can be customized based on JNTU roll number format
  if (rollNumber.length < 2) {
    return 'Please enter a valid JNTU Roll Number'
  }
  return ''
}

// Validate date (not in the future)
export const validateDate = (date) => {
  if (!date) return 'Date is required'
  
  const selectedDate = new Date(date)
  const today = new Date()
  
  if (selectedDate > today) {
    return 'Date cannot be in the future'
  }
  
  return ''
}

// Format date string to YYYY-MM-DD
export const formatDateForInput = (dateString) => {
  const date = new Date(dateString)
  return date.toISOString().split('T')[0]
}