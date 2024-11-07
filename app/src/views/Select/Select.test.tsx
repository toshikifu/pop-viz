// Select.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PopulationCategory } from "~/utils/transform-population-data";
import Select from "./";

describe("Select component", () => {
	it("renders all options from PopulationCategory", () => {
		render(
			<Select value={PopulationCategory.TotalPopulation} onChange={() => {}} />,
		);

		// Check that each option in PopulationCategory is rendered
		for (const category of Object.values(PopulationCategory)) {
			expect(
				screen.getByRole("option", { name: category }),
			).toBeInTheDocument();
		}
	});

	it("displays the correct selected value", () => {
		const selectedValue = PopulationCategory.TotalPopulation;
		render(<Select value={selectedValue} onChange={() => {}} />);

		// Check that the select element has the correct selected value
		expect(screen.getByRole("combobox")).toHaveValue(selectedValue);
	});

	it("calls onChange when a different option is selected", () => {
		const handleChange = vi.fn();
		render(
			<Select
				value={PopulationCategory.TotalPopulation}
				onChange={handleChange}
			/>,
		);

		// Change the selected value
		fireEvent.change(screen.getByRole("combobox"), {
			target: { value: PopulationCategory.WorkingAgePopulation },
		});

		// Verify that onChange is called with the new value
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Confirm the event object is passed
	});

	it("applies the provided className", () => {
		const customClass = "custom-select-class";
		render(
			<Select
				value={PopulationCategory.TotalPopulation}
				onChange={() => {}}
				className={customClass}
			/>,
		);

		// Check that the custom class name is applied
		expect(screen.getByRole("combobox")).toHaveClass(customClass);
	});
});
