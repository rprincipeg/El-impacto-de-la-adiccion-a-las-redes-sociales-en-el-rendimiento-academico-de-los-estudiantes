import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Analysis from "@/pages/analysis";
import NotFound from "@/pages/not-found";
function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      {/* <Route path="/" component={Home}/> */}
      {/* Fallback to 404 */}
      <Route path="/" component={Analysis} />
      <Route component={NotFound} />
    </Switch>
  );
