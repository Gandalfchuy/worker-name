import React from 'react';
import FormField from '../FormField';

const WebsiteRequirements = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handlePageChange = (page, checked) => {
    const currentPages = data.contentPages || [];
    if (checked) {
      handleChange('contentPages', [...currentPages, page]);
    } else {
      handleChange('contentPages', currentPages.filter(p => p !== page));
    }
  };

  const handleFeatureChange = (feature, checked) => {
    const currentFeatures = data.features || [];
    if (checked) {
      handleChange('features', [...currentFeatures, feature]);
    } else {
      handleChange('features', currentFeatures.filter(f => f !== feature));
    }
  };

  const handleContentTypeChange = (type, checked) => {
    const currentTypes = data.contentTypes || [];
    if (checked) {
      handleChange('contentTypes', [...currentTypes, type]);
    } else {
      handleChange('contentTypes', currentTypes.filter(t => t !== type));
    }
  };

  const pageOptions = [
    'About Us',
    'Services',
    'Products',
    'Blog',
    'Resources',
    'Contact Us'
  ];

  const featureOptions = [
    'Site search',
    'Newsletter/ Email sign up forms',
    'Customer login',
    'Registration',
    'An online store/shopping cart',
    'Online payment gateway',
    'Blog',
    'Image gallery',
    'Image slider',
    'Contact form for lead generation',
    'Client testimonials & Reviews',
    'Upcoming events calendar',
    'Social Media Integration',
    'Map & location functionality'
  ];

  const contentTypeOptions = [
    'Text',
    'Images',
    'Audio',
    'Video'
  ];

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          In addition to the Home Page, what will be your other content pages? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pageOptions.map((page) => (
            <label key={page} className="flex items-center">
              <input
                type="checkbox"
                checked={(data.contentPages || []).includes(page)}
                onChange={(e) => handlePageChange(page, e.target.checked)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 rounded focus:ring-[#e85d04] bg-[#0a0f1a]"
              />
              <span className="ml-3 text-gray-300">{page}</span>
            </label>
          ))}
        </div>
        <FormField
          label="Other pages"
          type="text"
          value={data.otherPages || ''}
          onChange={(value) => handleChange('otherPages', value)}
          placeholder="Specify other pages you need"
          className="mt-4"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          What functionality & features would you like to have in your website? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {featureOptions.map((feature) => (
            <label key={feature} className="flex items-start">
              <input
                type="checkbox"
                checked={(data.features || []).includes(feature)}
                onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 rounded focus:ring-[#e85d04] bg-[#0a0f1a] mt-1"
              />
              <span className="ml-3 text-gray-300 text-sm">{feature}</span>
            </label>
          ))}
        </div>
        <FormField
          label="Other functionality"
          type="text"
          value={data.otherFeatures || ''}
          onChange={(value) => handleChange('otherFeatures', value)}
          placeholder="Specify other features you need"
          className="mt-4"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          What type of content will you be offering? *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contentTypeOptions.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={(data.contentTypes || []).includes(type)}
                onChange={(e) => handleContentTypeChange(type, e.target.checked)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 rounded focus:ring-[#e85d04] bg-[#0a0f1a]"
              />
              <span className="ml-3 text-gray-300">{type}</span>
            </label>
          ))}
        </div>
        <FormField
          label="Other content types"
          type="text"
          value={data.otherContentTypes || ''}
          onChange={(value) => handleChange('otherContentTypes', value)}
          placeholder="Specify other content types"
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default WebsiteRequirements;