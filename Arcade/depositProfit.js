function depositProfit(deposit, rate, threshold) {
    for (var i = 0; deposit < threshold;) {
        i++;
        deposit += (rate / 100) * deposit;
    }
        
    return i;
}
