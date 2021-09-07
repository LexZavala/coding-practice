
// public void swapStrings(String [ ] a, String [ ] b)
// The output should make it so array a contains the strings of b, and vice vers

let a = ["a", "b", "c"];
let b = ["d", "e", "f"];

function swapStrings( a, b){

    for (var i = 0; i < a.length; i++){
        b.push(a[i]);
        console.log(b);
    }
    b.splice(0,2);
    console.log(b);
}

swapStrings(a,b);

// correct solution
function swapStrings(a, b) {
    for(var i = 0; i < a.length; i++) {
        const tempString = a[i];
        a[i] = b[i];
        b[i] = tempString;
    }
}