import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import { toast, ToastContainer } from "react-toastify";
import {motion} from "framer-motion"
const allowedBackendHost = process.env.REACT_APP_ALLOWED_BACKEND_HOST;
const socket = io.connect(allowedBackendHost);
console.log("socket: ", socket);

function GameView() {
  // const notify = () =>  toast.success("WOw so Easy")

  const handleGameClick = (e) => {
    e.stopPropagation();
    const value = e.target.getAttribute("data-game-value");
    console.log("this is clicked", value);
    socket.emit("send-message", {
      value,
    });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("this is the message: ", data);
    });
    socket.on("receive_error", (data) => {
      console.log("error");
      toast.success(`Error message: ${data.message}`);
    });
  }, [socket]);

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}  className="flex justify-center items-center relative radial-blue min-h-screen">
      <div className="w-10/12 md:w-1/2">
        <div className="border rounded-md w-50 flex justify-between items-center">
          <div className="ml-2 font-bold">
            <div>Rock</div>
            <div>Paper</div>
            <div>Scissors</div>
          </div>
          <div className="w-20 h-20 rounded-md bg-red-400 text-center">
            <p className="text-gray-100 ">Score</p>
            <p className="text-3xl mt-3">12</p>
          </div>
        </div>
        <div
          data-game-value="scissors"
          onClick={(e) => handleGameClick(e)}
          className="pt-10 bg-no-repeat  bg-triangle"
        >
          <div data-game-value="scissors" className="flex justify-between ">
            <div
              class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center"
              data-game-value="scissors"
            >
              <div
                class="bg-red-500 w-16 h-16 rounded-full"
                data-game-value="scissors"
              >
                <img
                  src={scissors}
                  className="rounded-full"
                  alt=""
                  data-game-value="scissors"
                />
              </div>
            </div>

            <div
            data-game-value="paper" 
              onClick={(e) => handleGameClick(e)}
              class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center mt-2"
            >
              <div data-game-value="paper" class="bg-red-500 w-16 h-16 rounded-full">
                <img data-game-value="paper" src={paper} className="rounded-full" alt="" />
              </div>
            </div>
          </div>
          <div data-game-value="rock"
            className="flex justify-center"
            onClick={(e) => handleGameClick(e)}
          >
            <div data-game-value="rock" class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
              <div data-game-value="rock" class="bg-white flex  w-16 h-16 rounded-full">
                <img src={rock} data-game-value="rock" className="rounded-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <div className="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 ">
          Rules
        </div>
      </div>
      <ToastContainer position="top-left" />
    </motion.div>
  );
}

export default GameView;
