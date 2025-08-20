import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { calculateFee } from "@/lib/fee";

interface CalculatorProps {
  onStartRecovery: () => void;
}

export default function Calculator({ onStartRecovery }: CalculatorProps) {
  const [judgmentAmount, setJudgmentAmount] = useState([25000]);

  const { ourFee, yourAmount } = calculateFee(judgmentAmount[0]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white" data-testid="card-calculator">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-calculator-title">
                  Recovery Calculator
                </h2>
                <p className="text-xl text-gray-300" data-testid="text-calculator-subtitle">
                  See your potential recovery amount
                </p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-medium mb-4">
                    Judgment Amount: <span className="text-gold font-bold" data-testid="text-judgment-amount">{formatCurrency(judgmentAmount[0])}</span>
                  </label>
                  <div className="relative">
                    <Slider
                      value={judgmentAmount}
                      onValueChange={setJudgmentAmount}
                      max={100000}
                      min={2000}
                      step={1000}
                      className="w-full"
                      data-testid="slider-judgment-amount"
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>$2,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>
                </div>
                
                <Card className="bg-gray-800/50 rounded-xl p-6">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-gray-400 text-sm">Our Fee (35%)</div>
                        <div className="text-2xl font-bold text-red-400" data-testid="text-our-fee">
                          {formatCurrency(ourFee)}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">You Receive (Est.)</div>
                        <div className="text-3xl font-bold text-gold" data-testid="text-your-amount">
                          {formatCurrency(yourAmount)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-500">
                      *Illustrative only. Actual fee rates vary from 30-50% based on case complexity.
                    </div>
                  </CardContent>
                </Card>
                
                <div className="text-center">
                  <Button 
                    onClick={onStartRecovery}
                    className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    data-testid="button-free-case-check"
                  >
                    Free Case Check
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
