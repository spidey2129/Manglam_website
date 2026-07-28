import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import Home from '@/pages/home';
import About from '@/pages/about';
import ServicesOverview from '@/pages/services';
import LifeInsurancePage from '@/pages/services/life-insurance';
import HealthInsurancePage from '@/pages/services/health-insurance';
import MotorInsurancePage from '@/pages/services/motor-insurance';
import HomeInsurancePage from '@/pages/services/home-insurance';
import TravelInsurancePage from '@/pages/services/travel-insurance';
import BusinessInsurancePage from '@/pages/services/business-insurance';
import MutualFundsPage from '@/pages/services/mutual-funds';
import SIPsPage from '@/pages/services/sips';
import WhyUsPage from '@/pages/why-us';
import InsightsPage from '@/pages/insights';
import ContactPage from '@/pages/contact';
import PrivacyPage from '@/pages/privacy';
import TermsPage from '@/pages/terms';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={ServicesOverview} />
      <Route path="/services/life-insurance" component={LifeInsurancePage} />
      <Route path="/services/health-insurance" component={HealthInsurancePage} />
      <Route path="/services/motor-insurance" component={MotorInsurancePage} />
      <Route path="/services/home-insurance" component={HomeInsurancePage} />
      <Route path="/services/travel-insurance" component={TravelInsurancePage} />
      <Route path="/services/business-insurance" component={BusinessInsurancePage} />
      <Route path="/services/mutual-funds" component={MutualFundsPage} />
      <Route path="/services/sips" component={SIPsPage} />
      <Route path="/why-us" component={WhyUsPage} />
      <Route path="/insights" component={InsightsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
