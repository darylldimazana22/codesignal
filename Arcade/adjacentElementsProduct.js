function adjacentElementsProduct(inputArray) {
    let prod = inputArray[0] * inputArray[1];
    
    for (let i = 1; i < inputArray.length - 1; i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
    }
    
    return prod;
}
