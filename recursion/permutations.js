/**
 * Permutation is a collection of things wher order matters.
 * Example: For array [a,b,c] ,permutations are [a,b,c],[a,c,b],[c,a,b],[c,b,a],[b,a,c],[b,c,a]
 * So given set of n things, there are n! (n factorial) permutations.
 * Time Complexity: O()
 * Space Complexity: O()
 * Takes input array and returns 2D array with each possible permutation array as element.
 */


const permutations = (elements) => {
    //Base case -- empty array.
    if(elements.length === 0) return [ [] ];
    const firstElement = elements[0];
    // slice returns copy of an array removing the element at the index given.
    const restOfElements = elements.slice(1);
    const permutationsWithOutFirst = permutations(restOfElements);
    const allPerumtations = [];
    // Now insert firstElement at all possible postions in permutationsWithOutFirst 
    permutationsWithOutFirst.forEach(permutation => {
        for(let i=0; i<= permutation.length; i++) {
            // slice(i) , if we don't give second arg it returns array all the way to the end.
            const permutationWithFirst = [...permutation.slice(0,i),firstElement,...permutation.slice(i)];
            allPerumtations.push(permutationWithFirst)
        }

    });

  return allPerumtations;

};

//Tests
console.log(permutations(['a','b','c'])); // returns 2D array [['a','b','c'],['a','c','b'],['c','a','b'],['c','b','a'],['b','a','c'],['b','c','a']]
console.log(permutations([])); // returns [ [] ]