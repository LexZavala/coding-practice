function alternatingSort(a){
    var result = [];

    var aIndex = 0;
    var bIndex = a.length -1;

    while (result.length <= a.length){
        result.push(a[aIndex]);
        result.push(a[bIndex]);
        aIndex += 1;
        bIndex -= 1;
    }
    console.log(result);
    console.log(a.sort((a, b) => a - b));
    if (!result === (a.sort((a, b) => a - b))){
        return false;
    } else {
        return true;
    }
}