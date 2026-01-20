import React from 'react';

const FormField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false,
  rows = 3,
  className = '',
  ...props 
}) => {
  const baseClasses = "w-full px-4 py-3 bg-[#0a0f1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#e85d04] focus:border-[#e85d04] transition-colors duration-200";
  
  return (
    <div className={className}>
      <label className="block text-lg font-semibold text-white mb-2">
        {label} {required && <span className="text-[#e85d04]">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={baseClasses}
          required={required}
          {...props}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseClasses}
          required={required}
          {...props}
        />
      )}
    </div>
  );
};

export default FormField;