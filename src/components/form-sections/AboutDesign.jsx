import React from 'react';
import FormField from '../FormField';

const AboutDesign = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          Do you want us to: *
        </label>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="designType"
              value="improve"
              checked={data.designType === 'improve'}
              onChange={(e) => handleChange('designType', e.target.value)}
              className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
            />
            <span className="ml-3 text-gray-300">Improve an existing website</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="designType"
              value="create"
              checked={data.designType === 'create'}
              onChange={(e) => handleChange('designType', e.target.value)}
              className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
            />
            <span className="ml-3 text-gray-300">Create a website from scratch</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          Does your company have a logo / established image & branding guidelines (e.g. fonts, colour schemes etc.)? *
        </label>
        <div className="space-y-3 mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasLogo"
              value="yes"
              checked={data.hasLogo === 'yes'}
              onChange={(e) => handleChange('hasLogo', e.target.value)}
              className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
            />
            <span className="ml-3 text-gray-300">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasLogo"
              value="no"
              checked={data.hasLogo === 'no'}
              onChange={(e) => handleChange('hasLogo', e.target.value)}
              className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
            />
            <span className="ml-3 text-gray-300">No</span>
          </label>
        </div>
        {data.hasLogo === 'yes' && (
          <FormField
            label="Please describe your branding or upload files"
            type="textarea"
            value={data.brandingDescription || ''}
            onChange={(value) => handleChange('brandingDescription', value)}
            placeholder="Describe your logo, colors, fonts, style guidelines..."
            rows={3}
          />
        )}
      </div>

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          Do you have print materials (such as business cards or brochures) that we need to match? *
        </label>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasPrintMaterials"
              value="yes"
              checked={data.hasPrintMaterials === 'yes'}
              onChange={(e) => handleChange('hasPrintMaterials', e.target.value)}
              className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
            />
            <span className="ml-3 text-gray-300">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasPrintMaterials"
              value="no"
              checked={data.hasPrintMaterials === 'no'}
              onChange={(e) => handleChange('hasPrintMaterials', e.target.value)}
              className="w-4 h-4 text-[#e85d04] border-gray-600 focus:ring-[#e85d04] bg-[#0a0f1a]"
            />
            <span className="ml-3 text-gray-300">No</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          Are there any other websites you like in terms of design? Why?
        </label>
        <div className="space-y-4">
          <FormField
            label="Website 1"
            type="text"
            value={data.inspirationSite1 || ''}
            onChange={(value) => handleChange('inspirationSite1', value)}
            placeholder="Enter website URL and explain why you like it"
          />
          <FormField
            label="Website 2"
            type="text"
            value={data.inspirationSite2 || ''}
            onChange={(value) => handleChange('inspirationSite2', value)}
            placeholder="Enter website URL and explain why you like it"
          />
          <FormField
            label="Website 3"
            type="text"
            value={data.inspirationSite3 || ''}
            onChange={(value) => handleChange('inspirationSite3', value)}
            placeholder="Enter website URL and explain why you like it"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDesign;