// api.ts

import axios from "axios";
import { Film } from "../types/movies";

export const getMovieList = async (movieList: string[]): Promise<Film[]> => {
  const responses = await Promise.all(movieList.map((url) => axios.get(url)));
  return responses.map((response) => response.data);
};
