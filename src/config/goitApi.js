import axios from "axios";

const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export default goitApi;

export const setToken = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  goitApi.defaults.headers.common.Authorization = "";
};
