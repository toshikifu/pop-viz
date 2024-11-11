import { render, screen } from "@testing-library/react";
import Card from "./";

describe("Card", () => {
	it("renders without crashing", () => {
		render(<Card>Card</Card>);
		expect(screen.getByText("Card")).toBeInTheDocument();
	});
});
