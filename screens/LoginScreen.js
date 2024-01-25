import { Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/styles";
import colors from "../colors";

const LoginScreen = ({ navigation }) => {
  async function storeSecureTokens(accessToken) {
    await SecureStore.setItemAsync("access_token", accessToken);
  }

  const [user, setUser] = useState({});
  const [role, setRole] = useState("");

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => navigation.navigate("Welcome Screen")}
      >
        <FontAwesomeIcon icon={faArrowLeft} color={colors.primary} size={24} />
      </TouchableOpacity>

      <Image
        source={require("../assets/splash.png")}
        style={{
          height: 270,
          width: 270,
          marginBottom: 30,
          borderRadius: 20,
          marginTop: 130,
        }}
      />
      <TextInput
        style={styles.nameInput}
        placeholder="Username"
        value={user.username}
        onChangeText={(text) => {
          user.username = text;
        }}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.nameInput}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={user.password}
        onChangeText={(text) => {
          user.password = text;
        }}
      />
      <TouchableOpacity
        style={styles.getStartedButton}
        // onPress={handleSignIn}
        underlayColor="#fff"
      >
        <Text style={styles.getStartedText}>Log In</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
