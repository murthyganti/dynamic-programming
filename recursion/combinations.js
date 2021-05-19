/**
 *  Combination is collection of items, where order among items doesn't matter.
 *  Here we determine all combinations  - Javascript Implementation Using Recursion
 *  example: array [a,b,c] => should return [],[a],[b],[c],[a,b],[a,c],[b,c],[a,b,c] , total 8 combintations.
 *  means if there n things in an array -- there are 2^n possible combinations.
 *  Time Complexity
 *  Space Complexity
 */


 
const combinations = (elements) => {
  // Base case
  if(elements.length === 0) return [ [] ];
  // Take the current element or not take current element. goal is to shrink the input array.
  const firstElement = elements[0];
  // In JS slice gives subarray removing element of index given.
  const restOfElements = elements.slice(1);
  const combintationsWithOutFirst = combinations(restOfElements);
  const combinationsWithFirst = [];

  combintationsWithOutFirst.forEach(combination => {
      // Create a copy of combintation and insert first element
      const combinationWithFirst = [...combination,firstElement]
      combinationsWithFirst.push(combinationWithFirst);
  })

  return[...combintationsWithOutFirst,...combinationsWithFirst];

}


// Tests
console.log(combinations(['a','b','c'])) // => returns 2D array of all possible combintations. [[],[a],[b],[c],[a,b],[a,c],[b,c],[a,b,c]]

console.log(combinations([])) // returns [[]]