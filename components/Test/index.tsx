import { Text, View } from "react-native";

type Props = {
	title?: string;
};

export const Test = ({ title = "Test" }: Props) => {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
};
