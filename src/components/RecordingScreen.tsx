
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Square, Clock, StopCircle } from 'lucide-react';
import { Button } from './ui/button';

const RecordingScreen = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleStopRecording = () => {
    navigate('/review-recording');
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-mono">Record Zendesk Password Reset Guidance</h1>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-gray-900/50 rounded-xl p-12 text-center space-y-8">
          <div className="flex justify-center items-center space-x-2">
            <Square className="text-red-500 animate-pulse" />
            <span className="text-red-500 font-mono">Recording in progress</span>
          </div>
          
          <div className="font-mono text-4xl">
            {formatTime(seconds)}
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Please demonstrate the Zendesk password reset workflow:
            </p>
            <ol className="list-decimal text-left w-fit mx-auto space-y-2">
              <li>Navigate to Zendesk Help Center</li>
              <li>Find the Account section</li>
              <li>Select Password Reset option</li>
              <li>Show how to enter email address</li>
              <li>Click the Submit button</li>
            </ol>
          </div>
          
          <p className="text-gray-400">
            Speak clearly and explain each step for the customer
          </p>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={handleStopRecording}
            className="bg-gray-800 hover:bg-gray-700 border-gray-700"
          >
            <StopCircle className="mr-2" />
            Stop Recording
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecordingScreen;
