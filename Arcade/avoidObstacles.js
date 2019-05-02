function avoidObstacles(inputArray) {
    let n = 1;
    
    while (++n) {
        if (inputArray.every(x => x % n))
            return n;
    }
}
