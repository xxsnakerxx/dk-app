import { View } from "react-native";
import { Test } from "@/components/Test";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Test title="Hello World" />
		</View>
	);
}
