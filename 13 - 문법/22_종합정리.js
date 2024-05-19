//조건부 연산자
const cutoff = 80;
const passcheck = (score) => (score > cutoff ? "합격" : "불합격");
console.log(passcheck(100));

//spread
const fruit = ["apple", "lemon"];
const ingredient = [...fruit, "고등어", "삼치"];
console.log(ingredient);

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(c);

//모던한 프로퍼티 표기법
function soohyun() {
  console.log("hi i'm soohyun");
}
const name = "yoon";
const birth = 2003;

const user = {
  soohyun,
  name,
  birth,
};

console.log(user);
user.soohyun();

//구조 분해 Destructing
const members = ["수현", "수림", "미돌", "윈터", "카리나", "밍밍", "지젤"];
const [천재, 바보, 귀요미, ...에스파] = members;

console.log(바보);
console.log(에스파);

//2
const 천재님 = {
  title: "수현",
  birthday: 20031114,
};

const { title, birthday } = 천재님;
console.log(title);

//에러
try {
  throw new TypeError("에러 발생");
} catch (error) {
  console.log("에러 발생했지만 안 한 척");
} finally {
  console.log("종합 정리 끝~!");
}
