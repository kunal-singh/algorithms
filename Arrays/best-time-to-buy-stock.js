const maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i += 1) {
    if (min > prices[i]) {
      min = prices[i];
    }
    if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

export default maxProfit;
