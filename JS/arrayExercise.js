let nums = [1,2,2,3,4,4];

var removeDuplicates = function(nums) {
    var newArr = [...new Set(nums)];
    var length = newArr.length;

    while (newArr.length !== nums.length){
        newArr.push("_");
    }

    console.log(newArr)
};