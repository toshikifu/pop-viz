import type { Meta, StoryObj } from "@storybook/react";

import Card from "./";

const meta: Meta<typeof Card> = {
	component: Card,
	title: "app/src/ui/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: () => <Card className="p-5 text-black">Card</Card>,
};
