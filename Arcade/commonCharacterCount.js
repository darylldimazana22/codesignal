function commonCharacterCount(s1, s2) {
    var c = 0;
    
    for (var i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) > -1) {
            s2 = s2.replace(s1[i], "");
            c++;
        }
    }
    
    return c;
}
