import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { GameScreen } from "./screen/GameScreen";
import { StartGameScreen } from "./screen/StartGameScreen";
import { GameOverScreen } from "./screen/GameOverScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameOver, setGameOver] = useState(false);
	const [rounds, setRounds] = useState(0);
	const pickNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
		setGameOver(false);
	};
	const gameOverFxn = () => {
		setGameOver(true);
	};
	let screen = <StartGameScreen setNumber={pickNumberHandler} />;
	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				gameOver={gameOverFxn}
				setRounds={setRounds}
			/>
		);
	}
	const startAgain = () => {
		console.log("start again fxn is called");
		setGameOver(false);
		setUserNumber();
		setRounds(0);
		screen = <StartGameScreen />;
	};
	if (gameOver) {
		screen = (
			<GameOverScreen
				guessNumber={userNumber}
				roundsToGuess={rounds}
				resetFxn={startAgain}
			/>
		);
	}
	return (
		<LinearGradient colors={["#AA0000", "#ddb52f"]} style={styles.mainCtn}>
			<ImageBackground
				source={require("./assets/background.png")}
				imageStyle={styles.image}
				style={styles.rootScreen}
				resizeMode="cover"
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
				{/* {screen} */}
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	mainCtn: {
		flex: 1,
		backgroundColor: "#E6E6FA",
	},
	rootScreen: {
		flex: 1,
	},
	image: {
		opacity: 0.25,
	},
});
