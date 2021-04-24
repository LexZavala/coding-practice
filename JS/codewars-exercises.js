
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

// function that takes in an array of numbers and converts it into a number format (xxx) xxx -xxxx
function createPhoneNumber(phoneNumber){
    phoneNumber= phoneNumber.join('');
    return '(' + phoneNumber.substring(0,3) + ') '
        + phoneNumber.substring(3, 6)
        + '-'
        + phoneNumber.substring(6);
}

function isPangram(string){
    string = string.split("");
    var arr = [string]
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var capAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var pun = "."
    for (var i = 0; i < arr.length; i++){
        if (arr.includes(alphabet) || arr.includes(capAlphabet) || arr.includes(pun)){
            return true;
        } else {
            return false;
        }
    }
}

