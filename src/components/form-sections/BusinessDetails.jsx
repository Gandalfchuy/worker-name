import React from 'react';
import FormField from '../FormField';

const BusinessDetails = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="What is your company's name?"
        type="text"
        value={data.companyName || ''}
        onChange={(value) => handleChange('companyName', value)}
        placeholder="Enter your company name"
        required
      />

      <FormField
        label="What products and services do you offer?"
        type="textarea"
        value={data.productsServices || ''}
        onChange={(value) => handleChange('productsServices', value)}
        placeholder="Describe your main products and services"
        rows={4}
        required
      />

      <FormField
        label="Please provide a brief history of your company."
        type="textarea"
        value={data.companyHistory || ''}
        onChange={(value) => handleChange('companyHistory', value)}
        placeholder="Tell us about your company's background, founding story, milestones, etc."
        rows={4}
      />

      <FormField
        label="Who are the decision makers for this project?"
        type="textarea"
        value={data.decisionMakers || ''}
        onChange={(value) => handleChange('decisionMakers', value)}
        placeholder="List the key people involved in approving this project"
        rows={3}
        required
      />
    </div>
  );
};

export default BusinessDetails;