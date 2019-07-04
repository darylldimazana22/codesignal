function evenDigitsOnly(n) {
    return ![...n + ""].filter(x => x & 1).length;
}
