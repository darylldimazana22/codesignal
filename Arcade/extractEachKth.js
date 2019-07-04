function extractEachKth(inputArray, k) {
    return inputArray.filter((x, y) => (y + 1) % k);
}
