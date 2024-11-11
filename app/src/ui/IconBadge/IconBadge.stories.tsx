import type { Meta, StoryObj } from "@storybook/react";

import ErrorIcon from "~/ErrorIcon";
import LoadingIcon from "~/LoadingIcon";
import IconBadge from "./";

const meta: Meta<typeof IconBadge> = {
	component: IconBadge,
	title: "app/src/ui/IconBadge",
};

export default meta;
type Story = StoryObj<typeof IconBadge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const LoadingBadge: Story = {
	render: () => (
		<IconBadge>
			<LoadingIcon />
		</IconBadge>
	),
};

export const ErrorBadge: Story = {
	render: () => (
		<IconBadge>
			<ErrorIcon />
		</IconBadge>
	),
};
