const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
    const newMessage = input.value;
    if (newMessage) {
        const div = document.createElement('div');
        div.classList.add('bubble', 'my-bubble');
        div.innerText = newMessage;
        chatBox.append(div);
    } else {
        alert('메시지를 입력하세요...');
    }
    input.value = '';
}
send.addEventListener('click', sendMyText);

//enter 키를 치면 전송되게 함
//enter 키의 기본 속성을 event.preventDefault()로 막기
//근데 enter && shift > 줄바꿈 속성

function Apple(event) {
    if (event.key === 'enter' && !event.shiftKey) {
        sendMyText();
        event.preventDafault();
    }
}

input.addEventListener('keypress', Apple);