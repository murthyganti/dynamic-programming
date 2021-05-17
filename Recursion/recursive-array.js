/**
 * Explore recusive array
 */

/**
 * Problem 1
 * Write a function Sum(numbers) , that takes array of numbers as input.
 * It should return total sum of all the numbers and It must be recursive.
 * 
 * Base case:
 * Tests:
 * test 1: sum([6,3,1]) => should return 10.
 * test 2: sum([]) => should return 0.
 * test 3: sum([1,10,2,-2]) => should return 11.
 * test 4: sum([1]) => should return 1.
 * sum([a,b,c,d]) = a + sum(]b,c,d]) and so on.. 
 * Time Complexity: assum n is length of array -- here we make n recursive calls O(n) &  additonal work in each recursive call is array.slice (another O(n)) is costing us another n calls
 * so it is O(n*n) => O(n^2) , polynomial in time.
 * Space Complexity: O(n)
 */

const sum = (arrayOfNumbers) => {
    //Base case
    if(arrayOfNumbers.length === 0) return 0;
    // slice her takes first element out and returns rest of the array
    const rest = arrayOfNumbers.slice(1)
    return arrayOfNumbers[0]+ sum(rest);
};

console.log(sum([6,3,1]));
console.log(sum([]));
console.log(sum([1,10,2,-2]));

/** 
 * To make it faster, let's desgin another solution.  let's write helper function. _sumFaster
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * */ 

const sumFaster = (arrayOfNumbers) => {
    return _sumFaster(arrayOfNumbers,0);
};

const _sumFaster = (arrayOfNumbers, index) => {
    //Base case
    if(index === arrayOfNumbers.length) return 0;
    return arrayOfNumbers[index] + _sumFaster(arrayOfNumbers,index+1);
};

console.log(sumFaster([6,3,1]));
console.log(sumFaster([]));
console.log(sumFaster([1,10,2,-2]));



