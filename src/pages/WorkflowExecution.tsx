
import React from 'react';
import { useParams } from 'react-router-dom';

const WorkflowExecution = () => {
  const { id } = useParams();
  const currentTime = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

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
              <div className="text-blue-400 text-sm mb-1">In Progress</div>
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
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <div className="text-white">Workflow triggered from email</div>
                  <div className="text-gray-400 text-sm">Found email with invoice attachment.</div>
                  <div className="text-gray-500 text-xs mt-1">+0s</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <div className="text-white">Downloading invoice</div>
                  <div className="text-gray-400 text-sm">Downloading invoice 'harris_invoice.pdf'.</div>
                  <div className="text-gray-500 text-xs mt-1">+2s</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <div className="text-white">Reading invoice</div>
                  <div className="text-gray-400 text-sm">Extracting vendor name, date, amount and invoice id.</div>
                  <div className="text-gray-500 text-xs mt-1">+6s</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <div className="text-white">Uploading to Google Drive</div>
                  <div className="text-gray-400 text-sm">Uploading invoice with filename 'Harris Consulting_04/03/2024_3230.00'</div>
                  <div className="text-gray-500 text-xs mt-1">+12s</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <div className="text-white">Updating Google Sheets</div>
                  <div className="text-gray-400 text-sm">Adding a new row to the sheet with the invoice details.</div>
                  <div className="text-gray-500 text-xs mt-1">+15s</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <div className="text-white">Workflow execution complete</div>
                  <div className="text-gray-400 text-sm">Successfully processed invoice</div>
                  <div className="text-gray-500 text-xs mt-1">+18s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowExecution;
