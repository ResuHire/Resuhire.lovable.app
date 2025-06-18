
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeaturesPage from "./pages/Features";
import HowItWorksPage from "./pages/HowItWorksPage";
import Programs from "./pages/Programs";
import Companies from "./pages/Companies";
import TestimonialsPage from "./pages/TestimonialsPage";
import PricingPage from "./pages/PricingPage";
import About from "./pages/About";
import ApplicationProcess from "./pages/ApplicationProcess";
import ProgramStructure from "./pages/ProgramStructure";
import SuccessStories from "./pages/SuccessStories";
import CareerOutcomes from "./pages/CareerOutcomes";
import AlumniNetwork from "./pages/AlumniNetwork";
import PartnerProgram from "./pages/PartnerProgram";
import TalentPipeline from "./pages/TalentPipeline";
import HiringSolutions from "./pages/HiringSolutions";
import CustomPrograms from "./pages/CustomPrograms";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<About />} />
          
          {/* For Talent Routes */}
          <Route path="/application-process" element={<ApplicationProcess />} />
          <Route path="/program-structure" element={<ProgramStructure />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/career-outcomes" element={<CareerOutcomes />} />
          <Route path="/alumni-network" element={<AlumniNetwork />} />
          
          {/* For Companies Routes */}
          <Route path="/partner-program" element={<PartnerProgram />} />
          <Route path="/talent-pipeline" element={<TalentPipeline />} />
          <Route path="/hiring-solutions" element={<HiringSolutions />} />
          <Route path="/custom-programs" element={<CustomPrograms />} />
          <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
