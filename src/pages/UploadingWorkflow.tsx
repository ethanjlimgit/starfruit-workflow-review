import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react';

const UploadingWorkflow = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/analyzing-workflow');
    }, 600);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-mono">New Workflow</h1>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Recording complete</h2>
            <p className="text-gray-400">Review your recording before uploading</p>
          </div>

          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Screen recording with audio</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md flex items-center gap-2 w-full max-w-md"
              disabled
            >
              <LoaderCircle className="h-5 w-5 animate-spin" />
              <span>Uploading...</span>
            </button>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold">Turn Repetitive Tasks & SOPs into Automated Workflows</h2>
          <p className="text-gray-400">
            Record and explain your task once. Starfruit handles it forever. No coding. No drag and drop. Just like training a co-worker.
          </p>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">See How You Can Automate Anything</h3>
            <p className="text-gray-400">Save hours weekly on invoice processing and eliminate data entry errors.</p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">1</div>
                <p>Show Starfruit your task by sharing your screen</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">2</div>
                <p>Review your automation</p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">3</div>
                <p>Let Starfruit handle it</p>
              </div>
            </div>

            <p className="text-xl font-semibold text-orange-500">Stop wasting hours on repetitive tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadingWorkflow;
