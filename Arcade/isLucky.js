function isLucky(n) {
    const add = (a, b) => a + b;
    let a = [];
    
    while (n > 0) {
        a.push(n % 10);
        n = n / 10 | 0;
    }
    
    let l = a.length / 2;
    
    return a.slice(0, l).reduce(add) == a.slice(l).reduce(add);
}
