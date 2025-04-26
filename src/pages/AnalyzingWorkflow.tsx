
import React from 'react';
import { Progress } from "@/components/ui/progress";

const AnalyzingWorkflow = () => {
  const [progress, setProgress] = React.useState(5);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-mono">Workflows</h1>
      </div>
      
      <div className="max-w-lg mx-auto mt-32 px-6 py-12 text-center space-y-12">
        <div className="relative">
          <Progress value={progress} className="h-1 w-full bg-orange-950" />
          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-orange-500">{progress}%</span>
        </div>
        
        <div className="space-y-4 text-gray-400">
          <p>Analyzing video content...</p>
          <p className="text-sm">
            We're building your workflow agent. This usually takes about 15 seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingWorkflow;
