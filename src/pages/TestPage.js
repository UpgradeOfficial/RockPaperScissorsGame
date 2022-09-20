import React, { useRef, useState } from "react";

import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import {motion} from "framer-motion"
const TestPage = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    setIsActive(!isActive);
  };
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}} className="flex justify-center items-center relative radial-blue min-h-screen">
      {/* <div className="w-10/12 md:w-1/2">
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
        <div className="pt-10 bg-no-repeat  bg-triangle">
          <div className="flex justify-between ">
            <div class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
              <div class="bg-red-500 w-16 h-16 rounded-full">
                <img src={scissors} className="rounded-full" alt="" />
              </div>
            </div>

            <div class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center mt-2">
              <div class="bg-red-500 w-16 h-16 rounded-full">
                <img src={paper} className="rounded-full" alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
              <div class="bg-white flex  w-16 h-16 rounded-full">
                <img src={rock} className="rounded-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <div className="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 ">
          Rules
        </div>
      </div> */}
      this is a test
    </motion.div>
  );
};

export default TestPage;
