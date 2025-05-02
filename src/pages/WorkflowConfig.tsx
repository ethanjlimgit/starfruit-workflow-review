
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const WorkflowConfig = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <h1 className="text-xl font-mono">Zendesk Password Reset Guide</h1>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
          <div className="flex gap-2 mb-6">
            <Button variant="outline" size="sm" className="bg-purple-50/10 text-purple-200 hover:bg-purple-50/20">
              <Plus className="w-4 h-4 mr-1" />
              Variable
            </Button>
            <Button variant="outline" size="sm" className="bg-purple-50/10 text-purple-200 hover:bg-purple-50/20">
              <Plus className="w-4 h-4 mr-1" />
              Function
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-sm">
                1
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Navigate to Zendesk Help Center homepage</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Go to URL: https://support.zendesk.com</div>
                      <div className="text-sm text-gray-400 font-mono">XPath: /html/body/div[1]/div/div[1]/header/div[1]/div/div[1]/a</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400">×</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-sm">
                2
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Click on Account section in the navigation menu</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Click on element with the given XPath</div>
                      <div className="text-sm text-gray-400 font-mono">XPath: /html/body/div[1]/div/div[2]/main/div/div[2]/div/div[3]/ul/li[4]/a</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400">×</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-sm">
                3
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Select "Password Reset" option from dropdown</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Click on an element with the given XPath</div>
                      <div className="text-sm text-gray-400 font-mono">XPath: /html/body/div[1]/div/div[2]/main/div/div[3]/div[2]/ul/li[2]/a</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400">×</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-sm">
                4
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Fill in email address field</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Type into input field with given XPath</div>
                      <div className="text-sm text-gray-400 font-mono">XPath: /html/body/div[1]/div/div[2]/div[2]/div/form/div/div[3]/div/input</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400">×</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-sm">
                5
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-medium">Click Submit button to request password reset</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Click on an element with the given XPath</div>
                      <div className="text-sm text-gray-400 font-mono">XPath: /html/body/div[1]/div/div[2]/div[2]/div/form/div/div[4]/button</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400">×</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowConfig;
