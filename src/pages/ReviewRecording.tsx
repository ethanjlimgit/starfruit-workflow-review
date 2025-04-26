
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Upload } from 'lucide-react';

const ReviewRecording = () => {
  const navigate = useNavigate();

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

          <div className="flex gap-4 justify-end">
            <Button
              variant="outline"
              onClick={() => navigate('/recording')}
              className="bg-gray-800 hover:bg-gray-700 border-gray-700"
            >
              Record Again
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 px-8"
              onClick={() => navigate('/uploading-workflow')}
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Recording
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewRecording;
