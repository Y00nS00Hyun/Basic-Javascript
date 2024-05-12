
// showTitle 함수가 호출되면 가장 먼저 조건문을 통해 이벤트 객체의 target 프로퍼티에 담긴 요소에 data-title 속성의 값을 가지고 있는지 확인합니다.
// 조건문이 true일 경우 span 태그 형태의 요소 노드를 생성합니다.
// 이 요소 노드는 'title'이라는 class 값을 가지게 해주세요요.
// 이 요소 노드의 내부에 target 프로퍼티에 담긴 요소의 data-title 속성에 담긴 값을 할당해 주세요.
// 이 요소 노드를 target 프로퍼티에 담긴 요소의 마지막 자식 요소 노드로 추가해 주세요.


function showTitle(e) {
    if (e.target.dataset.title('data-title')) {
        if (e.target.dataset.title) {
            const newspan = document.createElement('span');
            newspan.classlist.add('title');
            newspan.textContent = newspan.target.dataset.title;
            e.target.append(newspan);
        }
    }
}


