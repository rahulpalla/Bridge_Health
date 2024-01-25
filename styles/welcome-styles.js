import { StyleSheet } from "react-native";
import fonts from "../fonts";

const styles = StyleSheet.create({
  welcomeText: {
    textAlign: "center",
    fontSize: 30,
    width: "85%",
    fontFamily: fonts.titleFont,
    fontWeight: "600",
  },
  welcomeImage: {
    height: 200,
    width: 300,
    marginBottom: 50,
    borderRadius: 20,
    marginTop: 50,
  },
  iAmTextContainer: {
    width: "55%",
    justifyContent: "flex-start",
  },
  iAmText: {
    color: "#585563",
  },
});

export default styles;
