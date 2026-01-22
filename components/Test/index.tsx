import { Text, View } from "react-native";

type Props = {
	title?: string;
};

export const Test = ({ title = "Test" }: Props) => {
	return (
		<View className="bg-blue-300 p-4 rounded-lg">
			<Text className="font-bold text-2xl text-center">{title}</Text>
		</View>
	);
};
