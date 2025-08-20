import { motion } from "framer-motion";
import { Search, Gavel, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Locate & Lock Assets",
      description: "We investigate and identify debtor assets including bank accounts, wages, and property that can be legally seized.",
    },
    {
      icon: Gavel,
      title: "2. Enforce Collection", 
      description: "We file writs, execute levies, and implement wage garnishments through proper legal channels.",
    },
    {
      icon: DollarSign,
      title: "3. You Get Paid",
      description: "We collect 30–50% of recovered funds as our fee. You receive the remainder with no upfront costs.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="text-how-it-works-title">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-how-it-works-subtitle">
            Three simple steps to get your money back
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 card-hover h-full" data-testid={`card-step-${index + 1}`}>
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
