const members = ["수현", "수림", "미돌", "파이"];
const lastname = ["윤", "윤", "김", "호두", "애플"];

//for(let A of B)와 비슷함

members.forEach(function (members, i) {
  console.log(`${lastname[i]}${members}입니다`);
});

members.forEach(function (members, i) {
  console.log(`${lastname[lastname.length - i - 1]}${members}입니다`);
});

//map: 호출 결과로 새로운 배열을 리턴
members.map((members, i) => {
  console.log(`${lastname[i]}${members}입니다`);
});

const instruction2 = members.map((members, i) => lastname[i + 1] + members); //return까지 없애야함
console.log(instruction2);

//연습
const A = [1, 2, 3, 4];
const B = ["a", "b", "c", "d"];

A.forEach(function (A, i) {
  console.log(`${A}의 친구 ${B[i]}`);
});

const b = B.map(function (B) {
  return B + B;
});

console.log(b);
