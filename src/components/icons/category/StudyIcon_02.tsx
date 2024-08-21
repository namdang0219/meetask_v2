import React from "react";
import Svg, { Path } from "react-native-svg";
import Global from "utils/constants/Global";

const StudyIcon_02 = () => {
	return (
		<Svg width={Global.categoryIcon.size} height={Global.categoryIcon.size} viewBox="0 0 2048 2048">
			<Path
				fill={Global.categoryIcon.color}
				d="M384 1536h128v128H256V384H128v1408h384v128H0V256h256V128h384q88 0 169 27t151 81q69-54 150-81t170-27h384v128h256v819l-128-58V384h-128v575l-128-59V256h-256q-71 0-136 24t-120 71v608l-128 58V351q-54-46-119-70t-137-25H384zm1408 255l-448 225l-448-225q0-36 1-76t8-81t20-77t36-67l-193-88v582H640v-640l704-320l704 320l-321 146l8 11q21 31 32 67t17 73t7 76t1 74m-448-627l-395 180l395 180l395-180zm0 709l320-161q-1-26-4-47t-11-41t-16-39t-23-42l-266 121l-266-121q-15 24-24 43t-16 38t-9 40t-4 49z"
			></Path>
		</Svg>
	);
};

export default StudyIcon_02;