//배열 순서 뒤집기

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
