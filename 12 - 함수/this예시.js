//1

function printThisTitle() {
    console.log(this.title);
}

const courseA = {
    title: '프로그래밍 기초 in JavaScript',
    printTitle: printThisTitle,
};

const courseB = {
    title: '컴퓨터 개론',
    printTitle: courseA.printTitle,     // = printThisTitle
};

const courseC = {
    title: '웹 퍼블리싱',
    printTitle: courseB.printTitle,     // = printThisTitle
};

courseA.printTitle();
courseB.printTitle();
courseC.printTitle();

//  결과:
//  프로그래밍 기초 in JavaScript
//  컴퓨터 개론
//  웹 퍼블리싱



//2

const getFullName = () => `${this.firstName} ${this.lastName}`;
// Arrow Function에서 this는 일반함수와 다르게 함수가 호출될 때 호출한 객체를 가리키지 않음
//this는 window 객체를 가리킨다 -> undefined undefined 출력됨
//일반 함수를 사용하라

const user = {
    firstName: 'Ted',
    lastName: 'Chang',
    getFullName: getFullName,
};

console.log(user.getFullName());

