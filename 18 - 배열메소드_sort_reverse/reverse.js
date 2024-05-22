//배열 순서 뒤집기

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 3, 4, 5]

numbers.reverse();

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + numbers[i]);
}
