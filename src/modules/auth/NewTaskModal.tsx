import { View, Text } from "react-native";
import React from "react";
import { useBottomSheet } from "@gorhom/bottom-sheet";
import { Button } from "components/buttons";

const NewTaskModal = () => {
	const { close } = useBottomSheet();
	return (
		<View>
			<Text>NewTaskModal</Text>
      <Button onPress={() => close()}>
        Close
      </Button>
		</View>
	);
};

export default NewTaskModal;
