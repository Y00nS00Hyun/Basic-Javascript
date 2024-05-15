//표현식: 하나의 값이 되는 코드

const cutline = 80;

function testResult(score) {
    return score > cutline ? '합격' : '불합격';
}

console.log(testResult(75));
console.log(testResult(100));