/**
 * gridTraveler memoization
 *Say that you are traveller on a 2D grid.you begin on top-left corner and your goal is to travel to bottom right corner.
 *you can only move down or right. Diagnonal moving not allowed
 *Count number of ways you can travel to the goal on a grid with dimensions( m*n)
 * Write a function gridTraveller(m,n) that does this.
 * Edge cases
 * gridTraveller(1,1) => 1 (one way to travel -start is same as end)
 * gridTraveller(m,0) => zero ways ( Invalid grid if one of dimensions is zero there is no grid, Zero colums one row)
 * gridTraveller(0,n) => zero ways
 * @param {*} m 
 * @param {*} n 
 * @returns 
 */

// Brute force recursive implementaion time complexity O(2**(m+n)) , space complexity is  O(n+m)
const gridTraveller = (m,n) => {
  // Base case (1,1) takes one way
  if(m ===1 && n === 1) return 1;
  // Either m or n is 0 is invalid grid -- takes 0 ways
  if(m === 0 || n === 0) return 0;
  // go down + go right 
  return gridTraveller(m-1,n)+gridTraveller(m,n-1)
};

// Tests
console.log(gridTraveller(1,1));
console.log(gridTraveller(1,0));
console.log(gridTraveller(0,1));
console.log(gridTraveller(4,5));
console.log(gridTraveller(6,7));
//console.log(gridTraveller(12,11));  // This is going to take forever.

/**
 * Above recursive implementation takes forever for larger grids.
 * Next step let's implement it by memoization.
 * also not number of ways to travel (m,n) grid and (n,m) grid are same -- number of rows and colums are switched
 * O(m*n) time complexcity and O(n+m) space complexcity.
 * @param {*} m 
 * @param {*} n 
 * @param {*} memo 
 * @returns 
 */
const gridTravellerMemo= (m,n,memo = {}) => {
    // key should be combination of m and n-- conact m & n with delimter.
    const key = m + "," + n;
    // are the arguments m , n in the memo.
    if(key in memo) return memo[key];
      // Base case (1,1) takes one way
    if(m ===1 && n === 1) return 1;
    // Either m or n is 0 is invalid grid -- takes 0 ways
    if(m === 0 || n === 0) return 0;
    // go down + go right 
    memo[key] = gridTravellerMemo(m-1,n,memo) + gridTravellerMemo(m,n-1, memo);
    return memo[key]
};


// Another test -- gridTravellerMemo(n,m) = gridTravellerMemo(m,n)
console.log(gridTravellerMemo(1,1));
console.log(gridTravellerMemo(0,1));
console.log(gridTravellerMemo(6,7));
console.log(gridTravellerMemo(10,12)); 







