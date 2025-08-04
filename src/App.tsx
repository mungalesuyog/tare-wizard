import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnectionPage from "./pages/ConnectionPage";
import WeightMonitorPage from "./pages/WeightMonitorPage";
import StandardWeightPage from "./pages/StandardWeightPage";
import CalibrationPage from "./pages/CalibrationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectionPage />} />
          <Route path="/weight-monitor" element={<WeightMonitorPage />} />
          <Route path="/standard-weight" element={<StandardWeightPage />} />
          <Route path="/calibration" element={<CalibrationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
