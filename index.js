// 1. Sum of Minimums! - 7kyu
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
// For Example:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the operation should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
// Note: You will always be given a non-empty list containing positive values.

let arr1 = [[1,2,3,4,5],[4,6,7,8,9],[20,21,34,56,100]]

function sumMin (array){
    for(let i = 0; i < array.length; i++){
    let result = array[i][0]
    console.log(result);
    }
}
sumMin(arr1);

// 2. Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
// First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divided(array, input) {

    for (let i = 0; i < array.length; i++){
        let hasil = array.filter((item)=> item % input === 0)
        return hasil 
    } 
}

let arr2 = [1,2,3,4,5,6]
console.log(divided(arr2,2));

3. 
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenOut(array,num) {
    for (let i = 0; i < array.length; i++){
        let hasilGenap = array.filter((item)=> item % 2 === 0)
        return hasilGenap.slice(hasilGenap.length-num)
    } 
    }
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(evenOut(arr3,3));