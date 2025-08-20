import { useState } from "react";
import { motion } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import HowItWorks from "./components/HowItWorks";
import Calculator from "./components/Calculator";
import Niches from "./components/Niches";
import ComplianceRibbon from "./components/ComplianceRibbon";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import IntakeFormModal from "./components/IntakeFormModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground font-inter">
        <Topbar onStartRecovery={openModal} />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero onStartRecovery={openModal} onLearnMore={() => scrollToSection('how-it-works')} />
          <ProofStrip />
          <HowItWorks />
          <Calculator onStartRecovery={openModal} />
          <Niches />
          <ComplianceRibbon />
          <FAQ />
          <CTA onStartRecovery={openModal} />
          <Footer />
        </motion.main>

        <IntakeFormModal isOpen={isModalOpen} onClose={closeModal} />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default App;
