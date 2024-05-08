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

const keypress = document.querySelector('#send');

if (keypress.addEventListener('enter', sendMyText);) {
    keypress.textarea.remove(input);
}

keypress.addEventListener('shift' && 'enter', 줄바꿈);

keypress.addEventListener('enter', function (event) {
    event.preventDefault;
})