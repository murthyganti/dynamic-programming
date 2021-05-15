
/*
 * https://en.wikipedia.org/wiki/Fibonacci_number
 * calculate 40th number of fibonacci sequence.
 * first solve it by recursion.
 */


const fib = (n) => {
    if(n <= 2 ) return 1; 
    return fib(n-1) + fib(n-2);
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(6));
console.log(fib(8));
 
// The above apporach is O(2**n) in time and space, it takes forever for large numbers.
// So let's use memoization to speed up and make it 0(n) in space and time -https://en.wikipedia.org/wiki/Memoization



 