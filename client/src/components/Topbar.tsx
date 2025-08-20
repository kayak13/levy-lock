import { Button } from "@/components/ui/button";

interface TopbarProps {
  onStartRecovery: () => void;
}

export default function Topbar({ onStartRecovery }: TopbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900" data-testid="logo">
              LevyLock™
            </span>
          </div>
          <Button 
            onClick={onStartRecovery}
            className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
            data-testid="button-start-recovery-nav"
          >
            Start Recovery
          </Button>
        </div>
      </div>
    </nav>
  );
}
