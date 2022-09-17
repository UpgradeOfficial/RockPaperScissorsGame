import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { allowedBackendHost as baseURL } from "./literals";


const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.accessToken}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(authTokens.accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      console.log(req);
      return req;
    }

    const response = await axios.post(`${baseURL}/auth/refresh/`, {
      refreshToken: authTokens?.refreshToken,
    });

    localStorage.setItem("authTokens", JSON.stringify(response.data));
    // set the new  Token 
    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.accessToken));
    req.headers.Authorization = `Bearer ${response.data.accessToken}`;

    console.log(req);
    return req;
  });

  return axiosInstance;
};

export default useAxios;
