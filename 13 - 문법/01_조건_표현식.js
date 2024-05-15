//표현식: 하나의 값이 되는 코드

const cutline = 80;

function testResult(score) {
    return score > cutline ? '합격' : '불합격';
}

console.log(testResult(75));
console.log(testResult(100));



//if 문
let x = 4;

let msg = '';

if (x > 3) {
    msg = 'x는 3보다 크다.';
} else {
    msg = 'x는 3보다 크지 않다.';
}

//

let msg2 = '';

x > 3 ? msg2 = '3 보다 큼' : msg2 = '안 큼';

//

let msg3 = x > 3 ? '3보다 큼~' : '아님';

console.log(msg, msg2, msg3);