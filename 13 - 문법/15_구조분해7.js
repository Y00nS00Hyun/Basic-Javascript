const numbers = [5, undefined, null, 3, 1, 7, 0];
const [a, b = 4, c = 2, ...d] = numbers;

console.log(a); //5
console.log(b); // undefined -> 기본값인 b=4로 대체 ->4
console.log(c); //null -> 기본값으로 대체되지않음 -> null
console.log(d[2]); //7
console.log(d[4]); //undefined
