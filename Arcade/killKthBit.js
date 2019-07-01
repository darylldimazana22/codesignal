function killKthBit(n, k) {
  return kill(n, k);
}

function kill(n, k) {
  var bin = [...n.toString(2)];
  
  if (bin[bin.length - k] == 1)
    bin[bin.length - k] = 0;
  
  return parseInt(bin.join(''), 2);
}
