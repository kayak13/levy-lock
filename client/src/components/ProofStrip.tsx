import { ShieldCheck, MapPin, Landmark, Zap } from "lucide-react";

export default function ProofStrip() {
  const badges = [
    { icon: ShieldCheck, text: "No Win, No Fee" },
    { icon: MapPin, text: "Statewide Enforcement" },
    { icon: Landmark, text: "Bank & Wage Garnishments" },
    { icon: Zap, text: "Fast Filings" },
  ];

  return (
    <section className="bg-white py-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-sm sm:text-base font-medium text-gray-700">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-2"
                data-testid={`proof-badge-${index}`}
              >
                <Icon className="w-5 h-5 text-gold" />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
