
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import CreateAgent from "./pages/CreateAgent";
import RecordingScreen from "./components/RecordingScreen";
import ReviewRecording from "./pages/ReviewRecording";
import UploadingWorkflow from "./pages/UploadingWorkflow";
import AnalyzingWorkflow from "./pages/AnalyzingWorkflow";
import WorkflowExecution from "./pages/WorkflowExecution";
import WorkflowConfig from "./pages/WorkflowConfig";
import ZendeskDemo from "./pages/ZendeskDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-agent" element={<CreateAgent />} />
          <Route path="/recording" element={<RecordingScreen />} />
          <Route path="/review-recording" element={<ReviewRecording />} />
          <Route path="/uploading-workflow" element={<UploadingWorkflow />} />
          <Route path="/analyzing-workflow" element={<AnalyzingWorkflow />} />
          <Route path="/workflow/:id" element={<WorkflowConfig />} />
          <Route path="/workflow/:id/execution" element={<WorkflowExecution />} />
          <Route path="/zendesk-demo" element={<ZendeskDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
