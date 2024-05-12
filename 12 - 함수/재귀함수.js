//익명 함수

const printLemon = function () {
    console.log('lemon🍋');
}

printLemon();

//이름 있는 함수

const printGrape = function grape() {
    console.log('Grape🍇');
}

printGrape();
console.log(printGrape.name); //printGrape라는 변수에 담겨있는 함수의 이름




//주로 재귀함수에 사용

let countdown = function printCountdown() {
    console.log('n');
    if (n === 0) {
        console.log('End!');
    }
    else {
        printCountdown(n - 1);
    }
};

let myFunction = countdown;

countdown = null;

myFunction(5);

//countdown이 null로 값이 바껴도 myFunction은 에러가 뜨지 않음