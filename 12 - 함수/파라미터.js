function greeting(name = "Midol") {       //파라미터
    console.log(`Hello~ ${name}!`);
}

greeting(`Soohyun`);            //아규먼트
greeting();



function greeting2(name = "Midol", interest) {
    console.log(`Hello~ ${name}!`);
    console.log(`I like ${interest}~`);
}

greeting2(`Soohyun`);
greeting2(undefined, 'swim');



function test(x, y = x + 3) {
    console.log(`x 는 ${x}`);
    console.log(`y 는 ${y}`);
};

test(1);
test(1, 100);   // y = x + 3 은 무시




