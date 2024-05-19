const soohyun = {
  name: "수현",
  birth: "20031114",
  mountain: "Ujang",
  school: "CAU",
  phone: "galaxy",
};

// const name = soohyun.name;
// const mountain = soohyun.mountain;
const { name: 성함, mountain, ...others } = soohyun; // " "사용 X

console.log(성함);
console.log(others);
