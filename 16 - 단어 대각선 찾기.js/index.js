const quiz = ["YUMMY", "COUNT", "ABUSE", "SOUND", "SWING"];

const answer = quiz.map(function (a, i) {
  return a[i]; //a -> 이미 저기 단어 하나
});

console.log(answer);

//수현 공작소
const answer2 = quiz.map((a, i) => a[i]);
console.log(answer2);
