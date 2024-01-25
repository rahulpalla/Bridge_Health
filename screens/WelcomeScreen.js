import { Text, View, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import styles from "../styles/welcome-styles";
import commonStyles from "../styles/styles";

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={[{ justifyContent: "center" }, commonStyles.container]}>
      <Text style={styles.welcomeText}>Welcome to BridgeHealth</Text>
      <Image
        source={require("../assets/bridgehealth.png")}
        style={styles.welcomeImage}
      />
      <TouchableOpacity
        style={[commonStyles.getStartedButton, { marginTop: 50, width: "auto" }]}
        onPress={() =>
          navigation.navigate("Log In Screen")
        }
        underlayColor="#fff"
      >
        <Text style={commonStyles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;