function isIPv4Address(inputString) {
    let arr = inputString.split(".");
    return arr.length === 4 && arr.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256);
}
