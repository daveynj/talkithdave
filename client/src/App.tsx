import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./hooks/useLanguage";
import LanguageSpecificHead from "./components/LanguageSpecificHead";
import LanguageDetector from "./components/LanguageDetector";
import AnalyticsTracker from "./components/AnalyticsTracker";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SiemReap from "@/pages/SiemReap";
import B1Curriculum from "@/pages/B1Curriculum";
import SoftwareEngineersPage from "@/pages/SoftwareEngineersPage";
import NursesPage from "@/pages/NursesPage";
import FinancePage from "@/pages/FinancePage";
import BusinessExecutivesPage from "@/pages/BusinessExecutivesPage";
import EngineersPage from "@/pages/EngineersPage";
import DoctorsPage from "@/pages/DoctorsPage";
import LawyersPage from "@/pages/LawyersPage";
import ITProfessionalsPage from "@/pages/ITProfessionalsPage";
import HospitalityPage from "@/pages/HospitalityPage";
import MarketingPage from "@/pages/MarketingPage";
import TeachersPage from "@/pages/TeachersPage";
import HRProfessionalsPage from "@/pages/HRProfessionalsPage";
import ArchitectsPage from "@/pages/ArchitectsPage";
import PharmacistsPage from "@/pages/PharmacistsPage";
import AccountantsPage from "@/pages/AccountantsPage";

function Router() {
  return (
    <Switch>
      {/* Profession landing pages - must be before "/" */}
      <Route path="/esl-lessons-for-software-engineers" component={SoftwareEngineersPage} />
      <Route path="/esl-lessons-for-nurses" component={NursesPage} />
      <Route path="/esl-lessons-for-finance-professionals" component={FinancePage} />
      <Route path="/esl-lessons-for-business-executives" component={BusinessExecutivesPage} />
      <Route path="/esl-lessons-for-engineers" component={EngineersPage} />
      <Route path="/esl-lessons-for-doctors" component={DoctorsPage} />
      <Route path="/esl-lessons-for-lawyers" component={LawyersPage} />
      <Route path="/esl-lessons-for-it-professionals" component={ITProfessionalsPage} />
      <Route path="/esl-lessons-for-hospitality-professionals" component={HospitalityPage} />
      <Route path="/esl-lessons-for-marketing-professionals" component={MarketingPage} />
      <Route path="/esl-lessons-for-teachers" component={TeachersPage} />
      <Route path="/esl-lessons-for-hr-professionals" component={HRProfessionalsPage} />
      <Route path="/esl-lessons-for-architects" component={ArchitectsPage} />
      <Route path="/esl-lessons-for-pharmacists" component={PharmacistsPage} />
      <Route path="/esl-lessons-for-accountants" component={AccountantsPage} />

      {/* Other pages */}
      <Route path="/siem-reap" component={SiemReap} />
      <Route path="/b1-curriculum" component={B1Curriculum} />

      {/* Language-specific home pages */}
      <Route path="/zh" component={Home} />
      <Route path="/ja" component={Home} />
      <Route path="/ko" component={Home} />
      <Route path="/vi" component={Home} />

      {/* Home page - must be last before NotFound */}
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <LanguageDetector />
        <LanguageSpecificHead />
        <AnalyticsTracker />
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
