// Default fee rate (35%)
export const DEFAULT_FEE_RATE = 0.35;

export interface FeeCalculation {
  judgmentAmount: number;
  feeRate: number;
  ourFee: number;
  yourAmount: number;
}

export function calculateFee(judgmentAmount: number, feeRate: number = DEFAULT_FEE_RATE): FeeCalculation {
  const ourFee = Math.round(judgmentAmount * feeRate);
  const yourAmount = judgmentAmount - ourFee;

  return {
    judgmentAmount,
    feeRate,
    ourFee,
    yourAmount,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
