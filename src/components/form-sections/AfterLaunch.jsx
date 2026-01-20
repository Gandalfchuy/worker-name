import React from 'react';

const AfterLaunch = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const options = ['Yes', 'No', 'Maybe'];

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          Do you need help updating and maintaining your website? *
        </label>
        <div className="space-y-3">
          {options.map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="maintenance"
                value={option}
                checked={data.maintenance === option}
                onChange={(e) => handleChange('maintenance', e.target.value)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
              />
              <span className="ml-3 text-gray-300">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          Will you be needing additional SEO & online marketing help? *
        </label>
        <div className="space-y-3">
          {options.map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="seoMarketing"
                value={option}
                checked={data.seoMarketing === option}
                onChange={(e) => handleChange('seoMarketing', e.target.value)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
              />
              <span className="ml-3 text-gray-300">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterLaunch;