import React from 'react';
import FormField from '../FormField';

const BudgetDelivery = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const budgetOptions = [
    '$500-$2,000',
    '$2,001-$5,000',
    '$5,000 plus'
  ];

  return (
    <div className="space-y-8">
      <FormField
        label="When would you like to launch your new site?"
        type="text"
        value={data.launchDate || ''}
        onChange={(value) => handleChange('launchDate', value)}
        placeholder="e.g., Next month, Q2 2024, ASAP, etc."
        required
      />

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          What is your budget for the website? *
        </label>
        <div className="space-y-3">
          {budgetOptions.map((budget) => (
            <label key={budget} className="flex items-center">
              <input
                type="radio"
                name="budget"
                value={budget}
                checked={data.budget === budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
              />
              <span className="ml-3 text-gray-300">{budget}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetDelivery;