// duplicate values in an array
const numbers = [2,3,6,7,2,5,2,9,1,2]

// const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));

// console.log(duplicates);


const set = new Set(numbers);

const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);