// hooks/usePeopleList.js
import { useQuery } from "@tanstack/react-query";
import { getPeopleList } from "../services/get-people-service";
import { useCallback } from "react";

const usePeopleList = () => {
  const queryFn = useCallback(() => getPeopleList(), []);
  return useQuery({ queryKey: ["people"], queryFn });
};

export default usePeopleList;
