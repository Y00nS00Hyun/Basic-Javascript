//버블링을 막는 메소드를 올바르게 작성한 이벤트 핸들러를 고르랅

1
function someHander(event) {
    event.stopPropagation();
}                               // 정~~~~~~~~~~~~~~~~~~~~~~~~답


2
function someHander(event) {
    document.stopPropagation(event);
}


3
function someHander(event) {
    document.stopEventBubbling(event);
}


4
function someHander(event) {
    event.stopEventBubbling();
}


5
function someHander() {
    document.stopEventBubbling();
}