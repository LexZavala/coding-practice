
// function that returns all numbers of a string masked with '#' except the last 4 digits. If it is shorter than 4 digits, just return original string. (PASSED)
function maskify(cc) {
    var maskedString = ""
    var length = cc.length;
    var maskedLength = (cc.length) - 4;
    var onlyLast4 = cc.slice(maskedLength);
    for (var i = 0;  i < maskedLength; i++){
        maskedString += "#";}
    if (length < 4){
        return cc;
    } else {
        return maskedString + onlyLast4;
    }
}


