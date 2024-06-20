import React from "react";
import { render, screen } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getPeopleList } from "@/features/index/services/get-people-service";
import { IndexViewModel } from "@/features/index/views/index-view-model";

// Mock the getPeopleList function
jest.mock("../../features/index/services/get-people-service", () => ({
  getPeopleList: jest.fn(),
}));

const queryClient = new QueryClient();

const renderWithClient = (ui) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

describe("IndexViewModel", () => {
  it("renders the list of characters", async () => {
    // Mock data
    const mockData = [{ name: "Luke Skywalker" }, { name: "Darth Vader" }];

    // Mock the API call
    (getPeopleList as jest.Mock).mockResolvedValueOnce(mockData);

    renderWithClient(<IndexViewModel />);

    // Check if the loading skeleton is displayed initially
    expect(screen.getByTestId("skeleton-loading")).toBeTruthy();

    // Wait for the characters to be rendered
    const characterItems = await screen.findAllByTestId("character-item");
    expect(characterItems).toHaveLength(mockData.length);

    // Check if the character names are displayed
    mockData.forEach((character) => {
      expect(screen.getByText(character.name)).toBeTruthy();
    });
  });
});
