import type { Meta, StoryObj } from "@storybook/react-native-web-vite";

import { Test } from "./index";

const meta: Meta<typeof Test> = {
	title: "Test",
	component: Test,
};

export default meta;

export const Default: StoryObj<typeof Test> = {
	args: {},
};

export const WithTitle: StoryObj<typeof Test> = {
	args: {
		title: "Hello World",
	},
};
