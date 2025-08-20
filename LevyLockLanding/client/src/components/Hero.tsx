import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onStartRecovery: () => void;
  onLearnMore: () => void;
}

export default function Hero({ onStartRecovery, onLearnMore }: HeroProps) {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="text-hero-title"
        >
          We Lock Their Assets.<br />
          <span className="text-gold">You Get Paid.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="text-hero-subtitle"
        >
          No win, no fee. Wage garnishments, bank levies, liens — done for you.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            onClick={onStartRecovery}
            className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            data-testid="button-start-recovery-hero"
          >
            Start Recovery
          </Button>
          <Button 
            variant="outline"
            onClick={onLearnMore}
            className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            data-testid="button-how-it-works"
          >
            How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
