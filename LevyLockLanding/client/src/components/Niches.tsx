import { motion } from "framer-motion";
import { 
  HardHat, Stethoscope, Home, SprayCanIcon as SprayCan, Key, Scale,
  HeartPulse, FileText, Briefcase, Building, CreditCard, Wrench,
  Car, UserCheck, Package, Shield, Heart, FilePlus,
  Banknote, Truck, AlertTriangle, PlusSquare, MoreHorizontal, Phone
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Niches() {
  const niches = [
    // Row 1
    { icon: HardHat, text: "Contractors" },
    { icon: Stethoscope, text: "Medical Spas" },
    { icon: Home, text: "Roofers" },
    { icon: SprayCan, text: "Cleaners" },
    { icon: Key, text: "Landlords" },
    { icon: Scale, text: "Small Claims" },
    
    // Row 2
    { icon: HeartPulse, text: "Personal Injury" },
    { icon: FileText, text: "Breach of Contract" },
    { icon: Briefcase, text: "Employment" },
    { icon: Building, text: "Business Disputes" },
    { icon: CreditCard, text: "Consumer Debt" },
    { icon: Wrench, text: "Mechanic's Liens" },
    
    // Row 3
    { icon: Car, text: "Property Damage" },
    { icon: UserCheck, text: "Professional Services" },
    { icon: Package, text: "Product Liability" },
    { icon: Shield, text: "Insurance Claims" },
    { icon: Heart, text: "Divorce/Family" },
    { icon: FilePlus, text: "Unpaid Invoices" },
    
    // Row 4
    { icon: Banknote, text: "Loan Defaults" },
    { icon: Truck, text: "Auto Accidents" },
    { icon: AlertTriangle, text: "Slip & Fall" },
    { icon: PlusSquare, text: "Medical Malpractice" },
    { icon: MoreHorizontal, text: "And More" },
    { icon: Phone, text: "Ask Us" },
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="text-niches-title">
            Judgment Types We Handle
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-niches-subtitle">
            From contractors to medical practices, we enforce all types of civil judgments
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {niches.map((niche, index) => {
            const Icon = niche.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <Card className="bg-white rounded-xl p-4 text-center shadow-sm border border-stone-200 card-hover h-full" data-testid={`card-niche-${index}`}>
                  <CardContent className="p-0 flex flex-col items-center">
                    <Icon className="w-8 h-8 text-gold mx-auto mb-2" />
                    <div className="text-sm font-medium">{niche.text}</div>
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
