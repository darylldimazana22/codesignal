function arrayMaximalAdjacentDifference(inputArray) {
    inputArray = inputArray.slice(1).map((x, y) => Math.abs(x - inputArray[y]));
    return Math.max(...inputArray);
}
