function matrixElementsSum(mtx) {
    var sum = 0;
    
    for (var i = 0; i < mtx[0].length; i++) {
        for (var j = 0; j < mtx.length; j++) {
            if (mtx[j][i] == 0) {
                break;
            }
            
            sum += mtx[j][i];
        }
    }

    return sum;
}
