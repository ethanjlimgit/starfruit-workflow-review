
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WorkflowExecution = () => {
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
      title: 'Workflow triggered from email',
      description: 'Found email with invoice attachment.',
      time: '+0s'
    },
    {
      status: 'green',
      title: 'Downloading invoice',
      description: "Downloading invoice 'west_coast_invoice.pdf'.",
      time: '+2s'
    },
    {
      status: 'green',
      title: 'Reading invoice',
      description: 'Extracting vendor name, date, amount and invoice id.',
      time: '+6s'
    },
    {
      status: 'green',
      title: 'Uploading to Google Drive',
      description: "Uploading invoice with filename 'West Coast Consulting_04/03/2024_3230.00'",
      time: '+12s'
    },
    {
      status: 'green',
      title: 'Updating Google Sheets',
      description: 'Adding a new row to the sheet with the invoice details.',
      time: '+15s'
    },
    {
      status: 'green',
      title: 'Workflow execution complete',
      description: 'Successfully processed invoice',
      time: '+18s'
    }
  ];

  useEffect(() => {
    const showSteps = async () => {
      for (let i = 0; i <= steps.length; i++) {
        setVisibleSteps(i);
        // Random delay between 50ms and 200ms
        await new Promise(resolve => setTimeout(resolve, Math.random() * 150 + 50));
        
        // If all steps have been shown, set workflow as complete
        if (i === steps.length) {
          setIsWorkflowComplete(true);
        }
      }
    };
    
    showSteps();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-white text-xl font-mono">Workflows</span>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className={`${isWorkflowComplete ? 'text-green-500' : 'text-blue-400'} text-sm mb-1`}>
                {isWorkflowComplete ? 'Completed' : 'In Progress'}
              </div>
              <div className="text-lg font-medium">Run 1</div>
              <div className="text-gray-400 text-sm">{currentTime}</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-gray-400 mb-4">Inputs</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded p-4">
                <div className="text-sm text-gray-400 mb-2">Google Drive Link</div>
                <div className="text-sm text-gray-300 truncate">https://drive.google.com/drive/fo...</div>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <div className="text-sm text-gray-400 mb-2">Google Sheets Link</div>
                <div className="text-sm text-gray-300 truncate">https://docs.google.com/spreadshee...</div>
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
