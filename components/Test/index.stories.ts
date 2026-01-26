import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { expect } from "storybook/test";
import { Test } from "./index";

const meta = {
	title: "Test",
	component: Test,
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	play: async ({ canvas }) => {
		expect(canvas.getByText("Test")).toBeTruthy();
	},
};

export const WithTitle: Story = {
	args: {
		title: "Hello World",
	},
	play: async ({ canvas, args }) => {
		expect(canvas.getByText(args.title ?? "")).toBeTruthy();
	},
};
