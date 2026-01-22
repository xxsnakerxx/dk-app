import { Link } from "expo-router";
import { View } from "react-native";
import { Test } from "@/components/Test";

export default function Index() {
	return (
		<View className="flex-1 justify-center items-center">
			{process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true" ? (
				<Link href="/(storybook)">Open Storybook</Link>
			) : (
				<Test title="Hello Nativewind!!!" />
			)}
		</View>
	);
}
