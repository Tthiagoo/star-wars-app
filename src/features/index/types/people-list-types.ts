import { StarWarsCharacter } from "@/features/details/types/details-character";

export interface IPeopleListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsCharacter[];
}
