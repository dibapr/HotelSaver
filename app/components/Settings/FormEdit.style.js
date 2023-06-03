import ICON from "../../../constants/icon";
import COLOR from "../../../constants/color";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },

  inputContainer: {
    gap: 5,
  },

  head: {
    fontSize: 23,
    fontFamily: "DMBold",
    textAlign: "center",
  },

  label: {
    fontSize: 17,
    fontFamily: "DMMedium",
  },

  input: {
    borderWidth: 0.8,
    borderRadius: 5,
    padding: 12,
    fontSize: 17,
    fontFamily: "DMRegular",
  },

  logout: {
    color: "red",
    fontFamily: "DMBold",
    borderTopWidth: 0.5,
    paddingVertical: 13,
    fontSize: 17,
  },
});

export default styles;
