const getTwice = function (n) {
    return n * 2;
}

const getTwice2 = n => {
    return n * 2;
}

const getTwice3 = n => n * 2;


console.log(getTwice(6));




const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', () => {
    console.log('button is clicked!');
});