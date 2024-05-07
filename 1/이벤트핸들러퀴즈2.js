//버튼을 클릭했을 때 콘솔에 출력되는 결과는?

const btn = document.querySelector('#btn');

function printBtn() {
    console.log(btn.outerHTML);
}

function printHi() {
    console.log('Hi!');
}

//onclick과 다르게 addEventListener는 마지막만 출력되는게 아니라 등록한만큼 출력된다.

btn.addEventListener('click', printBtn);
btn.removeEventListener('click', printHi);      //위에 addEventListener ... printHi 가 없으므로 쓸모없는 코드
btn.addEventListener('click', printHi);
btn.addEventListener('click', function () {
    console.log('click!');
});
btn.removeEventListener('click', function () {  //쓸모없는 코드
    console.log('click!');
});
//removeEventListener를 써서 삭제하는 방법
function printEvent() {
    console.log('event!');
}
btn.addEventListener('click', printEvent);
btn.removeEventListener('click', printEvent);

// 정답: <button id="btn">Click!</button>
// Hi!
// click!