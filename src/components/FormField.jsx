import React from 'react'

const FormField = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  error,
  placeholder = '',
  options = [],
  className = '',
  labelClassName = '',
  min,
  max,
  children
}) => {
  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`form-select ${error ? 'border-error-500 ring-1 ring-error-500' : ''} ${className}`}
          >
            <option value="" disabled>{placeholder || 'Select an option'}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`form-input ${error ? 'border-error-500 ring-1 ring-error-500' : ''} ${className}`}
            rows={4}
          />
        )
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              id={id}
              name={name}
              type="checkbox"
              checked={value}
              onChange={onChange}
              className={`form-checkbox ${error ? 'border-error-500' : ''} ${className}`}
            />
            <label htmlFor={id} className={`ml-2 block text-sm text-gray-700 ${labelClassName}`}>
              {label}
            </label>
          </div>
        )
      case 'radio':
        return (
          <div className="flex space-x-6">
            {options.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  id={`${id}-${option.value}`}
                  name={name}
                  type="radio"
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  className={`h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 ${className}`}
                />
                <label 
                  htmlFor={`${id}-${option.value}`} 
                  className={`ml-2 block text-sm text-gray-700 ${labelClassName}`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )
      case 'date':
        return (
          <input
            id={id}
            name={name}
            type="date"
            value={value}
            onChange={onChange}
            required={required}
            min={min}
            max={max}
            className={`form-input ${error ? 'border-error-500 ring-1 ring-error-500' : ''} ${className}`}
          />
        )
      default:
        return (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            min={min}
            max={max}
            className={`form-input ${error ? 'border-error-500 ring-1 ring-error-500' : ''} ${className}`}
          />
        )
    }
  }

  // For checkbox, the label is rendered next to the input
  if (type === 'checkbox') {
    return (
      <div className={`mb-4 ${className}`}>
        {renderField()}
        {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
      </div>
    )
  }

  return (
    <div className={`mb-4 ${className}`}>
      {type !== 'checkbox' && (
        <label htmlFor={id} className={`form-label ${labelClassName}`}>
          {label} {required && <span className="text-error-500">*</span>}
        </label>
      )}
      {renderField()}
      {children}
      {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
    </div>
  )
}

export default FormField