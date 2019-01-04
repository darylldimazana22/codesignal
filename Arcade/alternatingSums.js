function alternatingSums(a) {
    let t = [0, 0];
    
    for (var i = 0; i < a.length; i++) {
        if (i & 1)
            t[1] += a[i];
        else
            t[0] += a[i];
    }
    
    return t;
}
