//forEach -> 배열의 요소를 하나씩 살펴보면서 반복 작업함
const soohyun = ["y", "s", "h"];
soohyun.forEach((element, index, array) => {
  console.log(element, index);
});

//map -> 위와 비슷하지만 리턴값으로 새로운 배열을 만듦
const numbers = [1, 2, 3];
const numbers_twice = numbers.map((element, index, array) => {
  return element * 2;
});
console.log(numbers_twice);

//filter -> 조건에 따라서 요소를 모아 새로운 배열을 만듦
const devices = [
  { name: "GalaxyNote", brand: "Samsung" },
  { name: "MacbookPro", brand: "Apple" },
  { name: "Gram", brand: "LG" },
  { name: "SurfacePro", brand: "Microsoft" },
  { name: "ZenBook", brand: "Asus" },
  { name: "MacbookAir", brand: "Apple" },
];
const apple_device = devices.filter((element, index, array) => {
  return element.brand == "Apple";
});
console.log(apple_device);

//find -> 위와 비슷하지만 1개만 찾음
const find_gram = devices.find((element, indexe, array) => {
  return element.name == "Gram";
});
console.log(find_gram);

//some -> 조건을 만족하는 요소가 하나라도 있는지 검사
const numbers2 = [1, 3, 5, 7, 9, 11];
const someReturns = numbers2.some((element, index, array) => {
  console.log(index); //0, 1, 2, 3 출력 -> 3을 출력하고 7이 조건을 만족하므로 더 이상 출력을 멈춤
  return element > 6;
});
console.log(someReturns);

//every -> 전부 조건을 만족하는지 검사
const everyReturns = numbers2.every((element, index, array) => {
  return element < 20;
});
console.log(everyReturns);

//reduce -> 누적값 계산
const numbers3 = [1, 2, 3, 4];
const sumAll = numbers3.reduce((accumlator, element, index, array) => {
  return accumlator + element;
}, 0); //accumlator의 초기값
console.log(sumAll);

//sort -> 배열 정렬하기
const letters = ["S", "O", "H", "Y", "U", "N"];
const numbers4 = [2003, 11, 14, 4, 30];

letters.sort();
numbers4.sort();

console.log(letters);
console.log(numbers4);

// 오름차순 정렬
numbers4.sort((a, b) => a - b);
console.log(numbers4);

// 내림차순 정렬
numbers4.sort((a, b) => b - a);
console.log(numbers4);

//reverse -> 배열의 순서를 뒤집음
letters.reverse();
console.log(letters);

//Map -> 객체와 비슷
const angel = new Map();
angel.set("angel_name", "수현");
angel.set("angel_birth", 2003);

console.log(angel.get("angel_name")); //수현
console.log(angel.get("angel_age")); //undefined

console.log(angel.has("angel_name")); //true
console.log(angel.has("angel_age")); //false

console.log(angel.size); //2

angel.delete("angel_birth");
console.log(angel.get("angel_birth")); //undefined

angel.clear();

//Set -> 배열과 비슷
const fruitbucket = new Set();
fruitbucket.add("peach");
fruitbucket.add("cherry");
fruitbucket.add("banana");

console.log(fruitbucket.has("cherry")); // true

fruitbucket.delete("banana");
console.log(fruitbucket.size); // 2

//index를 통해 개개 요소에 접근 불가능
//중복 허용 X

const numbers5 = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers5);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
