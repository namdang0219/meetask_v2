import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FieldSmall } from "components/common";
import { InputSmall } from "components/input";
import { categoryMocks } from "mock/categoryMocks";
import Global from "utils/constants/Global";
import { useTheme } from "@react-navigation/native";
import { ViewFull } from "components/view";

const TaskForm = () => {
	const { colors } = useTheme();
	const [choosedCategory, setChoosedCategory] = useState<string>(
		categoryMocks[0].cid
	);

	return (
		<ViewFull style={{ paddingHorizontal: Global.padding, gap: 10 }}>
			<FieldSmall label="タイトル">
				<InputSmall />
			</FieldSmall>
			<FieldSmall label="説明">
				<InputSmall />
			</FieldSmall>
			<FieldSmall label="カテゴリ" style={{ gap: 14 }}>
				<View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
					{categoryMocks.length > 0 &&
						categoryMocks.map((c) => (
							<Pressable
								key={c.cid}
								onPress={() => setChoosedCategory(c.cid)}
								style={{
									backgroundColor:
										choosedCategory === c.cid
											? colors.primary
											: colors.input,
									paddingHorizontal: 14,
									paddingVertical: 6,
									borderRadius: 6,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										color:
											choosedCategory === c.cid
												? "white"
												: "black",
									}}
								>
									{c.name}
								</Text>
							</Pressable>
						))}
				</View>
			</FieldSmall>
		</ViewFull>
	);
};

export default TaskForm;
