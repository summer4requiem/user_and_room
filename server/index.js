const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 5000;
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(router);

io.on("connection", (socket) => {
  console.log("have new connection");
  socket.on("disconnect", () => {
    console.log("someone had left");
  });
});

server.listen(PORT, () => `Server has starter on port${PORT}`);
