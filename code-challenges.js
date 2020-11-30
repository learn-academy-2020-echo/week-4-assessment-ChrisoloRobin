// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

console.log(shuffle(collections))



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// const sum = (arr) => {
//   //takes first 2 num of array (slice), reduces them which adds them together
//   let newArray = arr.map((value, index) => return math.cube(value).reduce((a, b) => a + b))
//   return newArray
// }
//
// console.log(sum(cubeAndSum1))



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//create function to filter array
const minMaxLoop = (arr) => {
//create empty array with max, min values
  let max = arr[0]
  let min =  arr[0]
  //loop through array evaluating values
  for (let i = 0; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i]
    } else {
      min = arr[i]
    }
  }
  let result = ([min, max])
  return result
}

console.log(minMaxLoop(nums1))
console.log(minMaxLoop(nums2))



//doesnt account for negative numbers. set the i value below zero still doesnt impact negative value nor does starting the empty array 



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


const uppercase = (string) => {
  var newString = "";
  for (i=0; i < string.length; i++) {
     newString += i % 2 !== 0 ? string.charAt(i).toUpperCase() : string.charAt(i);
  }
  return newString;
}

console.log(uppercase(testString1));
console.log(uppercase(testString2));



// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
