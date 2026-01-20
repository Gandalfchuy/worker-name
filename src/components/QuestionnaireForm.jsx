import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BusinessDetails from './form-sections/BusinessDetails';
import Purpose from './form-sections/Purpose';
import AboutDesign from './form-sections/AboutDesign';
import WebsiteRequirements from './form-sections/WebsiteRequirements';
import Competition from './form-sections/Competition';
import BudgetDelivery from './form-sections/BudgetDelivery';
import AfterLaunch from './form-sections/AfterLaunch';
import FinalSection from './form-sections/FinalSection';
import { supabase } from '../supabase';

const sections = [
  { id: 'business', title: 'Business Details', component: BusinessDetails },
  { id: 'purpose', title: 'Purpose', component: Purpose },
  { id: 'design', title: 'About Design', component: AboutDesign },
  { id: 'requirements', title: 'Website Requirements', component: WebsiteRequirements },
  { id: 'competition', title: 'Competition', component: Competition },
  { id: 'budget', title: 'Budget & Delivery', component: BudgetDelivery },
  { id: 'afterlaunch', title: 'After Launch Help', component: AfterLaunch },
  { id: 'final', title: 'Final Thoughts', component: FinalSection },
];

const QuestionnaireForm = ({ onSubmit }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (sectionId, data) => {
    setFormData(prev => ({
      ...prev,
      [sectionId]: { ...prev[sectionId], ...data }
    }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    

    try {  
      const rawCompetitors = [
        formData.competition.competitor1,
        formData.competition.competitor2,
        formData.competition.competitor3,
        formData.competition.competitor4,
        formData.competition.competitor5
        ];

      const validCompetitors = rawCompetitors.filter(url => url && url.trim() !== '');

      const competitorsString = validCompetitors.join(', ');

      const payload = {
        
        // --- BusinessDetails ---
        company_name: formData.business.companyName,
        products_and_services: formData.business.productsServices,
        company_history: formData.business.companyHistory,
        decision_makers: formData.business.decisionMakers,

        // --- Purpose --- //
        primary_goals: formData.purpose.primaryGoals.join(", "),
        custom_goal: formData.purpose.customGoal,
        ideal_customer: formData.purpose.idealCustomer,
        visit_reason: formData.purpose.visitReasons,
        traffic_sources: formData.purpose.trafficSources.join(", "),
        other_traffic_sources: formData.purpose.otherTrafficSource,

        // --- Design --- //
        design_type: formData.design.designType,
        has_logo: formData.design.hasLogo,
        branding_description: formData.design.brandingDescription,
        has_print_materials: formData.design.hasPrintMaterials,
        inspiration_site_1: formData.design.inspirationSite1,
        inspiration_site_2: formData.design.inspirationSite2,
        inspiration_site_3: formData.design.inspirationSite3,

        // --- Requirements --- //
        features: formData.requirements.features.join(", "),
        other_features: formData.requirements.otherFeatures,
        content_types: formData.requirements.contentTypes.join(", "),
        other_content_types: formData.requirements.otherContentTypes,

        // --- Competition --- //
        competitors: competitorsString,

        // --- Budget --- //
        launch_date: formData.budget.launchDate,
        budget: formData.budget.budget,

        // --- AfterLaunch --- //
        maintenance: formData.afterlaunch.maintenance,
        seo_marketing: formData.afterlaunch.seoMarketing,

        // --- Final --- //
        additional_info: formData.final.additionalInfo
      };

      // PASO B: Enviar a Supabase
      // Cambia 'project_requests' por el nombre real de tu tabla
      const { error } = await supabase
        .from('project_inquiries') 
        .insert([ payload ]);

      if (error) throw error;

      // PASO C: Éxito
      console.assert('¡Cuestionario enviado con éxito! Te contactaremos pronto.');
      
      // Si tienes una función onSubmit que viene del padre (ej. para redirigir), la llamamos aquí
      if (onSubmit) onSubmit(formData);

    } catch (error) {
      console.error('Error enviando formulario:', error);
      alert('Fatal error, Contact Support');
    } finally {
      setIsSubmitting(false);
    }
  };

  const CurrentSectionComponent = sections[currentSection].component;
  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <section className="py-16 bg-[#0a0f1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0d1a2a] border border-gray-800 rounded-2xl shadow-2xl p-8 lg:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-white">
                Step {currentSection + 1} of {sections.length}
              </span>
              <span className="text-sm text-gray-400">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <motion.div 
                className="bg-[#e85d04] h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Section Title */}
          <motion.h2 
            className="text-3xl font-bold text-white mb-8"
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {sections[currentSection].title}
          </motion.h2>

          {/* Form Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentSectionComponent
                data={formData[sections[currentSection].id] || {}}
                onChange={(data) => updateFormData(sections[currentSection].id, data)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={prevSection}
              disabled={currentSection === 0}
              className="px-6 py-3 text-gray-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#e85d04] transition-colors duration-200"
            >
              ← Previous
            </button>

            {currentSection < sections.length - 1 ? (
              <button
                onClick={nextSection}
                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-[#e85d04] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ff6b1a] transition-colors duration-200 disabled:opacity-50 shadow-lg shadow-[#e85d04]/30"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Questionnaire → Get Your Custom Proposal'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionnaireForm;