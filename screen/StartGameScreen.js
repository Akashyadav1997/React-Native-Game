import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { PrimaryButton } from "../component/PrimaryButton";
import { useState } from "react";

export const StartGameScreen = ({ setNumber }) => {
	const [enteredValue, setEnteredValue] = useState("");
	const valueHandler = (value) => {
		setEnteredValue(value);
	};
	const resetValue = () => {
		setEnteredValue("");
	};
	const confirmInputHandler = () => {
		console.log("confirm presss btn");
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			// show alert...
			Alert.alert("Invalid Number", "Number has to be between 1 to 99 !", [
				{ text: "Okay", style: "destructive", onPress: resetValue },
			]);
			return;
		}
		setNumber(chosenNumber);
	};
	return (
		<View>
			<Text style={style.title}>Guess the Number</Text>
			<View style={style.mainCtn}>
				<Text style={style.innerText}>Enter a Number</Text>
				<TextInput
					style={style.input}
					value={enteredValue}
					maxLength={2}
					keyboardType="number-pad"
					onChangeText={valueHandler}
				/>
				<View style={style.btnCtn}>
					<View style={style.btnInnerCtn} onPress={resetValue}>
						<PrimaryButton btnFxn={resetValue}>Reset</PrimaryButton>
					</View>
					<View style={style.btnInnerCtn}>
						<PrimaryButton btnFxn={confirmInputHandler}>Confirm</PrimaryButton>
					</View>
				</View>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	mainCtn: {
		marginTop: 80,
		backgroundColor: "rgba(128, 70, 27,0.85)",
		padding: 8,
		alignItems: "center",
		marginHorizontal: 14,
		borderRadius: 10,
		opacity: 0.9,
		elevation: 10,
	},
	input: {
		borderBottomColor: "yellow",
		borderBottomWidth: 2,
		fontWeight: "bold",
		width: 50,
		alignSelf: "center",
		fontSize: 30,
		color: "white",
	},
	btnCtn: {
		flexDirection: "row",
		marginVertical: 20,
	},
	btnInnerCtn: {
		flex: 1,
	},
	title: {
		marginTop: 90,
		textAlign: "center",
		fontSize: 35,
		fontWeight: "600",
		color: "white",
		marginHorizontal: 20,
		borderRadius: 7,
		padding: 10,
		backgroundColor: "rgba(241, 141, 30, 0.35)",
	},
	innerText: {
		fontSize: 30,
		marginVertical: 7,
		color: "rgb(32, 24, 28)",
	},
});
