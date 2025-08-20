import { Info } from "lucide-react";

export default function ComplianceRibbon() {
  return (
    <section className="py-6 bg-yellow-50 border-y border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-yellow-800" data-testid="text-compliance-notice">
            <strong>Important Notice:</strong> We are a judgment enforcement service, not a law firm. Availability varies by state. Services may involve assignment of judgment or authorized collections activity. Nothing here is legal advice.
          </p>
        </div>
      </div>
    </section>
  );
}
