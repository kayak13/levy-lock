import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CTAProps {
  onStartRecovery: () => void;
}

export default function CTA({ onStartRecovery }: CTAProps) {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Get Paid?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Stop chasing deadbeat debtors. Let us enforce your judgment and recover what you're owed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onStartRecovery}
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-free-case-check-cta"
            >
              Free Case Check
            </Button>
            <Button 
              variant="outline"
              onClick={onStartRecovery}
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              data-testid="button-start-recovery-cta"
            >
              Start Recovery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
