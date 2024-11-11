import type { Meta, StoryObj } from "@storybook/react";

import PopulationChart from "./";
import { data } from "./constant";

const meta: Meta<typeof PopulationChart> = {
	component: PopulationChart,
	title: "app/src/view/PopulationChart",
};

export default meta;
type Story = StoryObj<typeof PopulationChart>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: () => (
		<div style={{ height: "300px" }}>
			<PopulationChart data={data} xKey={"name"} lineKeys={["uv"]} />
		</div>
	),
};
