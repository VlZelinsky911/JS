let username = null;

const userSection = document.getElementById('userSection');
const chatSection = document.getElementById('chat');
const usernameInput = document.getElementById('usernameInput');
const joinButton = document.getElementById('joinButton');
const messagesList = document.getElementById('messages');
const input = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const onlineStatus = document.getElementById('onlineStatus');

const socket = new WebSocket('ws://localhost:8080');

joinButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        socket.send(JSON.stringify({ type: 'join', username }));
        userSection.style.display = 'none';
        chatSection.style.display = 'block';
    } else {
        alert('Enter your name');
    }
});

socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);

    if (data.type === 'message') {
        const li = document.createElement('li');
        li.textContent = `${data.username}: ${data.message}`;
        messagesList.appendChild(li);
    } else if (data.type === 'status') {
        onlineStatus.textContent = data.message;
    }
});

sendButton.addEventListener('click', () => {
    const message = input.value.trim();
    if (message) {
        socket.send(JSON.stringify({ type: 'message', username, message }));
        input.value = '';
    }
});

socket.addEventListener('open', () => {
    onlineStatus.textContent = 'Connected to the server.';
});

socket.addEventListener('close', () => {
    onlineStatus.textContent = 'The connection is closed.';
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
    onlineStatus.textContent = 'An error occurred.';
});
