import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import CheckIn from "./components/pages/CheckIn";
import Dashboard from "./components/pages/Dashboard";
import Clinics from "./components/pages/Clinics";
import Emergency from "./components/pages/Emergency";
import Tips from "./components/pages/Tips";
import About from "./components/pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/check-in" element={<CheckIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clinics" element={<Clinics />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
