
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, ArrowRight, MousePointer } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ZendeskDemo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [query, setQuery] = useState('');
  const [isGuiding, setIsGuiding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "Navigating to Zendesk Help Center...",
    "Locating Account section...",
    "Opening Password Reset options...",
    "Guiding to email input field...",
    "Completing password reset request...",
    "Password reset email sent!"
  ];
  
  const handleStartDemo = () => {
    if (!query.toLowerCase().includes('password') && !query.toLowerCase().includes('reset')) {
      toast({
        title: "Demo Requirements",
        description: "This demo is configured for password reset queries. Please include 'password' or 'reset' in your query.",
      });
      return;
    }
    
    setIsGuiding(true);
    
    // Simulate guiding process with steps
    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length) {
        setCurrentStep(step);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsGuiding(false);
          toast({
            title: "Demo Complete",
            description: "Password reset guidance workflow completed successfully!",
          });
        }, 1000);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-mono">AgentSpark Zendesk Demo</h1>
      </div>
      
      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6">Customer Support Automation Demo</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Zendesk Password Reset Guidance</h3>
              <p className="text-gray-400 mb-6">
                This demo shows how AgentSpark can guide users through a password reset process in Zendesk,
                automating support for a common customer query.
              </p>
            </div>
            
            <div className="space-y-4">
              <label className="block text-gray-300">Enter a customer query:</label>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., How do I reset my password?"
                className="bg-gray-800 border-gray-700"
                disabled={isGuiding}
              />
              
              <div className="flex justify-end">
                <Button 
                  onClick={handleStartDemo}
                  className="bg-green-600 hover:bg-green-700 flex items-center"
                  disabled={isGuiding || !query}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Start Demo
                </Button>
              </div>
            </div>
            
            {isGuiding && (
              <div className="mt-8 border border-gray-800 rounded-lg overflow-hidden">
                <div className="bg-gray-800 p-3 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="flex-1 text-center text-sm text-gray-400">Zendesk Help Center</div>
                </div>
                
                <div className="bg-gray-900 aspect-video relative p-4">
                  <div className="flex items-center justify-center h-full text-center">
                    <div className="space-y-4">
                      <MousePointer className="h-8 w-8 text-white mx-auto animate-pulse" />
                      <div className="text-green-400 font-medium animate-pulse">
                        {steps[currentStep]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Benefits for Support Teams</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Reduces ticket volume by guiding customers through self-service</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Decreases average resolution time for common support issues</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Provides consistent guidance across all support interactions</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Frees up agent time for complex support cases</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            Back to Home
          </Button>
          <Button 
            onClick={() => navigate('/workflow/1')}
            className="bg-green-600 hover:bg-green-700"
          >
            View Workflow Configuration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ZendeskDemo;
