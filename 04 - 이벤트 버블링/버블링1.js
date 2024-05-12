//자바스크립트 공부하기를 클릭했을 때 콘솔에 출력되는 결과

const main = document.querySelector('#main');
const toDoList = main.lastElementChild;

function printCurrentTarget(event) {
    console.log(event.currentTarget);     //이벤트 핸들러 > currentTarget 프로퍼티를 콘솔에 출력
}

main.addEventListener('click', printCurrentTarget);       //main에 이벤트 핸들러 등록 (main이 버블링된걸 콘솔 창에 출력하라는 의미)

for (let child of toDoList.children) {                    //각각의 li에 이벤트 핸들러 등록 (li를 누르면 버블링 시작하고, 콘솔창에 출력하라는 의미)
    child.addEventListener('click', printCurrentTarget);
}

//ul도 버블링 되고, body도 버블링 됐지만 출력하라고 써놓지 않아서 출력이 안되는거지 버블링은 했음

/*정답: <li class="item">자바스크립트 공부하기</li>
 <div id="main">...</div> */

