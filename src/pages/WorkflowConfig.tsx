
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const WorkflowConfig = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="p-4 border-b border-gray-800 flex items-center gap-2">
        <h1 className="text-xl font-mono">Retrieve Oncology Summary</h1>
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
                    <h3 className="font-medium">Open https://secure2.oncoemr.com and only click login button</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Go to a given URL</div>
                      <div className="text-sm text-gray-400">Click on an element with the given XPath</div>
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
                    <h3 className="font-medium">Select Astra cancer case new brunswick only</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Click on an element with the given XPath</div>
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
                    <h3 className="font-medium">On the top left, click the "search icon"</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Click on an element with the given XPath</div>
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
                    <h3 className="font-medium">Enter Test as Last Name, 123 as First, and 88451 as Med Rec #, then click find</h3>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-400">Click on an element with the given XPath</div>
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
