import { StyleSheet } from "react-native";
import colors from "../colors";
import fonts from "../fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  accountTitle: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: "600",
    color: "white",
    fontFamily: fonts.titleFont,
  },
  getStartedButton: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: "#76B0A5",
    borderRadius: 30,
    borderWidth: 1,
    width: "60%",
    borderColor: colors.white,
  },
  getStartedText: {
    color: colors.white,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontFamily: fonts.titleFont,
  },
  nameInput: {
    height: 40,
    margin: 12,
    height: 40,
    width: "85%",
    borderRadius: 30,
    padding: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  // Quiz Screen
  backArrow: {
    position: "absolute",
    left: 30,
    top: 75,
    zIndex: 3,
  },
  modalHintButton: {
    borderRadius: 20,
    elevation: 2,
    marginTop: 5,
    paddingHorizontal: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "70%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 40,
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "Verdana",
  },
  topFillerView: {
    position: "absolute",
    width: "100%",
    height: 45,
    top: -20,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  creatQuestion: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginBottom: 10,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  creatQuestion: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginBottom: 10,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  customButton: {
    borderRadius: 20,
    backgroundColor: colors.secondary,
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
});

export default styles;
