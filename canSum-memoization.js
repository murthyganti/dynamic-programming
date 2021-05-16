// canSum memoization
// Write a function canSum(targetSum,arrayOfNumbers) tha takes in targetSm and an array of numbers as arguments.
// it returns boolean to indicate whether or not it is possible to generate targetSum from array of given numbers.

// You can use element as many times as you want.
// Assume all input numbers are non negative.

// canSum(7,[2,4]) => should return false.
// canSum(7,[3,4,0,7]) => should return true.

// recursive way

const canSum = (targetSum,arrayofNumbers) => {
    //base cases
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of arrayofNumbers){
        const remainder = targetSum - num;
        if(canSum(remainder,arrayofNumbers) === true){
            return true;
        }
    }
    return false;
}

// tests
console.log(canSum(3,[2,1,0,4]));
console.log(canSum(5,[2,1,0,4]));
console.log(canSum(7,[2,1,0,4]));
//console.log(canSum(7,[3,4,0,7]));
//console.log(canSum(7,[2,1,0]));
//console.log(canSum(300,[5,199,12,1,6]));