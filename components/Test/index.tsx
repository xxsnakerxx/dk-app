import { Text, View } from "react-native";

type Props = {
	title?: string;
};

export const Test = ({ title = "Test" }: Props) => {
	return (
		<View className="bg-blue-300 p-4 rounded-xl">
			<Text className="font-bold text-2xl text-center uppercase">{title}</Text>
		</View>
	);
};
