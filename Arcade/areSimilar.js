function areSimilar(a, b) {
    let s = [];
    
    for (let x = 0; x < a.length; x++) {
        if (a[x] != b[x]) s.push(x);
    }
    
    return s.length == 0 || s.length == 2 && a[s[0]] == b[s[1]] && b[s[0]] == a[s[1]];

}
