import React, { useState } from 'react'
import { FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa'
import FormField from './FormField'
import Section from './Section'
import { 
  validateRequired, 
  validateEmail, 
  validatePhoneNumber, 
  validateRollNumber,
  validateDate
} from '../utils/validation'
import { submitToGoogleSheets } from '../utils/api'

const initialFormState = {
  fullName: '',
  gender: '',
  fatherName: '',
  motherName: '',
  address: '',
  dob: '',
  bloodGroup: '',
  willingToDonateBlood: '',
  phoneNumber: '',
  email: '',
  rollNumber: '',
  pastNssVolunteer: '',
  memberOfNcc: '',
}

const initialErrorState = {
  fullName: '',
  gender: '',
  fatherName: '',
  motherName: '',
  address: '',
  dob: '',
  bloodGroup: '',
  willingToDonateBlood: '',
  phoneNumber: '',
  email: '',
  rollNumber: '',
  pastNssVolunteer: '',
  memberOfNcc: '',
}

const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
]

const bloodGroupOptions = [
  { value: 'A+', label: 'A+' },
  { value: 'A-', label: 'A-' },
  { value: 'B+', label: 'B+' },
  { value: 'B-', label: 'B-' },
  { value: 'AB+', label: 'AB+' },
  { value: 'AB-', label: 'AB-' },
  { value: 'O+', label: 'O+' },
  { value: 'O-', label: 'O-' },
]

const yesNoOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
]

const RegistrationForm = ({ onSubmissionSuccess }) => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState(initialErrorState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }
  
  // Validate form data
  const validateForm = () => {
    const newErrors = { ...initialErrorState }
    let isValid = true
    
    // Required fields validation
    newErrors.fullName = validateRequired(formData.fullName, 'Full Name')
    newErrors.gender = validateRequired(formData.gender, 'Gender')
    newErrors.fatherName = validateRequired(formData.fatherName, 'Father\'s Name')
    newErrors.motherName = validateRequired(formData.motherName, 'Mother\'s Name')
    newErrors.address = validateRequired(formData.address, 'Address')
    newErrors.dob = validateDate(formData.dob)
    newErrors.bloodGroup = validateRequired(formData.bloodGroup, 'Blood Group')
    newErrors.willingToDonateBlood = validateRequired(formData.willingToDonateBlood, 'Willing to donate blood')
    newErrors.pastNssVolunteer = validateRequired(formData.pastNssVolunteer, 'Past NSS Volunteer')
    newErrors.memberOfNcc = validateRequired(formData.memberOfNcc, 'Member of NCC')
    
    // Specific field validations
    newErrors.email = validateEmail(formData.email)
    newErrors.phoneNumber = validatePhoneNumber(formData.phoneNumber)
    newErrors.rollNumber = validateRollNumber(formData.rollNumber)
    
    // Check if there are any errors
    for (const errorKey in newErrors) {
      if (newErrors[errorKey]) {
        isValid = false
        break
      }
    }
    
    setErrors(newErrors)
    return isValid
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors).find(key => errors[key])
      if (firstErrorField) {
        const errorElement = document.getElementById(firstErrorField)
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Submit form data to Google Sheets
      const result = await submitToGoogleSheets(formData)
      
      if (result.success) {
        onSubmissionSuccess(formData)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Get max date (today) for date of birth
  const getMaxDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }
  
  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      {/* Personal Information */}
      <Section title="Personal Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Full Name"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            error={errors.fullName}
            placeholder="Enter your full name"
          />
          
          <FormField
            label="Gender"
            id="gender"
            name="gender"
            type="select"
            value={formData.gender}
            onChange={handleChange}
            required
            error={errors.gender}
            options={genderOptions}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Father's Name"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
            error={errors.fatherName}
            placeholder="Enter your father's name"
          />
          
          <FormField
            label="Mother's Name"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
            error={errors.motherName}
            placeholder="Enter your mother's name"
          />
        </div>
        
        <FormField
          label="Complete Residential Address"
          id="address"
          name="address"
          type="textarea"
          value={formData.address}
          onChange={handleChange}
          required
          error={errors.address}
          placeholder="Enter your complete address"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            label="Date of Birth"
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
            error={errors.dob}
            max={getMaxDate()}
          />
          
          <FormField
            label="Blood Group"
            id="bloodGroup"
            name="bloodGroup"
            type="select"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            error={errors.bloodGroup}
            options={bloodGroupOptions}
          />
          
          <FormField
            label="Willing to donate blood?"
            id="willingToDonateBlood"
            name="willingToDonateBlood"
            type="select"
            value={formData.willingToDonateBlood}
            onChange={handleChange}
            required
            error={errors.willingToDonateBlood}
            options={yesNoOptions}
          />
        </div>
      </Section>
      
      {/* Contact Information */}
      <Section title="Contact Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Contact Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            error={errors.phoneNumber}
            placeholder="10-digit phone number"
          />
          
          <FormField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
            placeholder="Enter your email address"
          />
        </div>
      </Section>
      
      {/* Academic Information */}
      <Section title="Academic Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            label="JNTU Roll Number"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
            error={errors.rollNumber}
            placeholder="Enter your roll number"
          />
          
          <FormField
            label="Past NSS Volunteer"
            id="pastNssVolunteer"
            name="pastNssVolunteer"
            type="select"
            value={formData.pastNssVolunteer}
            onChange={handleChange}
            required
            error={errors.pastNssVolunteer}
            options={yesNoOptions}
          />
          
          <FormField
            label="Member of NCC"
            id="memberOfNcc"
            name="memberOfNcc"
            type="select"
            value={formData.memberOfNcc}
            onChange={handleChange}
            required
            error={errors.memberOfNcc}
            options={yesNoOptions}
          />
        </div>
      </Section>
      
      {/* Submit Button */}
      <div className="mt-8 flex flex-col items-center">
        {submitError && (
          <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md flex items-center">
            <FaExclamationTriangle className="mr-2" />
            {submitError}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn btn-primary w-full md:w-1/2 flex items-center justify-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            <>
              <FaCheck className="mr-2" />
              Submit Registration
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export default RegistrationForm