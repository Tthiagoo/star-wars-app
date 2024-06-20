import axios from "axios";

export const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});
export const fetchData = async <T>(endpoint: string): Promise<T> => {
  const response = await api.get(endpoint);
  return response.data;
};
