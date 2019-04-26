function palindromeRearranging(inputString) {    
    let arr = inputString.split(""),
        obj = {},
        count = 0;
    
    arr.forEach(x => {
        if (obj.hasOwnProperty(x)) {
            obj[x]++; 
        } else {
            obj[x] = 1;
        }
    });

    return Object.values(obj).filter(x => x & 1).length < 2;
}
