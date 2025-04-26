
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Turn Repetitive Tasks & SOPs into Automated Workflows</h1>
          <p className="text-gray-400 text-lg mb-8">
            Record and explain your task once. Starfruit handles it forever. No coding. No drag and drop.
            Just like training a co-worker.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Stop wasting hours on repetitive tasks</h2>
          <p className="text-gray-400">
            See how you can automate anything and save hours weekly on invoice processing while eliminating data entry errors.
          </p>
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={() => navigate('/step1')} 
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
