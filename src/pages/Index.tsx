
import React, { useState } from 'react';
import StepIndicator from '../components/StepIndicator';
import ServiceConnection from '../components/ServiceConnection';
import ConfigInput from '../components/ConfigInput';

const Index = () => {
  const [driveLink, setDriveLink] = useState('');
  const [sheetsLink, setSheetsLink] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Turn Repetitive Tasks & SOPs into Automated Workflows</h1>
          <p className="text-gray-400 text-lg mb-8">
            Record and explain your task once. Starfruit handles it forever. No coding. No drag and drop.
            Just like training a co-worker.
          </p>
          <StepIndicator currentStep={2} />
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Invoice Organization</h2>
          <p className="text-gray-400 mb-8">Organizing your invoices from Gmail into Google Sheets and Drive</p>

          <div className="mb-8">
            <h3 className="text-gray-300 mb-4">Here's what I need from you</h3>
            <ConfigInput
              label="Google Drive Link"
              placeholder="Please provide the google drive link"
              value={driveLink}
              onChange={setDriveLink}
            />
            <ConfigInput
              label="Google Sheets Link"
              placeholder="Please provide the google sheets link"
              value={sheetsLink}
              onChange={setSheetsLink}
            />
          </div>

          <div className="mb-8">
            <h3 className="text-gray-300 mb-4">I'll need to access these services</h3>
            <ServiceConnection 
              name="Google Drive" 
              icon="/lovable-uploads/9c9a59aa-3f1d-484b-87ad-ce950ae10ed1.png"
            />
            <ServiceConnection 
              name="Google Sheets" 
              icon="/lovable-uploads/9c9a59aa-3f1d-484b-87ad-ce950ae10ed1.png"
            />
            <ServiceConnection 
              name="Gmail" 
              icon="/lovable-uploads/9c9a59aa-3f1d-484b-87ad-ce950ae10ed1.png"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              Run now
            </button>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Run automatically
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Stop wasting hours on repetitive tasks</h2>
          <p className="text-gray-400">
            See how you can automate anything and save hours weekly on invoice processing while eliminating data entry errors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
