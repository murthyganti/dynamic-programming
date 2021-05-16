/**
 * Write a function bestSum(targetSum,numbers) that takes in a targetSum and an array of numbers as arguments.
 * This function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
 * If there is a tie for the shortest combination, you may return any one of the shortest.
 * 
 * Tests
 * bestSum(7,[3,4,2,7]) => should return 7
 * bestSum(8,[3,2,5]) => no of ways to generate 8 [2,2,2,2]. [5,3] or [3,3,2] .. it should return [5,3]
 * 
 * Recursive way 
 * Time complexcity O()
 * Space complexcity O()
 */

const bestSum = (targetSum,numbers) => {
   if(targetSum === 0) return [] ;
   if(targetSum < 0) return null;

   let shortestCombination = null;
   // for .. in iterirates over indcies, for .. of over values.
   for (let num of numbers){
       const remainder = targetSum - num;
       const remainderCombination = bestSum(remainder,numbers);
       if(remainderCombination !== null){
            const combination = [...remainderCombination,num];
            // if combination is shorter than current shortest .. update it.
            if(shortestCombination === null ||  combination.length < shortestCombination.length){
                //update shortest combination
                shortestCombination = combination;
            }
       }
   }
   return shortestCombination;
}

// Tests
console.log(bestSum(7,[5,3,4,7])); // returns [7]
console.log(bestSum(8,[2,3,5]));  // [5,3]
console.log(bestSum(8,[1,4,5]));    // [4,4]
// Takes longer
//console.log(bestSum(100,[1,2,5,25])); //[25,25,25,25]