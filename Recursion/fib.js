/**
 * 
 * Write a function fib that takes in a number n and returns nth number of fibonacci sequence.
 * fib(n)
 * First two numbers of fibonacci sequence are 1 & 1.
 * Next number can be calculated by taking sum of previous two.
 *  Test cases:
 * fib(1) => returns 1;
 * fib(2) => returns 1;
 * fib(3) => returns 2;
 * fib(7) => returns 13;
 * For very large n -- please refer to dynamic programming solution.
 * Time Complexity : O(2^n) ( every call to fib makes two recursive calls - for each n)
 * Space Complexity: O(n) -- number of stack frames used is max stack depth of n
 * This is an example of multi branch recurison -- recursive call leads to two recursive calls.
 * fib(n) = fib(n-1) + fib(n-2); -- you can think of it as binary tree.
 */


const fib = (n) => {
    // Base cases
    if(n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);
}

//tests
console.log(fib(1)); // returns 1
console.log(fib(2)); // returns 1
console.log(fib(8)); // returns 21
console.log(fib(12)); // returns 144

// for large n -- it may take long time. 
//console.log(fib(20))

