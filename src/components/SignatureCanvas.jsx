import React, { useRef, useState } from 'react'
import SignaturePad from 'react-signature-canvas'

const SignatureCanvas = ({ onSignatureChange }) => {
  const sigCanvas = useRef({})
  const [isSigned, setIsSigned] = useState(false)
  
  const clear = () => {
    sigCanvas.current.clear()
    setIsSigned(false)
    onSignatureChange('')
  }
  
  const save = () => {
    if (sigCanvas.current.isEmpty()) {
      return
    }
    
    const dataURL = sigCanvas.current.toDataURL()
    onSignatureChange(dataURL)
    setIsSigned(true)
  }
  
  const handleEnd = () => {
    if (!sigCanvas.current.isEmpty()) {
      save()
    }
  }
  
  return (
    <div className="mt-4">
      <div className="border border-gray-300 rounded-md bg-white">
        <SignaturePad
          ref={sigCanvas}
          canvasProps={{
            className: "signature-pad w-full h-32",
          }}
          onEnd={handleEnd}
        />
      </div>
      <div className="flex justify-between mt-2">
        <button
          type="button"
          className="text-sm text-gray-600 hover:text-gray-800"
          onClick={clear}
        >
          Clear Signature
        </button>
        {!isSigned && (
          <button
            type="button" 
            className="text-sm text-primary-600 hover:text-primary-800"
            onClick={save}
          >
            Save Signature
          </button>
        )}
        {isSigned && (
          <span className="text-sm text-success-600">
            Signature saved
          </span>
        )}
      </div>
    </div>
  )
}

export default SignatureCanvas