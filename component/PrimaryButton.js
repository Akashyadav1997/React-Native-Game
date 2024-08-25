import { Pressable, StyleSheet, Text, View } from "react-native";

export const PrimaryButton = ({ children, btnFxn }) => {
	return (
		<View>
			<Pressable
				style={style.btnCtn}
				onPress={btnFxn}
				android_ripple={{ color: "#722F37" }}
			>
				<Text style={style.btnText}>{children}</Text>
			</Pressable>
		</View>
	);
};

const style = StyleSheet.create({
	btnCtn: {
		backgroundColor: "#7C0A02",
		padding: 8,
		margin: 8,
		borderRadius: 14,
		alignItems: "center",
		elevation: 8,
	},
	btnText: {
		color: "white",
		fontSize: 20,
	},
});
