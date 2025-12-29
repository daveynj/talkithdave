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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/zh" component={Home} />
      <Route path="/ja" component={Home} />
      <Route path="/ko" component={Home} />
      <Route path="/vi" component={Home} />
      <Route path="/siem-reap" component={SiemReap} />
      <Route path="/b1-curriculum" component={B1Curriculum} />
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
