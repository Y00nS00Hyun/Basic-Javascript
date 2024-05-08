// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');


link.addEventListener('click', function (event) {
    event.preventDefault();
    alert('해당 링크는 들어갈 수 없습니다.');
});


input.addEventListener('keydown', function (event) {
    if (!checkbox.checked) {
        event.preventDefault();
        alert('체크박스를 먼저 체크하고 입력하시죠?');
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('마우스 우클릭은 허용되지 않습니다.')
})