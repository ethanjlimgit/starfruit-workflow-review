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
    <div className="min-h-screen bg-[#F2FCE2] text-gray-800">
      <div className="p-4 border-b border-green-100">
        <h1 className="text-xl font-mono">New Workflow</h1>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Recording complete</h2>
            <p className="text-gray-600">Review your recording before uploading</p>
          </div>

          <div className="aspect-video bg-white/50 rounded-lg overflow-hidden border border-green-100">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Screen recording with audio</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-md flex items-center gap-2 w-full max-w-md text-white"
              disabled
            >
              <LoaderCircle className="h-5 w-5 animate-spin" />
              <span>Uploading...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadingWorkflow;
