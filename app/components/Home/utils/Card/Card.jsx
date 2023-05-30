import { View, Text } from "react-native";
import styles from "./Card.style";

const Card = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Card;
