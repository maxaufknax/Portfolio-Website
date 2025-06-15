import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";
import PasswordProtection from "@/components/password-protection";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/Portfolio-Website/" component={Portfolio} />
      <Route path="/Portfolio-Website" component={Portfolio} />
      <Route component={Portfolio} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <PasswordProtection>
            <Toaster />
            <Router />
          </PasswordProtection>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
