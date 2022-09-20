import axios from "axios";
import { allowedBackendHost } from "../utils/literals";

export const getFAQs = async (user) => {
  const response = await axios.get(`${allowedBackendHost}/admin/faq`);
  return response.data;
};
