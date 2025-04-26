
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

const AnalyzingWorkflow = () => {
  const [progress, setProgress] = React.useState(5);
  const [currentStep, setCurrentStep] = React.useState(0);
  const navigate = useNavigate();

  const loadingSteps = [
    "Analyzing video content...",
    "Extracting transcript...",
    "Mapping interaction patterns...",
    "Building workflow agent..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          navigate('/workflow/1'); // Navigate to workflow page
          return prev;
        }
        return prev + 2;
      });
    }, 40); // Update every 40ms for smooth animation

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 500); // Change message every 500ms

    // Cleanup intervals
    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-mono">Workflows</h1>
      </div>
      
      <div className="max-w-lg mx-auto mt-32 px-6 py-12 text-center space-y-12">
        <div className="relative">
          <Progress value={progress} className="h-1 w-full bg-green-950" />
          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-green-500">{progress}%</span>
        </div>
        
        <div className="space-y-4 text-gray-400">
          <p className="animate-fade-in">{loadingSteps[currentStep]}</p>
          <p className="text-sm">
            We're building your workflow agent. This usually takes about 15 seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingWorkflow;
