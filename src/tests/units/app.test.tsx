import React from "react";
import { render } from "@testing-library/react-native";
import Index from "../../../app";
import { Button } from "@/shared/Button";

describe("Index Component", () => {
  it("should render the text correctly", () => {
    const { getByText } = render(<Button label="test" />);
    const textElement = getByText("test");
    expect(textElement).toBeTruthy();
  });
});
