function absoluteValuesSumMinimization(a) {
    let tmp = 0, min = 0;
    
    for (let i = 0; i < a.length; i++) {
        let sum = a.reduce((x, y) => x + Math.abs(y - a[i]), 0);
        
        if (tmp < 1 || sum < tmp) {
            tmp = sum;
            min = a[i];
        }
    }
    
    return min;
}

// a[Math.ceil(a.length/2)-1];
