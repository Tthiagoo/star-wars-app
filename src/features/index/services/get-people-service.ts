// api.ts
import { api } from "@/services/api";
import axios from "axios";
import { IPeopleListResponse } from "../types/people-list-types";

export const getPeopleList = async (): Promise<IPeopleListResponse> => {
  const response = await api.get("people");
  return response.data.results;
};
