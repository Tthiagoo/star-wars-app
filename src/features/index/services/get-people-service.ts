// api.ts
import { api } from "@/services/api";
import axios from "axios";
import { ICharacter } from "../types/people-list-types";

export const getPeopleList = async (): Promise<ICharacter[]> => {
  const response = await api.get("people");
  return response.data.results;
};
