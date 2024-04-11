const maxProfit = function (prices) {
  let profit = 0;
  let max = null;
  for (let i = 0; i < prices.length; i += 1) {
    if (max === null) {
      max = prices[i];
    } else if (max - prices[i] > profit) {
      profit = max - prices[i];
    }
  }
  return profit;
};

export default maxProfit;
