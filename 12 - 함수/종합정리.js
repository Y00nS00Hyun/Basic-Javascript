//함수선언
function sayHello() {
    console.log('Hello Soohyun~');
}

sayHello();


//함수 표현식 : 변수에 함수를 할당
const sayWhy = function () {
    console.log('Why???');
};

sayWhy();


//객체의 메소드
const Soohyun = {
    birth: function () {
        console.log('2003.11.14');
    }
}

Soohyun.birth();


//콜백 함수
// myBtn.addEventListener('click', function () {
//     console.log('Click!!!!!!!!!!!');
// })


//고차함수
function Apple() {
    return function () {
        console.log('고차함수');
    };
}

Apple()();  //Apple() 은 저 함수를 반환하기만 하는거고 실행하려면 Apple()() 이렇게 써야함


//연습
function Egg() {
    console.log('Egg');
}

function chicken() {
    return Egg();
}

chicken();


//파라미터의 기본값
function sayFruit(name = "Apple") {
    console.log(`Delicious ${name}`);
}

sayFruit('Grape');
sayFruit();


//arguments 객체 -> arugument 개수가 불규칙적일 때 사용
function printAruguments() {
    for (const student of arguments) {      //하나씩 출력
        console.log(student);
    }
}

printAruguments('Soohyun', 'Wonbin', 'Winter');


//연습 2
function whatArguments() {
    console.log('')
}