const soohyun = {
  name: "수현",
  birth: "20031114",
  mountain: "Ujang",
  school: "CAU",
  phone: "galaxy",
};

function student({ name, birth, phone }) {
  console.log(`이름: ${name}`);
  console.log(`생일: ${birth}`);
  console.log(`휴대폰: ${phone}`);
}

student(soohyun);
