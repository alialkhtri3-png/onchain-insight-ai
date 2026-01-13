/*
 * Simple placeholder for wallet analysis
 * We'll integrate AI here later
 */

export function analyze(transactions) {
  // Very simple rule-based insight
  const txCount = transactions.length;
  const first = transactions[txCount - 1];
  const last = transactions[0];

  return {
    totalTxs: txCount,
    firstTx: first?.timeStamp || "N/A",
    lastTx: last?.timeStamp || "N/A",
    summary: `This wallet has ${txCount} transactions. AI integration coming soon!`
  };
}
