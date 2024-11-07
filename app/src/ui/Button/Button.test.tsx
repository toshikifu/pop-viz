import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./";

describe("Button", () => {
	it("renders without crashing", () => {
		render(<Button>Button</Button>);
		expect(screen.getByText("Button")).toBeInTheDocument();
	});
});
