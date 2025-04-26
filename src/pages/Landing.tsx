
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/ui/table';
import { Plus } from 'lucide-react';

const agents = [
  {
    id: '1',
    name: 'Spreadsheet Data Sync',
    lastUpdated: 'Mar 5, 2024',
    createdAt: 'Mar 5, 2024'
  },
  {
    id: '2',
    name: 'Daily Report Automation',
    lastUpdated: 'Mar 28, 2024',
    createdAt: 'Mar 28, 2024'
  },
  {
    id: '3',
    name: 'Customer Outreach Workflow',
    lastUpdated: 'Mar 27, 2024',
    createdAt: 'Mar 28, 2024'
  },
  {
    id: '4',
    name: 'Data Entry Automation',
    lastUpdated: 'Mar 26, 2024',
    createdAt: 'Mar 26, 2024'
  },
  {
    id: '5',
    name: 'Weekly Analytics Report',
    lastUpdated: 'Mar 20, 2024',
    createdAt: 'Mar 20, 2024'
  }
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F2FCE2] text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Automate repetitive tasks & SOPs with browser agents</h1>
          <div className="flex gap-4">
            <Button 
              className="bg-green-600 hover:bg-green-700 px-6 py-3 text-base"
              onClick={() => navigate('/create-agent')}
            >
              <Plus className="mr-3 h-5 w-5" />
              Create Workflow
            </Button>
          </div>
        </div>

        <div className="bg-white/50 rounded-lg p-4 border border-green-100 shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-base">Name</TableHead>
                <TableHead className="text-base">Last Updated</TableHead>
                <TableHead className="text-base">Created At</TableHead>
                <TableHead className="text-base">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agents.map((agent) => (
                <TableRow 
                  key={agent.id}
                  className="cursor-pointer hover:bg-green-50/50"
                  onClick={() => navigate(`/workflow/${agent.id}`)}
                >
                  <TableCell className="font-medium text-base">{agent.name}</TableCell>
                  <TableCell className="text-base">{agent.lastUpdated}</TableCell>
                  <TableCell className="text-base">{agent.createdAt}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-base">•••</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <footer className="mt-8 text-center text-sm text-green-800/70">
          Made in San Francisco
        </footer>
      </div>
    </div>
  );
};

export default Landing;
