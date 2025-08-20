import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does the enforcement process take?",
      answer: "Timeline varies based on case complexity and debtor cooperation. Simple wage garnishments can begin within 2-4 weeks, while asset discovery and bank levies may take 1-3 months. We'll provide realistic timelines during your case review."
    },
    {
      question: "What is your contingency fee structure?",
      answer: "Our fees range from 30-50% of collected amounts, with no upfront costs. The exact percentage depends on case complexity, judgment age, and recovery methods required. You pay nothing unless we successfully collect money."
    },
    {
      question: "Can you garnish wages and bank accounts?",
      answer: "Yes, we handle wage garnishments, bank levies, asset seizures, and property liens. Our enforcement methods comply with state and federal laws, including exemption protections for essential income and assets."
    },
    {
      question: "What documents do I need to get started?",
      answer: "You'll need your certified judgment copy, case information, and any known debtor details (employer, addresses, assets). We can often work with partial information and conduct our own investigation to locate additional assets."
    },
    {
      question: "Can you enforce older judgments?",
      answer: "Most states allow judgment enforcement for 10-20 years from the judgment date, with options to renew. Even older judgments may be collectible if properly renewed. We'll evaluate your specific judgment's enforceability during consultation."
    },
    {
      question: "Do you handle business-to-business judgments?",
      answer: "Absolutely. We enforce judgments against businesses including corporations, LLCs, and partnerships. Business collections often involve accounts receivable, business bank accounts, and equipment seizures."
    },
    {
      question: "How do you calculate fees on partial collections?",
      answer: "Our fee applies only to amounts actually collected. If we collect $10,000 on a $50,000 judgment with a 35% fee rate, you receive $6,500 and we retain $3,500. Interest and court costs may affect the total collectible amount."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600" data-testid="text-faq-subtitle">
            Get answers to common questions about judgment enforcement
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-stone-200 rounded-xl px-6 data-[state=open]:bg-stone-50"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
