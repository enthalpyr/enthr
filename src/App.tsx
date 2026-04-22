import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import CashBook from "./pages/CashBook";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DataDeletion from "./pages/DataDeletion";
import KhataOK from "./pages/KhataOK";
import KhataOKPrivacyPolicy from "./pages/khataok/PrivacyPolicy";
import KhataOKTermsOfService from "./pages/khataok/TermsOfService";
import KhataOKDataDeletion from "./pages/khataok/DataDeletion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cashbook" element={<CashBook />} />
            <Route path="/cashbook/privacy" element={<PrivacyPolicy />} />
            <Route path="/cashbook/terms" element={<TermsOfService />} />
            <Route path="/cashbook/data-deletion" element={<DataDeletion />} />
            <Route path="/khataok" element={<KhataOK />} />
            <Route path="/khataok/privacy" element={<KhataOKPrivacyPolicy />} />
            <Route path="/khataok/terms" element={<KhataOKTermsOfService />} />
            <Route path="/khataok/data-deletion" element={<KhataOKDataDeletion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
