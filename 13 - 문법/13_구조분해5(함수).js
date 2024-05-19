const student = ["수현", "커비", "마리오", "둘리", "킹부끄"];

function rank([one, two, three, ...참가상]) {
  console.log(`1등은 ${one}입니다`);
  console.log(`2등은 ${two}입니다`);
  console.log(`3등은 ${three}입니다`);
  console.log(`그 외는`);

  for (let A of 참가상) {
    console.log(`${A}님`);
  }
}

rank(student);
