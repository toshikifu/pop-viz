import { render, screen } from "@testing-library/react";
import Checkbox from ".";

describe("Checkbox", () => {
	it("renders without crashing", () => {
		render(<Checkbox name={""} value={""} />);
		expect(screen.getByRole("checkbox")).toBeInTheDocument();
	});

	it("renders with defaultChecked", () => {
		render(<Checkbox name={""} value={""} defaultChecked />);
		expect(screen.getByRole("checkbox")).toBeChecked();
	});

	it("toggles checkbox when clicked", () => {
		render(<Checkbox name={""} value={""} />);
		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).not.toBeChecked();
		checkbox.click();
		expect(checkbox).toBeChecked();
	});
});
