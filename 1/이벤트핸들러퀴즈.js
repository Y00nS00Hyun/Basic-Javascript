//버튼을 클릭했을 때 콘솔에 출력되는 결과는?

const btn = document.querySelector('#btn');
function printBtn() {
    console.log(btn.outerHTML);
}

btn.onclick = function () {     //onclick1 - onclick2에 의해 덮어씌워짐
    console.log('click!');
};
btn.onclick = printBtn;         //onclick2 - onclick1을 덮어씀
btn.removeEventListener('click', printBtn);        //addEventListener가 없으므로 아무 의미 없는 코드

//정답: <button id="btn">Click!</button>