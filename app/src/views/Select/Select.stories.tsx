import type { Meta, StoryObj } from "@storybook/react";
import { type ChangeEventHandler, useState } from "react";
import Select from ".";

const meta: Meta<typeof Select> = {
	component: Select,
	title: "app/src/view/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

const Template = (args: React.ComponentProps<typeof Select>) => {
	const [value, setValue] = useState<string>("");
	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		setValue(event.target.value);
	};
	return <Select {...args} value={value} onChange={onChange} />;
};

export const Default: Story = {
	render: (args) => <Template {...args} />,
	args: {
		// Selectコンポーネントに渡すデフォルトの引数（必要に応じて追加）
	},
};
