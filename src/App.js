import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";

const allowedBackendHost = process.env.REACT_APP_ALLOWED_BACKEND_HOST;

const socket = io.connect(allowedBackendHost);
function App() {
  const handleGameClick = (e) => {
    e.stopPropagation();
    const value = e.target.getAttribute("data-game-value");
    socket.emit("send-message", {
      value,
    });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("this is the message: ", data);
    });
    socket.on("receive_error", (data) => {
      alert(`Error message: ${data.message}`);
    });
  }, [socket]);

  return (
    <div className="App">
      <div className="main">
        <div className="score-board">
          <div className="score-board-game-option">
            <h3>ROCK</h3>
            <h3>PAPER</h3>
            <h3>SCISSORS</h3>
          </div>
          <div className="score">
            <h3>SCORE</h3>
            <h1>11</h1>
          </div>
        </div>
        <div className="game-options">
          <div
            onClick={(e) => handleGameClick(e)}
            className="paper"
            id="paper"
            data-game-value="paper"
          >
            <img src={paper} alt="paper-img" data-game-value="paper" />
          </div>
          <div
            onClick={(e) => handleGameClick(e)}
            className="scissors"
            id="scissors"
            data-game-value="scissors"
          >
            <img src={scissors} alt="scissors-img" data-game-value="scissors" />
          </div>
          <div
            onClick={(e) => handleGameClick(e)}
            className="rock"
            id="rock"
            data-game-value="rock"
          >
            <img src={rock} alt="rock-img" data-game-value="rock" />
          </div>
        </div>
      </div>
      <button>RULES</button>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Odeyemi Increase Ayobami</a>.
      </div>
    </div>
  );
}

export default App;
