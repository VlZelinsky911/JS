const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

const clients = new Map();

server.on("connection", (socket) => {
  console.log("New client connected.");

  socket.on("message", (data) => {
    const messageData = JSON.parse(data);

    if (messageData.type === "join") {
      clients.set(socket, messageData.username);
      console.log(`${messageData.username} joined the chat.`);
      broadcast({
        type: "status",
        message: `${messageData.username} joined the chat.`,
      });
    } else if (messageData.type === "message") {
      const username = clients.get(socket) || "Anonym";
      broadcast({ type: "message", username, message: messageData.message });
    }
  });

  socket.on("close", () => {
    const username = clients.get(socket);
    clients.delete(socket);
    console.log(`${username} turned off.`);
    broadcast({ type: "status", message: `${username || "User"} turned off.` });
  });
});

function broadcast(data) {
  const message = JSON.stringify(data);
  clients.forEach((_, client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

console.log("WebSocket server running on ws://localhost:8080");
