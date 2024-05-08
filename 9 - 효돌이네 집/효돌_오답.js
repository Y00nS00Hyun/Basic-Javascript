// showTitle 함수를 완성해 주세요
function showTitle(e) {
    if (e.target.classList.contains('data-title')) {
        if (e.target.classList.contains('title')) {         //data-title 값에 접근하려면 dataset.title을 사용해야함
            e.addEventListener('span');
            e.setAttribute('data-title');
            e.element.append
        }
    }
}
//엉망진창... 어디서부터 손 봐야할지 감이 잡히지 않는다

// removeTitle 함수를 완성해 주세요
function removeTitle(e) {
    if (e.target.dataset.title) {
        e.target.lastElementChild.remove();
    }
}

//으하하하! 나 혼자 풀었지롱

// '대상'과 '타입'을 수정해 주세요
대상.addEventListener('타입', showTitle);
대상.addEventListener('타입', removeTitle);