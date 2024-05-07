//자바스크립트 공부하기를 클릭했을 때 콘솔에 출력되는 결과

const main = document.querySelector('#main');
const toDoList = main.lastElementChild;

function printCurrentTarget(event) {
    console.log(event.currentTarget);     //이벤트 핸들러 > currentTarget 프로퍼티를 콘솔에 출력
}

main.addEventListener('click', printCurrentTarget);       //main에 이벤트 핸들러 등록 (main까지 버블링돼서 실행됨)

for (let child of toDoList.children) {                    //각각의 li에 이벤트 핸들러 등록
    child.addEventListener('click', printCurrentTarget);
}



