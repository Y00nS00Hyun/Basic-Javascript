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
function what() {
    console.log(arguments);
}

what('a', 'b', 'c');

// Rest Parameter -> 배열
function wow(...drink) {
    for (const name of drink) {
        console.log(name);
    }
}

wow('coke', 'fanta', 'saida', 'milkis');


//연습 3
function printFish(...fish) {
    for (const fishname of fish) {
        console.log(fishname);
    }
}
printFish('고등어', '갈치', '멸치');


//순위 매기기
function prize(a, b, ...c) {
    console.log(`1등: ${a}`);
    console.log(`2등: ${b}`);
    console.log(`그 외: ${c}`);
}

prize('참외', '포도', '복숭아', '메론', '체리');


//Arrow Function
const getx2 = (number) => {
    console.log(number * 2);
};

getx2(5);


// 콜백
// myBtn.addEventListener('click', () => {
//     console.log('Click~')
// })


//
const getx3 = number => console.log(number * 3);

getx3(5);


//
const sum = (a, b, c) => console.log(a + b + c);
sum(1, 2, 3);


//this -> 호출한 객체를 가리킴
const tree = {
    local: '우장산',
    treeName: '소나무',
    getFullTree: function () {
        return `${this.local} ${this.treeName}`
    },
};

console.log(tree.getFullTree());


//연습 3
const character = {
    characterName: 'Soohyun',
    ability: 'fly',
    age: '22',
    want: 'cute',
    function: function soohyunIntroduce() {
        return `${this.characterName} ${this.ability} ${this.age} ${this.want}`
    }
}

console.log(character.function());