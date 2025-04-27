
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WorkflowConfig = () => {
  const navigate = useNavigate();

  const handleStartRecording = () => {
    navigate('/recording');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-white text-xl font-mono">Workflows</span>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center space-y-6 py-12">
          <h1 className="text-4xl font-bold">
            Turn Repetitive Tasks & SOPs into Automated Workflows
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Record and explain your task once. Starfruit handles it forever. No coding. No drag and drop. Just like training a co-worker.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            See How You Can Automate Anything
          </h2>
          
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-300 mb-4">
              Save hours weekly on invoice processing and eliminate data entry errors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-900/50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold mb-4">STEP 1</div>
              <p className="text-gray-300">Show Starfruit your task by sharing your screen</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold mb-4">STEP 2</div>
              <p className="text-gray-300">Review your automation</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold mb-4">STEP 3</div>
              <p className="text-gray-300">Let Starfruit handle it</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={handleStartRecording}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg h-auto"
            >
              Start Recording Now
            </Button>
            
            <p className="text-xl text-gray-400 mt-8">
              Stop wasting hours on repetitive tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowConfig;
