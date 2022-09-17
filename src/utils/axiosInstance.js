import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { allowedBackendHost as baseURL } from "./literals";



let authTokens = localStorage.getItem("authTokens")
  ? JSON.parse(localStorage.getItem("authTokens"))
  : null;

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authTokens?.accessToken}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    authTokens = localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;

    req.headers.Authorization = `Bearer ${authTokens?.accessToken}`;
  }

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
  req.headers.Authorization = `Bearer ${response.data.accessToken}`;
  console.log("refreshing")
  console.log(req)
  return req;
});

export default axiosInstance;
