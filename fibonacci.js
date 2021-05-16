
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
 
/* The above apporach is O(2**n) in time and space, it takes forever for large numbers.
* So let's use Memoization to speed up and make it 0(n) in space and time -https://en.wikipedia.org/wiki/Memoization
* Memoization -- store function call results.
* use JS object key will be arg to function, values will be return value.
*/

const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n]; // if n already exisits in memo return the value.
    if(n <=2 ) return 1; // firs and second fibonacci numbers are 1 & 1.
    memo[n] = fibMemo(n-1,memo)+fibMemo(n-2,memo);
    return memo[n];
};

console.log(fib(1));
console.log(fib(2));   
console.log(fib(16)); // 987
console.log(fib(40));  //102334155
console.log(fib(50)); // 

 