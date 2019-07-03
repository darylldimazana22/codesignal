function minesweeper(matrix) {
    let getVal = function(y, x) {
        if (y < 0 || y >= matrix.length ||
            x < 0 || x >= matrix[0].length)
            return false;
        else
            return matrix[y][x];
    }
    
    let sumVals = function(y, x) {
        let sum = 0;
        
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx == 0 && dy == 0) continue;
                if (getVal(y + dy, x + dx)) sum++;
            }
        }
        
        return sum;
    }
    
    let ans = [];
    
    for (let i = 0; i < matrix.length; i++) {
        let ln = [];
        for (let j = 0; j <matrix[i].length; j++) {
            ln.push(sumVals(i, j));
        }
        ans.push(ln);
    }
    
    return ans;
}
