import React from 'react';
import FormField from '../FormField';

const Competition = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          Please provide the website URLs of your top 5 competitors.
        </label>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <FormField
              key={num}
              label={`Competitor ${num}`}
              type="url"
              value={data[`competitor${num}`] || ''}
              onChange={(value) => handleChange(`competitor${num}`, value)}
              placeholder="https://example.com"
            />
          ))}
        </div>
      </div>

      <FormField
        label="Tell us about your competitors..."
        type="textarea"
        value={data.competitorAnalysis || ''}
        onChange={(value) => handleChange('competitorAnalysis', value)}
        placeholder="What do they do well? What do they do poorly? How do you differentiate yourself? What advantages do you have?"
        rows={6}
        required
      />
    </div>
  );
};

export default Competition;