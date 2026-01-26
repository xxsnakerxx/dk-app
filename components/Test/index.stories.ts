import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { Test } from "./index";

const meta = {
	title: "Test",
	component: Test,
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithTitle: Story = {
	args: {
		title: "Hello World",
	},
};
