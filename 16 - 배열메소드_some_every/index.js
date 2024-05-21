const number = [1, 2, 3, 4, 5, 6, 7];

const somenumber = number.some(function (p) {
  return p > 5;
}); //하나라도 5보다 크면 true 리턴

const everynumber = number.every(function (p) {
  return p > 5;
}); //전부 5보다 크면 true 리턴

console.log(somenumber);
console.log(everynumber);
