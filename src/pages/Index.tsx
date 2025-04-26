import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-white text-xl font-mono">Workflows</span>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Invoice Processing Workflow</CardTitle>
            <CardDescription className="text-gray-400">
              Automatically process invoices from email attachments
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>This workflow monitors an email inbox for new invoices, extracts key information, and updates your financial records.</p>
            
            <div className="mt-6 space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white text-sm font-medium mb-2">Workflow Steps</h3>
                <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2">
                  <li>Monitor email inbox for new messages with PDF attachments</li>
                  <li>Download and extract text from PDF invoices</li>
                  <li>Parse invoice details (vendor, date, amount, invoice ID)</li>
                  <li>Upload invoice to Google Drive with standardized naming</li>
                  <li>Add invoice details to Google Sheets financial tracker</li>
                </ol>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white text-sm font-medium mb-2">Workflow Inputs</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Email Address:</span>
                    <span className="text-gray-300 ml-2">invoices@company.com</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Google Drive Folder:</span>
                    <span className="text-gray-300 ml-2">Invoices/2024</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Google Sheet:</span>
                    <span className="text-gray-300 ml-2">Financial Tracker 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link to={`/workflow/${id}/execution`}>
              <Button 
                variant="outline" 
                className="bg-gray-200 hover:bg-gray-300 text-foreground border-gray-300"
              >
                View runs
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
