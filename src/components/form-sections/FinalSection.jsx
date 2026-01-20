import React from 'react';
import FormField from '../FormField';

const FinalSection = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Anything else you'd like us to know?"
        type="textarea"
        value={data.additionalInfo || ''}
        onChange={(value) => handleChange('additionalInfo', value)}
        placeholder="Share any additional requirements, concerns, or information that would help us create the perfect website for you..."
        rows={6}
      />
    </div>
  );
};

export default FinalSection;