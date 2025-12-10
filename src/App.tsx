import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import IntegrationGuide from "./pages/IntegrationGuide";
import CaptainComplianceCaseStudy from "./pages/CaptainComplianceCaseStudy";
import MamutVsCompetitors from "./pages/blog/MamutVsCompetitors";
import WhyStartupsMoveBeyondInbound from "./pages/blog/WhyStartupsMoveBeyondInbound";
import HiddenCostsInternalBDR from "./pages/blog/HiddenCostsInternalBDR";
import ScaleOutboundWithoutBreakingBudget from "./pages/blog/ScaleOutboundWithoutBreakingBudget";
import NearshoreBDRsSmartChoice from "./pages/blog/NearshoreBDRsSmartChoice";
import BDRTeamAICopilot from "./pages/blog/BDRTeamAICopilot";
import StartupSalesChallenges from "./pages/blog/StartupSalesChallenges";
import AIOutboundSalesStartups from "./pages/blog/AIOutboundSalesStartups";
import LeadGenAgencyVsMamut from "./pages/blog/LeadGenAgencyVsMamut";
import OutboundPlaybook2025 from "./pages/blog/OutboundPlaybook2025";
import EmbeddedOutboundCells from "./pages/blog/EmbeddedOutboundCells";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OnePager from "./pages/OnePager";
import NotFound from "./pages/NotFound";
import Industries from "./pages/onepagers/Industries";
import HealthcareOnePager from "./pages/onepagers/HealthcareOnePager";
import FinancialServicesOnePager from "./pages/onepagers/FinancialServicesOnePager";
import StaffingRecruitingOnePager from "./pages/onepagers/StaffingRecruitingOnePager";
import SoftwareConsultanciesOnePager from "./pages/onepagers/SoftwareConsultanciesOnePager";
import SaaSOnePager from "./pages/onepagers/SaaSOnePager";
import MamutTalentOnePager from "./pages/onepagers/MamutTalentOnePager";
import CaseStudiesIndex from "./pages/case-studies/CaseStudiesIndex";
import { SaaS30DayPipeline, HealthcareComplianceOutreach, FinservTrustFirstOutbound, StaffingRoleBasedOutbound, ConsultanciesInitiativeLedOutbound } from "./pages/case-studies/CaseStudyPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingContactButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/mamut-vs-competitors-outbound-sales-comparison" element={<MamutVsCompetitors />} />
          <Route path="/integration-guide" element={<IntegrationGuide />} />
          <Route path="/case-study/captain-compliance" element={<CaptainComplianceCaseStudy />} />
          <Route path="/blog/why-startups-move-beyond-inbound" element={<WhyStartupsMoveBeyondInbound />} />
          <Route path="/blog/hidden-costs-internal-bdr" element={<HiddenCostsInternalBDR />} />
          <Route path="/blog/scale-outbound-without-breaking-budget" element={<ScaleOutboundWithoutBreakingBudget />} />
          <Route path="/blog/nearshore-bdrs-smart-choice" element={<NearshoreBDRsSmartChoice />} />
          <Route path="/blog/bdr-team-ai-copilot" element={<BDRTeamAICopilot />} />
          <Route path="/blog/startup-sales-challenges" element={<StartupSalesChallenges />} />
          <Route path="/blog/ai-outbound-sales-solutions-startups" element={<AIOutboundSalesStartups />} />
          <Route path="/blog/lead-gen-agency-vs-mamut-gtm-plugin" element={<LeadGenAgencyVsMamut />} />
          <Route path="/blog/outbound-playbook-2025-math-behind-outreach-volume" element={<OutboundPlaybook2025 />} />
          <Route path="/blog/embedded-outbound-cells" element={<EmbeddedOutboundCells />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/one-pager" element={<OnePager />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/one-pagers/healthcare" element={<HealthcareOnePager />} />
          <Route path="/one-pagers/financial-services" element={<FinancialServicesOnePager />} />
          <Route path="/one-pagers/staffing-recruiting" element={<StaffingRecruitingOnePager />} />
          <Route path="/one-pagers/software-consultancies" element={<SoftwareConsultanciesOnePager />} />
          <Route path="/one-pagers/saas" element={<SaaSOnePager />} />
          <Route path="/one-pagers/mamut-talent" element={<MamutTalentOnePager />} />
          <Route path="/case-studies" element={<CaseStudiesIndex />} />
          <Route path="/case-studies/saas-30-day-pipeline" element={<SaaS30DayPipeline />} />
          <Route path="/case-studies/healthcare-compliance-outreach" element={<HealthcareComplianceOutreach />} />
          <Route path="/case-studies/finserv-trust-first-outbound" element={<FinservTrustFirstOutbound />} />
          <Route path="/case-studies/staffing-role-based-outbound" element={<StaffingRoleBasedOutbound />} />
          <Route path="/case-studies/consultancies-initiative-led-outbound" element={<ConsultanciesInitiativeLedOutbound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
