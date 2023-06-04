import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Card.style";

const Card = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
