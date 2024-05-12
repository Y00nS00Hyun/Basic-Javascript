//호이스팅: 선언문이 위쪽으로 끌어 올려지는 현상

//호이스팅 불가 -> 함수 표현식

const printLemon = function () {
    console.log('lemon🍋');     //emoji: window + .
}

printLemon();


//호이스팅 가능 -> 함수 선언문

printGrape();

function printGrape() {
    console.log('grape🍇');
}

