const express = require('express');
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const users = {};

io.on("connection", (socket) => {
    socket.on("send-location", (data) => {
        console.log("Emitting location from BE with id", socket.id);
        // Store the user's name
        users[socket.id] = data.userName;
        io.emit("recieve-location", { ...data, id: socket.id });
    });

    socket.on("disconnect", () => {
        io.emit("user-disconnect", socket.id);
        delete users[socket.id]; // Remove user from the list on disconnect
    });
});

app.get('/', (req, res) => {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
