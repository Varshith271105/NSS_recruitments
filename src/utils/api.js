/**
 * Submits form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @returns {Promise} - A promise that resolves with the response
 */
export const submitToGoogleSheets = async (formData) => {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyv9HPtJ4Jsw6BgoEGtkw_mDpfe8KbySQBYBmEoq0CHam2CbaEDdnJ8_knHPFCrPDmX/exec'
  
  try {
    // Format the date and time
    const submissionDate = new Date()
    const formattedDate = submissionDate.toLocaleDateString('en-IN')
    const formattedTime = submissionDate.toLocaleTimeString('en-IN')
    
    // Prepare data for Google Sheets in the correct order
    const payload = [
      formattedDate, // Date
      formattedTime, // Time
      formData.fullName, // Full Name
      formData.gender, // Gender
      formData.fatherName, // Father's Name
      formData.motherName, // Mother's Name
      formData.address, // Complete Residential Address
      formData.dob, // Date of Birth
      formData.bloodGroup, // Blood Group
      formData.willingToDonateBlood, // Willing to donate blood
      formData.phoneNumber, // Contact Phone Number
      formData.email, // Email Address
      formData.rollNumber, // JNTU Roll Number
      formData.graduationYear, // Graduation Year
      formData.pastNssVolunteer, // Past NSS Volunteer
      formData.memberOfNcc, // Member of NCC
    ]

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    
    return { success: true, data: payload }
  } catch (error) {
    console.error('Error submitting form:', error)
    throw new Error('Failed to submit form. Please try again.')
  }
}

/**
 * Opens WhatsApp group invite link directly for user to join
 * @returns {void}
 */
export const openWhatsAppGroupInvite = () => {
  const whatsappGroupLink = 'https://chat.whatsapp.com/Lf378cgWw2k4WyVBqHA1dq'
  window.open(whatsappGroupLink, '_blank')
}