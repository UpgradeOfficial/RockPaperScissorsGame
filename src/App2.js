import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, SetMessage] = useState("");
  const [room, SetRoom] = useState("");
  const [messageReceived, SetMessageRecieved] = useState("");

  const sendMessage = () => {
    socket.emit("send-message", {
      message, room
    });
  };
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join-room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("this is the message: ", data.message);
      SetMessageRecieved(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Room"
        onChange={(e) => {
          SetRoom(e.target.value);
        }}
      />
      <button onClick={() => joinRoom()}>Join Room</button>
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => {
          SetMessage(e.target.value);
        }}
      />

      <button onClick={() => sendMessage()}>Send Message</button>
      <h1>Message: </h1>
      {messageReceived}
    </div>
  );
}

export default App;
