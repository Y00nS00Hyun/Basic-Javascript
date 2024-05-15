const soohyun = {
    age: 22,
};

const soohyun2 = {
    ...soohyun,
};


console.log(soohyun);
console.log(soohyun2);


//


const latte = {
    coffee: '30ml',
    milk: '50ml'
}

const cafeMocha = {
    ...latte,
    choco: '20ml'
}

console.log(cafeMocha);