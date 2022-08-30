
//The array with the originals elements to create the pairs 
var arrayElements = [

];


const pairsOfArray = array => (
  array.reduce((acc, val, i1) => [
    ...acc,
    ...new Array(array.length - 1 - i1).fill(0)
      .map((v, i2) => ([array[i1], array[i1 + 1 + i2]]))
  ], [])
) 

//The new array with all the pairs.
var pairsArray = pairsOfArray(jsPsych.randomization.shuffle(arrayElements));

console.log(pairsArray)