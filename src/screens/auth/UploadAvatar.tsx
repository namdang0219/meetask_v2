import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { TitleLarge } from "components/titles";
import { Button } from "components/buttons";
import { useNavigation, useTheme } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CustomTouchableOpacity } from "components/customs";
import * as ImagePicker from "expo-image-picker";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { SafeView } from "layouts";
import { globalConstants } from "utils/constants/constant";

const UploadAvatar = () => {
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();
	const { showActionSheetWithOptions } = useActionSheet();
	const [image, setImage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	// const {user} = useAuth()

	const handleSelectAvatar = () => {
		const options = ["Take a photo", "Choose from galerry", "Cancel"];
		const cancelButtonIndex = 2;
		showActionSheetWithOptions(
			{
				options,
				cancelButtonIndex,
			},
			(selectedIndex: number | undefined) => {
				switch (selectedIndex) {
					case 1:
						// Choose from galerry
						pickImage();
						break;
					case 0:
						// Take a photo
						takePhoto();
						break;
					case cancelButtonIndex:
					// Canceled
				}
			}
		);
	};

	// handle pick image from galerry
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	// handle take a photo from camera
	const takePhoto = async () => {
		// Ask for camera permissions
		const permissionResult =
			await ImagePicker.requestCameraPermissionsAsync();
		if (permissionResult.granted === false) {
			alert("You've refused to allow this appp to access your camera!");
			return;
		}
		let result = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
			cameraType: ImagePicker.CameraType.front,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	// CreateUserInfo styles
	const styles = StyleSheet.create({
		avatarContainer: {
			alignItems: "center",
			marginBottom: 18,
		},
		avatar: {
			backgroundColor: colors.inputBackground,
			width: 120,
			height: 120,
			borderRadius: 1000,
			justifyContent: "center",
			alignItems: "center",
		},
		userName: {
			fontSize: 24,
			fontWeight: "500",
			textAlign: "center",
			color: "#8A8A8A",
		},
	});

	// handle image to blob
	// const urlToBlob = (url: string) => {
	// 	if (!url) {
	// 		alert('Something went wrong. Please try again!');
	// 		setImage('')
	// 		return;
	// 	}

	// 	return new Promise((resolve, reject) => {
	// 		const xhr = new XMLHttpRequest();
	// 		xhr.addEventListener("error", (error) => {
	// 				console.error('XHR Error:', error);
	// 				reject(new Error('Failed to fetch blob from URL.'));
	// 		});
	// 		xhr.addEventListener("readystatechange", () => {
	// 				if (xhr.readyState === 4) {
	// 						if (xhr.status === 200) {
	// 								resolve(xhr.response);
	// 								// console.log('Request successfully completed');
	// 						} else {
	// 								console.error('Error fetching blob:', xhr.status, xhr.statusText);
	// 								reject(new Error(`Failed to fetch blob. Status: ${xhr.status}`));
	// 						}
	// 				}
	// 		});
	// 		xhr.open("GET", url);
	// 		xhr.responseType = "blob"; // convert to blob
	// 		xhr.send();
	// });
	// };

	// handle save image to firebase storage
	// const saveDataToFirestore = async () => {
	// 	const blobData : any = await urlToBlob(image);
	// 	urlToBlob(image)
	// 	// Create the file metadata
	// 	/** @type {any} */
	// 	const metadata = {
	// 		contentType: "image/jpeg",
	// 	};

	// 	// Upload file and metadata to the object 'images/mountains.jpg'
	// 	const storageRef = ref(storage, "avatar/" + Date.now());
	// 	const uploadTask = uploadBytesResumable(storageRef, blobData, metadata);

	// 	// Listen for state changes, errors, and completion of the upload.
	// 	uploadTask.on(
	// 		"state_changed",
	// 		(snapshot) => {
	// 			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	// 			const progress =
	// 				(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	// 			switch (snapshot.state) {
	// 				case "paused":
	// 					// Upload has been paused
	// 					break;
	// 				case "running":
	// 					// Upload is running
	// 					break;
	// 			}
	// 		},
	// 		(error) => {
	// 			switch (error.code) {
	// 				case "storage/unauthorized":
	// 					// User doesn't have permission to access the object
	// 					break;
	// 				case "storage/canceled":
	// 					// User canceled the upload
	// 					break;
	// 				case "storage/unknown":
	// 					// Unknown error occurred, inspect error.serverResponse
	// 					break;
	// 			}
	// 		},
	// 		() => {
	// 			// Upload completed successfully, now we can get the download URL
	// 			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
	// 				auth.currentUser &&
	// 					updateProfile(auth.currentUser, {
	// 						photoURL: downloadURL,
	// 					}).catch((error) => {
	// 						alert("An error occurred");
	// 					});
	// 				setLoading(false);
	// 			});
	// 		}
	// 	);
	// };

	// handle save button click
	const handleSave = async () => {
		setLoading(true);
		// saveDataToFirestore();
		setLoading(false);
		navigate("BottomTab");
	};

	return (
		<SafeView style={{ paddingHorizontal: globalConstants.padding }}>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Upload your avatar
			</TitleLarge>
			<View style={styles.avatarContainer}>
				{image ? (
					<CustomTouchableOpacity onPress={handleSelectAvatar}>
						<Image
							source={{
								uri: image,
							}}
							style={styles.avatar}
						></Image>
					</CustomTouchableOpacity>
				) : (
					<CustomTouchableOpacity
						onPress={handleSelectAvatar}
						style={styles.avatar}
					>
						<AntDesign name="user" size={60} color="#8A8A8A" />
					</CustomTouchableOpacity>
				)}
			</View>
			<Text style={styles.userName}>HelloWorld</Text>
			<View style={{ marginTop: "auto", marginBottom: 16 }}>
				<CustomTouchableOpacity
					style={{ alignItems: "center", marginBottom: 18 }}
					onPress={() =>
						navigate("AppStack", { screen: "BottomTab" })
					}
				>
					<Text style={{ color: colors.primary, fontSize: 16 }}>
						Skip
					</Text>
				</CustomTouchableOpacity>
				<Button loading={loading} onPress={handleSave}>
					Save
				</Button>
			</View>
		</SafeView>
	);
};

export default UploadAvatar;
