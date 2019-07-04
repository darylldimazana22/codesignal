function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let h = 0;
    
    for (var i = 0 ;; i++) {
        h += upSpeed;
        
        if (h >= desiredHeight)
            return ++i;
        
        h -= downSpeed;
    }
}
