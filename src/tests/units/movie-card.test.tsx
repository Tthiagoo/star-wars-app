import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MovieCard from "@/features/details/components/movie-card";
import { Film } from "@/features/details/types/movies";
const mockMovieInfo: Film = {
  title: "A New Hope",
  episode_id: 4,
  opening_crawl:
    "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
  director: "George Lucas",
};

describe("MovieCard", () => {
  it("renders correctly with given movie info", () => {
    const { getByText } = render(<MovieCard movieInfo={mockMovieInfo} />);

    expect(getByText("A New Hope")).toBeTruthy();
    expect(getByText("Episode 4")).toBeTruthy();
    expect(
      getByText(
        "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.".substring(
          0,
          100,
        ) + " (show more...)",
      ),
    ).toBeTruthy();
    expect(getByText("Director: George Lucas")).toBeTruthy();
  });

  it("toggles full text on press", () => {
    const { getByText } = render(<MovieCard movieInfo={mockMovieInfo} />);

    const truncatedText = getByText(
      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.".substring(
        0,
        100,
      ) + " (show more...)",
    );
    fireEvent.press(truncatedText);

    expect(
      getByText(
        "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      ),
    ).toBeTruthy();
  });
});
