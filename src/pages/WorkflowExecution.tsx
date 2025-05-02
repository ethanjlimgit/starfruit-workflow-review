
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Edit, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const WorkflowExecution = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [isWorkflowComplete, setIsWorkflowComplete] = useState(false);
  
  const currentTime = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const steps = [
    {
      status: 'blue',
      title: 'Workflow triggered from customer query',
      description: 'Detected password reset request in ticket #ZD-4391.',
      time: '+0s'
    },
    {
      status: 'green',
      title: 'Navigating to Zendesk Help Center',
      description: 'Opening support.zendesk.com in customer view.',
      time: '+2s'
    },
    {
      status: 'green',
      title: 'Accessing Account section',
      description: 'Clicked on Account menu item in navigation.',
      time: '+5s'
    },
    {
      status: 'green',
      title: 'Opening Password Reset page',
      description: 'Selected Password Reset option from account options.',
      time: '+8s'
    },
    {
      status: 'green',
      title: 'Guiding email entry',
      description: 'Highlighting email field for customer input.',
      time: '+12s'
    },
    {
      status: 'green',
      title: 'Completing reset request',
      description: 'Demonstrating Submit button location to customer.',
      time: '+15s'
    },
    {
      status: 'green',
      title: 'Workflow execution complete',
      description: 'Customer successfully guided through password reset process.',
      time: '+18s'
    }
  ];

  useEffect(() => {
    const showSteps = async () => {
      for (let i = 0; i <= steps.length; i++) {
        setVisibleSteps(i);
        await new Promise(resolve => setTimeout(resolve, Math.random() * 600 + 400));
        
        if (i === steps.length) {
          setIsWorkflowComplete(true);
          toast({
            title: "Success",
            description: "Password reset guidance workflow completed successfully!",
          });
        }
      }
    };
    
    showSteps();
  }, [toast]);

  const handleEdit = () => {
    navigate(`/workflow/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-white text-xl font-mono">AgentSpark Workflows</span>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className={`${isWorkflowComplete ? 'text-green-500' : 'text-blue-400'} text-sm mb-1 flex items-center`}>
                {isWorkflowComplete ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Completed
                  </>
                ) : 'In Progress'}
              </div>
              <div className="text-lg font-medium">Zendesk Password Reset Guidance</div>
              <div className="text-gray-400 text-sm">{currentTime}</div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleEdit}
              className="text-gray-300 bg-gray-800 border-gray-700 hover:bg-gray-700"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>

          <div className="mt-8">
            <h3 className="text-gray-400 mb-4">Customer Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded p-4">
                <div className="text-sm text-gray-400 mb-2">Customer Email</div>
                <div className="text-sm text-gray-300">customer@example.com</div>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <div className="text-sm text-gray-400 mb-2">Ticket Reference</div>
                <div className="text-sm text-gray-300">#ZD-4391</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-gray-400 mb-4">Execution Timeline</h3>
            <div className="space-y-4">
              {steps.slice(0, visibleSteps).map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                >
                  <div className={`w-5 h-5 rounded-full bg-${step.status}-500/20 flex items-center justify-center mt-1`}>
                    <div className={`w-2 h-2 rounded-full bg-${step.status}-500`}></div>
                  </div>
                  <div>
                    <div className="text-white">{step.title}</div>
                    <div className="text-gray-400 text-sm">{step.description}</div>
                    <div className="text-gray-500 text-xs mt-1">{step.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowExecution;
