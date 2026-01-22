const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const {
	withStorybook,
} = require("@storybook/react-native/metro/withStorybook");

const { withNativeWind } = require("nativewind/metro");

const storybookConfig = withStorybook(defaultConfig, {
	enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
});

const config = withNativeWind(storybookConfig, { input: "./global.css" });

module.exports = config;
