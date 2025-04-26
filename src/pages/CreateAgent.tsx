import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Video } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import { Button } from '../components/ui/button';

const CreateAgent = () => {
  const navigate = useNavigate();

  const handleStartRecording = () => {
    navigate('/recording');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">New Workflow</h1>
          <StepIndicator currentStep={1} />
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 text-center">
          <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-gray-300" />
            </div>
            
            <h2 className="text-2xl font-semibold">Record your workflow</h2>
            
            <p className="text-gray-400">
              I'll watch and learn as you perform your task. Please explain what you're doing as you go.
            </p>

            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-lg"
              onClick={handleStartRecording}
            >
              Start Recording
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAgent;
