const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, el, i) => {
  console.log(`${i}번 index 요소`);
  console.log("acc:", acc);
  console.log("el:", el);
  console.log("-----------------------");

  return acc + el;
}, 100); //acc의 초기값

console.log("sum:", sum);

//스햔

const minus = numbers.reduce((acc, el, i) => {
  console.log(i);
  console.log(acc);
  console.log(el);
  console.log("~~~~~~~~~~~~~");

  return acc - el;
}, 100);

console.log("minus", minus);
