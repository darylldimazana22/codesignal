function rangeBitCount(a, b) {
    var arr = [];
    
    for (x = a; x <= b; x++)
        arr.push(x.toString(2));
    
    return (arr.join('').match(/1/g)).length;
}
