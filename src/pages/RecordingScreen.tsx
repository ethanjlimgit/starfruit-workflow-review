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
    <div className="min-h-screen bg-[#F2FCE2] text-gray-800 flex flex-col">
      <div className="p-4 border-b border-green-100">
        <h1 className="text-xl font-mono">New Workflow</h1>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-white/50 rounded-xl p-12 text-center space-y-8">
          <div className="flex justify-center items-center space-x-2">
            <Square className="text-red-500 animate-pulse" />
            <span className="text-red-500 font-mono">Recording in progress</span>
          </div>
          
          <div className="font-mono text-4xl">
            {formatTime(seconds)}
          </div>
          
          <p className="text-gray-400">
            Speak clearly and explain each step of your workflow
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
