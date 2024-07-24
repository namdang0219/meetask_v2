import { StatusBar } from "expo-status-bar";
import { FullView } from "layouts";
import { ImageBackground } from "react-native";


const Profile = () => {
  const image = "https://i.pinimg.com/564x/52/ab/92/52ab92415b6fb448365733d0ebe46221.jpg";

  return (
    <FullView>
      <StatusBar style="light"></StatusBar>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={{ height: 300 }}
      />
    </FullView>
  );
};

export default Profile;
