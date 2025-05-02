
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/ui/table';
import { Plus, ArrowRight } from 'lucide-react';

const workflows = [
  {
    id: '1',
    name: 'Zendesk Password Reset Guide',
    lastUpdated: 'Apr 30, 2025',
    createdAt: 'Apr 30, 2025'
  },
  {
    id: '2',
    name: 'Customer Account Verification',
    lastUpdated: 'Apr 28, 2025',
    createdAt: 'Apr 28, 2025'
  },
  {
    id: '3',
    name: 'Ticket Categorization Assistant',
    lastUpdated: 'Apr 27, 2025',
    createdAt: 'Apr 27, 2025'
  },
  {
    id: '4',
    name: 'Knowledge Base Navigation',
    lastUpdated: 'Apr 26, 2025',
    createdAt: 'Apr 26, 2025'
  },
  {
    id: '5',
    name: 'Support Case Management',
    lastUpdated: 'Apr 20, 2025',
    createdAt: 'Apr 20, 2025'
  }
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F2FCE2] text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">AgentSpark: Automate customer support with AI guidance</h1>
          <div className="flex gap-4">
            <Button 
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-50"
              onClick={() => navigate('/zendesk-demo')}
            >
              Zendesk Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 px-6 py-3 text-base"
              onClick={() => navigate('/create-agent')}
            >
              <Plus className="mr-3 h-5 w-5" />
              Create Workflow
            </Button>
          </div>
        </div>

        <div className="bg-white/50 rounded-lg p-6 mb-10 border border-green-100 shadow-sm">
          <h2 className="text-xl font-medium mb-4">How AgentSpark Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg bg-white/70 shadow-sm border border-green-50">
              <div className="text-green-700 font-bold mb-2">STEP 1</div>
              <h3 className="font-medium mb-2">Show AgentSpark your task</h3>
              <p className="text-gray-600">Record and explain your workflow once, just like training a coworker</p>
            </div>
            <div className="p-4 rounded-lg bg-white/70 shadow-sm border border-green-50">
              <div className="text-green-700 font-bold mb-2">STEP 2</div>
              <h3 className="font-medium mb-2">Review your automation</h3>
              <p className="text-gray-600">Verify and fine-tune your workflow before deployment</p>
            </div>
            <div className="p-4 rounded-lg bg-white/70 shadow-sm border border-green-50">
              <div className="text-green-700 font-bold mb-2">STEP 3</div>
              <h3 className="font-medium mb-2">Let AgentSpark handle it</h3>
              <p className="text-gray-600">Automate repetitive tasks and guide users through complex processes</p>
            </div>
          </div>
        </div>

        <div className="bg-white/50 rounded-lg p-4 border border-green-100 shadow-sm mb-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Workflow Name</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workflows.map((workflow) => (
                <TableRow 
                  key={workflow.id}
                  className="cursor-pointer hover:bg-green-50/50"
                  onClick={() => navigate(`/workflow/${workflow.id}`)}
                >
                  <TableCell className="font-medium">{workflow.name}</TableCell>
                  <TableCell>{workflow.lastUpdated}</TableCell>
                  <TableCell>{workflow.createdAt}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">•••</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-white/50 rounded-lg p-6 border border-green-100 shadow-sm mb-8">
          <h2 className="text-xl font-medium mb-4">Industries Benefiting from AgentSpark</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Customer Support", "Finance", "E-Commerce", "HR", "Healthcare"].map((industry) => (
              <div key={industry} className="p-3 rounded-lg bg-white/70 text-center border border-green-50">
                <div className="font-medium text-green-700">{industry}</div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-green-800/70">
          © 2025 AgentSpark Computer Inc. • Privacy Policy
        </footer>
      </div>
    </div>
  );
};

export default Landing;
