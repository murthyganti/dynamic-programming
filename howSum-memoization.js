/**
 * Write a function howSum(targetSum,arrayOfNumbers) that takes in targetSum and array of non negative numbers as argumnetments.
 * The function should return an array containing any combination of elements that add up to exactly the targetSum.
 * If there is no combination that adds up to the targetSum, then return null.
 * If there are multiple combinations -- return any single one.
 * 
 * Tests
 * howSum(7,[5,3,4,7]) => should return  either[7] or [3,4]
 * howSum(8,[2,3,5]) => should return [2,2,2,2] or [3,5] or [2,3,3] etc
 * howSum(7,[2,4]) => should return null
 * howSum(0,[2,4,5]) => should return []
 */
/**
 * Recursive way - Brute force.
 *  m - targetSum, n - arrayofNumbers.length()
 * Time complexcity -- O(n^m *m) -- m times array copy operation.
 * Space complexcity -- O(m)
 * @param {*} targetSum 
 * @param {*} arrayOfnumbers 
 * @returns 
 */
const howSum = (targetSum,arrayOfnumbers) => {
   if(targetSum === 0) return [];
   if(targetSum < 0) return null;
   
   for(let num of arrayOfnumbers){
       const remainder = targetSum - num;
       const remainderResult  = howSum(remainder,arrayOfnumbers);
       if(remainderResult !== null){
           // return  all elements in remainderResultd  element on the edge here it is num
           // spread operator ... (if you are not famialr look up MDN JS reference)
           return [...remainderResult,num]
       }
   }
   // if we can't find any array are for loop
   return null;

};


// Tests
console.log(howSum(7,[5,3,4,7]));   // [7] or [3,4]
console.log(howSum(0,[2,4,5]));     // []
console.log(howSum(7,[2,4,5]))     //  [5,2]
console.log(howSum(7,[4,5]))      //  null
// console.log(howSum(199,[4,5])) // it takes forever

//Memoization
/**
 * m - targetSum, n - arrayofNumbers.length()
 * Time complexcity -- O(n*m*m) => O(n*m^2) -- m times array copy operation.
 * Space complexcity -- O(m*m) => O(m^2)
 * @param {*} targetSum 
 * @param {*} arrayOfnumbers 
 * @param {*} memo 
 * @returns 
 */
const howSumMemo = (targetSum,arrayOfnumbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    
    for(let num of arrayOfnumbers){
        const remainder = targetSum - num;
        const remainderResult  = howSumMemo(remainder,arrayOfnumbers,memo);
        if(remainderResult !== null){
            // return  all elements in remainderResultd  element on the edge here it is num
            // spread operator ... (if you are not famialr look up MDN JS reference)
            memo[targetSum] = [...remainderResult,num]; // max length of any returned array is m
            return memo[targetSum];
        }
    }
    // if we can't find any array are for loop
    memo[targetSum] = null
    return memo[targetSum];
 
 };

 // Tests
console.log(howSumMemo(7,[5,3,4,7]));   // [7] or [3,4]
console.log(howSumMemo(0,[2,4,5]));     // []
console.log(howSumMemo(7,[2,4,5]))     //  [5,2]
console.log(howSumMemo(7,[4,5]))      //  null
console.log(howSumMemo(199,[4,5]))  
