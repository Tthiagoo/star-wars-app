// hooks/usePeopleList.js
import { useQuery } from "@tanstack/react-query";

import { useCallback } from "react";
import { getMovieList } from "../services/get-movies";
/**
 * 
hook that uses react query to select movies
 * @param linksMovies 
 * @returns 
 */
export const useMovieList = (linksMovies: string[]) => {
  const queryFn = useCallback(() => getMovieList(linksMovies), [linksMovies]);
  return useQuery({ queryKey: ["movies"], queryFn });
};
