import { Image, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../component/PrimaryButton";

export const GameOverScreen = ({ guessNumber, roundsToGuess, resetFxn }) => {
	return (
		<View style={styles.rootCtn}>
			<Text style={styles.title}>Game over ! </Text>
			<View style={styles.imgCtn}>
				<Image style={styles.img} source={require("../assets/success.png")} />
			</View>
			<Text style={styles.text}>
				Your phone needed
				<Text style={styles.innerText}> {roundsToGuess} </Text>rounds to guess
				the number <Text style={styles.innerText}> {guessNumber} </Text>
			</Text>
			<PrimaryButton btnFxn={resetFxn}>Start New Game</PrimaryButton>
		</View>
	);
};

const styles = StyleSheet.create({
	rootCtn: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	imgCtn: {
		width: 350,
		height: 350,
		borderRadius: 175,
		overflow: "hidden",
		marginTop: 40,
		// margin: 10,
	},
	img: {
		width: "100%",
		height: "100%",
	},
	title: {
		fontSize: 45,
		fontWeight: "700",
		color: "rgb(76, 8, 5)",
	},
	text: {
		fontSize: 20,
		marginHorizontal: 19,
		marginVertical: 20,
		color: "rgb(70, 3, 5)",
	},
	innerText: {
		fontSize: 25,
		fontWeight: "600",
		marginHorizontal: 4,
	},
});
