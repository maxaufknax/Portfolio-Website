import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";
import PasswordProtection from "@/components/password-protection";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/Portfolio-Website" component={Portfolio} />
      <Route path="/Portfolio-Website/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PasswordProtection>
          <Toaster />
          <Router />
        </PasswordProtection>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
