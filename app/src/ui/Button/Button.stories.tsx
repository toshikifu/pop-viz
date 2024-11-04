import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "app/src/ui/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: () => <Button>Button</Button>,
};

export const Disabled: Story = {
	render: () => <Button disabled>Button</Button>,
};
