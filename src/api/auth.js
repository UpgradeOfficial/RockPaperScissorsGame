import axios from "axios";
import { allowedBackendHost } from "../utils/literals";

export const registerUser = async (user) => {
  const response = await axios.post(
    `${allowedBackendHost}/auth/register`,
    user
  );

  return response;
};
