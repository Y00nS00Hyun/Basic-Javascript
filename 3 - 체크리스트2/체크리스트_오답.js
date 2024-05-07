const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
    item.classList.toggle('done');
}

//event.target.속성.뭘할건지('~');

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요
btn.addEventListener('click', updateToDo);

//버튼이 아니라 item으로 해줘야 하고 for문을 사용하여 반복문으로 한 번에 처리할 수 있음
//items[i].addEventListener('click', updateToDo);
//무엇을.추가한다.('뭘 받으면', ~ );

// 테스트 코드
items[3].removeEventListener('click', updateToDo);
