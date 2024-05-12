// '대상'과 '타입'을 수정해 주세요

const map = document.querySelector('.map');
map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);

//부모 요소에 한 번에 이벤트 핸들러를 등록하여 버블링으로 자식들 전체를 관리 버블버블~
//가장 부모요소인 map을 선택z