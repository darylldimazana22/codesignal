function alphabeticShift(inputString) {
    return [...inputString].map(x => 
            x == "z" ? "a" : String.fromCharCode(x.charCodeAt() + 1)).join("");
}
