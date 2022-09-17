import axios from "axios";
import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";


export const Public = () => {
  const [message, setmessage] = useState("");
  const getMessage = async () => {
    let response = await axios.get('http://localhost:3500/test');
    if(response.status == 200) setmessage(response.data.message)

  };
  return (
    <div>
      Public: {message} <button onClick={getMessage}>This is a message</button>
    </div>
  );
};
