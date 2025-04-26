
import React from 'react';

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step === currentStep 
              ? 'bg-green-100 text-green-800'  // Changed from orange to light green
              : step < currentStep
                ? 'bg-green-50 text-green-600'  // Adjusted for light green theme
                : 'bg-gray-200 text-gray-500'
          }`}>
            {step}
          </div>
          {step < 3 && (
            <div className={`w-12 h-0.5 mx-1 ${
              step < currentStep ? 'bg-green-100' : 'bg-gray-200'  // Adjusted connector color
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
