//Find maximum value in an array

var array = [10,4,8,6,9,2,-12, 5, 15]

let max = array[0], min = array[0];
for (let i = 0; i < array.length; i++) {

    if (array[i] > max) { max = array[i]; }

    if (array[i] < min) { min = array[i]; }
}
console.log("max = " + max);
console.log("min = " + min);
