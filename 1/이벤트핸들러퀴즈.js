//버튼을 클릭했을 떄 콘솔에 출력되는 결과는?

const btn = document.querySelector('#btn');

function printBtn() {
    console.log(btn.outerHTML);
}

btn.onclick = function () {
    console.log('click!');
};
btn.onclick = printBtn;
btn.removeEventListener('click', printBtn);

//버튼을 클릭했을 떄 콘솔에 출력되는 결과는?