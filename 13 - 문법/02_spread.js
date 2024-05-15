const numbers = [100, 101, 102];
console.log(...numbers);

//

const fish = ['고등어', '연어'];
const animal = fish.slice();    //배열 복사
const animal2 = [...fish, '나비', '전갈'];

animal.push('치타');

console.log(fish);
console.log(animal);
console.log(animal2);