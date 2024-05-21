//조건에 따라서 배열의 요소를 추려냄

const soohyun = [
  { name: 1, ab: "a" },
  { name: 2, ab: "b" },
  { name: 3, ab: "b" },
  { name: 4, ab: "a" },
  { name: 5, ab: "a" },
  { name: 6, ab: "b" },
  { name: 7, ab: "a" },
  { name: 8, ab: "b" },
];

const filter_soohyun = soohyun.filter(function (f) {
  //f라는 배열 생성
  return f.ab == "a";
});

console.log(filter_soohyun);

const find_soohyun = soohyun.find(function (f) {
  return (f.name = 5);
});

console.log(find_soohyun);
