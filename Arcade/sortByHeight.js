function sortByHeight(a) {
    let b = a.filter(a => a > 0).sort((a, b) => a - b);
    
    for (var i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = b.shift();
        }
    }
    
    return a;
}
