const rank = ["수현", "원빈", "윈터", "재석"];

// const car = rank[0];
// const notebook = rank[1];
// const dress = rank[2];
// const pencil = rank[3];

const [car, notebook, dress, pencil, water = "없음"] = rank; // =["수현", "원빈", "윈터", "재석"]

console.log(car);
console.log(notebook);
console.log(dress);
console.log(pencil);
console.log(water);
