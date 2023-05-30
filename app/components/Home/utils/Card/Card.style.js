import { StyleSheet } from "react-native";
import COLOR from "../../../../../constants/color";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 150,
    height: 130,
    backgroundColor: COLOR.primary,
    marginEnd: 10,
    padding: 10,
    borderRadius: 10,
  },

  title: {
    color: COLOR.lightGray,
    fontFamily: "DMBold",
  },
});

export default styles;
