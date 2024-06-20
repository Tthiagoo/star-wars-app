// api.ts

import axios from "axios";
import { Film } from "../types/movies";
/**
 * functiion that make a promisse all in all links that in params
 * @param movieList
 * @returns
 */
export const getMovieList = async (movieList: string[]): Promise<Film[]> => {
  const responses = await Promise.all(movieList.map((url) => axios.get(url)));
  return responses.map((response) => response.data);
};
