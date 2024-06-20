import { getPeopleList } from "@/features/index/services/get-people-service";
import { ICharacter } from "@/features/index/types/people-list-types";
import { api } from "@/services/api";

jest.mock("@/services/api");
const mockedApi = api as jest.Mocked<typeof api>;

describe("getPeopleList", () => {
  let SUT: typeof getPeopleList;

  beforeEach(() => {
    SUT = getPeopleList;
  });

  it("should fetch and return the people list", async () => {
    const mockData: ICharacter = [
      {
        name: "Leia Organa",
        skin_color: "white",
        gender: "female",
        height: "177",
        mass: "78",
        favorite: false,
      },
    ];
    mockedApi.get.mockResolvedValue({ data: mockData });

    const result = await SUT();

    expect(mockedApi.get).toHaveBeenCalledWith("people");
    expect(result).toEqual(mockData);
  });

  it("should handle errors", async () => {
    mockedApi.get.mockRejectedValue(new Error("Network Error"));

    await expect(SUT()).rejects.toThrow("Network Error");
  });
});
