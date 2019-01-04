function addBorder(p) {
    let o = "*".repeat(p[0].length + 2),
        m = p.map(x => `*${x}*`);
    
    return [o, ...m, o];
}
