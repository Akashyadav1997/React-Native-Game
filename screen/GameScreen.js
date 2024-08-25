import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../component/PrimaryButton";
import Ionicons from "@expo/vector-icons/Ionicons";
// const generateRandomNumber = (min, max, exlude) => {
// 	const randomNumber = Math.floor(Math.random() * (min - max)) + max;
// 	if (randomNumber === exlude) {
// 		return generateRandomNumber(min, max, exlude);
// 	} else {
// 		return randomNumber;
// 	}
// };
const generateRandomNumber = (min, max, exclude) => {
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	if (randomNumber === exclude) {
		return generateRandomNumber(min, max, exclude);
	} else {
		return randomNumber;
	}
};
let minBoundary = 1;
let maxBoundary = 99;
export const GameScreen = ({ userNumber, gameOver, setRounds }) => {
	const initialGuess = generateRandomNumber(
		minBoundary,
		maxBoundary,
		userNumber
	);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const nextGuessHandler = (direction) => {
		console.log("next guess handler is getting callledddd");
		setRounds((prev) => prev + 1);
		if (
			(direction === "lower" && currentGuess <= userNumber) ||
			(direction === "greater" && currentGuess >= userNumber)
		) {
			Alert.alert("Don't lie", "You Know this is wrong!...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}
		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newGuess = generateRandomNumber(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newGuess);
	};
	useEffect(() => {
		if (userNumber === currentGuess) {
			console.log("both are equalls");
			minBoundary = 1;
			maxBoundary = 99;
			gameOver();
		}
	}, [currentGuess, userNumber, gameOver]);

	return (
		<View style={styles.mainCtn}>
			<Text style={styles.title}>Opponents guess</Text>
			<View style={styles.numCtn}>
				<Text style={styles.num}>{currentGuess}</Text>
			</View>
			{/* <View style={styles.indicationCtn}> */}
			<View style={styles.btnCtn}>
				<Text style={styles.btnInnerText}>Higher or Lower ? </Text>
				<View>
					<View style={styles.btnInnerCtn}>
						<PrimaryButton btnFxn={() => nextGuessHandler("greater")}>
							<Ionicons name="add-sharp" size={44} color="#fffff" />
						</PrimaryButton>
					</View>
					<View style={styles.btnInnerCtn}>
						<PrimaryButton btnFxn={() => nextGuessHandler("lower")}>
							<Ionicons name="remove" size={44} color="#fffff" />
						</PrimaryButton>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainCtn: {
		marginTop: 90,
		// marginLeft: 90,
		marginHorizontal: 38,
	},
	title: {
		// borderWidth: 3,
		// borderColor: "#ffc300",
		backgroundColor: "rgba(50, 1, 14,0.35)",
		textAlign: "center",
		padding: 10,
		fontSize: 30,
		borderRadius: 50,
		color: "#FAD6E0",
	},
	numCtn: {
		// flex: 1,
		alignItems: "center",
		padding: 40,
		marginHorizontal: 30,
		borderWidth: 2,
		borderColor: "rgba(50, 1, 14,0.90)",
		marginVertical: 50,
		borderRadius: 20,
		backgroundColor: "rgba(249, 247, 119, 0.25)",
	},
	num: {
		fontSize: 50,
		color: "yellow",
		fontWeight: "bold",
		// zIndex: 10,
	},
	indicationCtn: {
		alignItems: "center",
		marginVertical: 10,
	},
	btnCtn: {
		// flex: 1,
		flexDirection: "column",
		// borderWidth: 2,
		padding: 10,
		borderRadius: 10,
		backgroundColor: "rgba(243, 111, 22, 0.55)",
		// alignItems: "center",
	},
	btnInnerCtn: {
		// flex: 1,
	},
	btnInnerText: {
		fontSize: 20,
		padding: 10,
		marginVertical: 10,
		textAlign: "center",
		fontSize: 30,
		color: "#32010E",
		fontWeight: "600",
	},
	btn: {
		flex: 1,
	},
});
