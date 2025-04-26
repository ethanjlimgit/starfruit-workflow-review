import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ServiceConnection from '@/components/ServiceConnection';

const Index = () => {
  const { id } = useParams();
  const [driveLink, setDriveLink] = useState('');
  const [sheetsLink, setSheetsLink] = useState('');

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-white text-xl font-mono">Workflows</span>
        <Button variant="outline" size="sm" className="ml-auto text-gray-300">
          View runs
        </Button>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">Invoice Organization</h1>
            <p className="text-gray-400">Organizing your invoices from Gmail into Google Sheets and Drive</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-white font-medium">Here's what I need from you</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-gray-400">Google Drive Link</label>
                <Input 
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="bg-gray-900 border-gray-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400">Google Sheets Link</label>
                <Input 
                  value={sheetsLink}
                  onChange={(e) => setSheetsLink(e.target.value)}
                  placeholder="https://docs.google.com/spreadsheets/d/..."
                  className="bg-gray-900 border-gray-800 text-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-white font-medium">I'll need to access these services</h2>
            <div className="space-y-2">
              <ServiceConnection 
                name="Google Drive"
                icon="/lovable-uploads/e1c4e2a7-8284-4554-b134-b1a6134128c6.png"
                isConnected={true}
              />
              <ServiceConnection 
                name="Google Sheets"
                icon="/lovable-uploads/f88de976-38f8-461b-8cfd-012385eda247.png"
                isConnected={true}
              />
              <ServiceConnection 
                name="Gmail"
                icon="/lovable-uploads/670e7d2b-8fdb-4637-ab96-382ec04c3ae2.png"
                isConnected={true}
              />
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 flex items-center gap-2">
            <Info size={20} className="text-gray-400" />
            <p className="text-gray-400 text-sm">
              You'll be able to track all your workflow runs in the runs history
            </p>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="secondary" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Run on every email
            </Button>
            <Button variant="outline" size="lg" className="text-white bg-gray-800 border-gray-700 hover:bg-gray-700">
              Run now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
