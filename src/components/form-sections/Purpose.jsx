import React from 'react';
import FormField from '../FormField';

const Purpose = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handleGoalChange = (goal, checked) => {
    const currentGoals = data.primaryGoals || [];
    if (checked) {
      handleChange('primaryGoals', [...currentGoals, goal]);
    } else {
      handleChange('primaryGoals', currentGoals.filter(g => g !== goal));
    }
  };

  const handleTrafficSourceChange = (source, checked) => {
    const currentSources = data.trafficSources || [];
    if (checked) {
      handleChange('trafficSources', [...currentSources, source]);
    } else {
      handleChange('trafficSources', currentSources.filter(s => s !== source));
    }
  };

  const goalOptions = [
    'Build brand awareness',
    'Sell product/service',
    'Build customer loyalty',
    'Promote my latest product/service'
  ];

  const trafficSourceOptions = [
    'Search engines',
    'Online ads',
    'Offline ads',
    'Your business card',
    'Branding material',
    'Social media platforms'
  ];

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          What is the primary goal of your website? *
        </label>
        <div className="space-y-3">
          {goalOptions.map((goal) => (
            <label key={goal} className="flex items-center">
              <input
                type="checkbox"
                checked={(data.primaryGoals || []).includes(goal)}
                onChange={(e) => handleGoalChange(goal, e.target.checked)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 rounded focus:ring-[#e85d04] bg-[#0a0f1a]"
              />
              <span className="ml-3 text-gray-300">{goal}</span>
            </label>
          ))}
        </div>
        <FormField
          label="I have my own reasons"
          type="text"
          value={data.customGoal || ''}
          onChange={(value) => handleChange('customGoal', value)}
          placeholder="Describe your specific goals"
          className="mt-4"
        />
      </div>

      <FormField
        label="Who is your ideal customer? How old are they? What gender are they? Where do they hang out online? What are their interests?"
        type="textarea"
        value={data.idealCustomer || ''}
        onChange={(value) => handleChange('idealCustomer', value)}
        placeholder="Describe your target audience in detail..."
        rows={5}
        required
      />

      <FormField
        label="What are the top 5 reasons your ideal customer will visit your website?"
        type="textarea"
        value={data.visitReasons || ''}
        onChange={(value) => handleChange('visitReasons', value)}
        placeholder="1. &#10;2. &#10;3. &#10;4. &#10;5. "
        rows={6}
        required
      />

      <div>
        <label className="block text-lg font-semibold text-white mb-4">
          How do they find your website? *
        </label>
        <div className="space-y-3">
          {trafficSourceOptions.map((source) => (
            <label key={source} className="flex items-center">
              <input
                type="checkbox"
                checked={(data.trafficSources || []).includes(source)}
                onChange={(e) => handleTrafficSourceChange(source, e.target.checked)}
                className="w-4 h-4 text-[#e85d04] border-gray-600 rounded focus:ring-[#e85d04] bg-[#0a0f1a]"
              />
              <span className="ml-3 text-gray-300">{source}</span>
            </label>
          ))}
        </div>
        <FormField
          label="Other"
          type="text"
          value={data.otherTrafficSource || ''}
          onChange={(value) => handleChange('otherTrafficSource', value)}
          placeholder="Specify other traffic sources"
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Purpose;