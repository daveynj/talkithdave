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

function Router() {
  return (
    <Switch>
      {/* Profession landing pages - must be before "/" */}
      <Route path="/esl-lessons-for-software-engineers" component={SoftwareEngineersPage} />
      <Route path="/esl-lessons-for-nurses" component={NursesPage} />
      <Route path="/esl-lessons-for-finance-professionals" component={FinancePage} />
      <Route path="/esl-lessons-for-business-executives" component={BusinessExecutivesPage} />
      <Route path="/esl-lessons-for-engineers" component={EngineersPage} />

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
