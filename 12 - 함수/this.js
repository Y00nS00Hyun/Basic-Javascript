//arrow function보다는 일반 함수에 권장됨

//기본

const username = {
    firstname: 'Yoon',
    lastname: 'soohyun',
    getFullName: function () {
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(username.getFullName());




//응용

function animal() {
    return `${this.head} ${this.tail}`;
}

const rabit = {
    head: 'Yoon',
    tail: 'soorim',
    function: animal,
};

const pig = {
    head: 'Kim',
    tail: 'midol',
    function: animal,
    //animal()이 아닌 이유:
    //함수를 객체의 메소드로서 바로 호출하려면 해당 객체가 완전히 정의된 후에 호출해야함
    //function이 밖에 있으면 바로 호출은 못하는듯??? ...-_-
};

console.log(rabit.function());
console.log(pig.function());



//객체 출력하기

function printAlphabet() {
    console.log(this);  //this 를 출력하면 객체가 출력됨
    console.log(`${this.content}`);
}

const A = {
    content: 'a',
    printA: printAlphabet,
}

const B = {
    content: 'b',
    printB: printAlphabet,
}

A.printA();
B.printB();