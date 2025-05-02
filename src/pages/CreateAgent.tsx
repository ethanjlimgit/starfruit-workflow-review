
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Monitor } from 'lucide-react';
import StepIndicator from '../components/StepIndicator';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog"

const CreateAgent = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleStartRecording = async () => {
    setIsDialogOpen(true);
  };

  const handleScreenShare = async () => {
    try {
      await navigator.mediaDevices.getDisplayMedia({ video: true });
      setIsDialogOpen(false);
      navigate('/recording');
    } catch (error) {
      console.error('Error sharing screen:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">Create Zendesk Support Workflow</h1>
          <StepIndicator currentStep={1} />
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 text-center">
          <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-gray-300" />
            </div>
            
            <h2 className="text-2xl font-semibold">Record your support workflow</h2>
            
            <p className="text-gray-400">
              Show AgentSpark how you guide customers through password reset in Zendesk. Please explain what you're doing as you go.
            </p>

            <div className="bg-gray-700/50 p-4 rounded-lg w-full text-left">
              <h3 className="font-medium mb-2">Recording Tips:</h3>
              <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
                <li>Navigate clearly through each step of the Zendesk interface</li>
                <li>Explain the purpose of each action you take</li>
                <li>Speak as if you're teaching the customer directly</li>
                <li>Highlight where to find the password reset option</li>
                <li>Show how to complete the form and submit the request</li>
              </ul>
            </div>

            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg"
              onClick={handleStartRecording}
            >
              Start Recording
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-800 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle>Share Your Screen</DialogTitle>
            <DialogDescription className="text-gray-400">
              To record your Zendesk workflow, please share your browser window.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center p-4">
            <Monitor className="h-16 w-16 text-gray-400" />
          </div>
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setIsDialogOpen(false)}
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              onClick={handleScreenShare}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Share Screen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateAgent;
