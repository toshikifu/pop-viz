import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./";

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: "app/src/ui/Checkbox",
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: () => <Checkbox name={"prefCode"} value={"01"} />,
};
