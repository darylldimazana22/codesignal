function phoneCall(min1, min2_10, min11, s) {
    var min = 0,
        rate = min1;
    
    while (s > 0) {
        min++;
        
        if (min == 2)
            rate = min2_10;
        
        if (min == 11)
            rate = min11;
        
        s -= rate;
        
        if (s < 0)
            min--;
    }
    
    return min;
}
