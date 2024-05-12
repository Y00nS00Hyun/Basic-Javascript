//1. event 사용하기

event.target.classList.add('new-class');


//2. 특정 요소 참조하기

document.getElementById('myElement').classList.add('new-class');

const myElement = document.querySelector('.my-element');
myElement.classList.add('new-class');