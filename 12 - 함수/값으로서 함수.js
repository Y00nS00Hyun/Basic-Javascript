//함수 안에 함수를 값으로 선언

function getPrintHi() {
    return function () {
        console.log('Hi~');
    };
};

const sayHi = getPrintHi();

sayHi();