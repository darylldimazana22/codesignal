function allLongestStrings(arr) {
    arr.sort((a, b) => b.length > a.length);
    return arr.filter(x => arr[0].length == x.length);
}
