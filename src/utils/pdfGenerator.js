import jsPDF from 'jspdf';
import logo from '../assets/logo.jpg'; // Left logo
import nssLogo from '../assets/nss.jpg'; // Right logo (adjust path as needed)

export const generatePDF = async (formData) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
  const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm
  const marginLeft = 15;
  const marginTop = 15;
  const lineHeight = 8;
  let currentY = marginTop;

  // Set font (all sizes to 12pt)
  pdf.setFont('Helvetica');
  pdf.setFontSize(12);

  // Add Left Logo (logo.jpg)
  let logoHeight = 30; // Default height for both logos
  try {
    const logoWidth = 20; // Width of the left logo in mm
    logoHeight = 20; // Height of the left logo in mm
    pdf.addImage(logo, 'JPEG', marginLeft, marginTop - 5, logoWidth, logoHeight); // Left logo at marginLeft
  } catch (error) {
    console.error('Error adding left logo to PDF:', error);
    // Proceed without the logo if it fails
  }

  // Add Right Logo (nss.jpg)
  try {
    const nssLogoWidth = 20; // Width of the right logo in mm
    const nssLogoHeight = 20; // Height of the right logo in mm
    const rightLogoX = pageWidth - marginLeft - nssLogoWidth; // Position right logo at right margin
    pdf.addImage(nssLogo, 'JPEG', rightLogoX, marginTop - 5, nssLogoWidth, nssLogoHeight); // Right logo
    logoHeight = Math.max(logoHeight, nssLogoHeight); // Update logoHeight if NSS logo is taller
  } catch (error) {
    console.error('Error adding NSS logo to PDF:', error);
    // Proceed without the logo if it fails
  }

  // Header (centered, adjusted for vertical alignment)
  pdf.setFont('Helvetica', 'bold');
  pdf.text('Keshav Memorial Institute of Technology', pageWidth / 2, marginTop, { align: 'center' });

  pdf.setFont('Helvetica', 'normal');
  pdf.text('An Autonomous Institution - Accredited by NAAC with \'A\' Grade', pageWidth / 2, marginTop + lineHeight, { align: 'center' });

  pdf.setFont('Helvetica', 'bold');
  pdf.text('ENROLLMENT FORM FOR NSS KMIT VOLUNTEER', pageWidth / 2, marginTop + lineHeight * 2, { align: 'center' });

  // Adjust currentY to account for the taller of the logos or header
  currentY = Math.max(marginTop + logoHeight + 5, marginTop + lineHeight * 3);

  // Form Fields (Two-column layout with : symbol)
  const labelWidth = 70; // Width for labels
  const colonX = marginLeft + labelWidth; // Position for :
  const valueX = colonX + 5; // Position for values

  const fields = [
    { label: '1. Full Name of the Volunteer', value: formData.fullName },
    { label: '2. Gender', value: formData.gender },
    { label: '3. Father\'s Name', value: formData.fatherName },
    { label: '4. Mother\'s Name', value: formData.motherName },
    { label: '5. Complete Residential Address', value: formData.address },
    { label: '6. Date of Birth', value: formData.dob },
    { label: '7. Blood Group', value: formData.bloodGroup },
    { label: '8. Willing to donate blood?', value: formData.willingToDonateBlood },
    { label: '9. Contact Phone Number', value: formData.phoneNumber },
    { label: '10. Email Address', value: formData.email },
    { label: '11. JNTU Roll Number', value: formData.rollNumber },
    { label: '12. Graduation Year', value: formData.graduationYear },
    { label: '13. Past NSS Volunteer', value: formData.pastNssVolunteer },
    { label: '14. Member of NCC', value: formData.memberOfNcc },
  ];

  fields.forEach((field) => {
    // Draw label (bold)
    pdf.setFont('Helvetica', 'bold');
    pdf.text(field.label, marginLeft, currentY);

    // Draw : (bold)
    pdf.text(':', colonX, currentY, { align: 'left' });

    // Draw value (normal text, handle multi-line for address)
    pdf.setFont('Helvetica', 'normal');
    const valueLines = pdf.splitTextToSize(field.value, pageWidth - valueX - marginLeft);
    pdf.text(valueLines, valueX, currentY);

    currentY += lineHeight * Math.max(1, valueLines.length) + lineHeight * 0.5; // Extra spacing between fields
  });

  // Declaration Section
  currentY += lineHeight;
  pdf.setFont('Helvetica', 'bold');
  pdf.text('DECLARATION', pageWidth / 2, currentY, { align: 'center' });
  currentY += lineHeight;

  pdf.setFont('Helvetica', 'normal');
  const declarationText = `I ${formData.fullName} hereby declare that I will adhere to the rules and regulations of the National Service Scheme (NSS). ` +
    'I pledge to serve with dedication, uphold the objectives of the NSS, and contribute to the welfare of ' +
    'the nation to the best of my ability.';
  const declarationLines = pdf.splitTextToSize(declarationText, pageWidth - marginLeft * 2);
  pdf.text(declarationLines, marginLeft, currentY);
  currentY += lineHeight * declarationLines.length + lineHeight;

  // Add space before signatures
  currentY += lineHeight * 2;

  // Signature of the Volunteer
  pdf.setFont('Helvetica', 'normal');
  pdf.text('Signature of the Volunteer', marginLeft, currentY);
  
  // Add space for signature line
  currentY += lineHeight * 3

  // Signature of the President of NSS KMIT
  pdf.text('Signature of the President of NSS KMIT', marginLeft, currentY);
  
  // Add space for signature line
  currentY += lineHeight * 3

  // Signature of the Programme Officer
  pdf.text('Signature of the Programme Officer', marginLeft, currentY);

  // Save PDF
  pdf.save(`NSS_Registration_${formData.fullName}.pdf`);
};