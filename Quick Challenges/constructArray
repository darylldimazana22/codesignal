function constructArray(size) {
    let s = size, arr = [];
    
    for (let i = 1; i <= size; i++, size--) {
        arr.push(i);
        arr.push(size);
    }
    
    if (s & 1)
        arr = arr.slice(0, --arr.length);
    
    return arr;
}
