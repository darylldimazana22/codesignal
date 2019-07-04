function chessBoardCellColor(cell1, cell2) {
    let a = "ABCDEFGH";
    return (a.indexOf(cell1[0]) + +cell1[1]) % 2 == (a.indexOf(cell2[0]) + +cell2[1]) % 2;
}
