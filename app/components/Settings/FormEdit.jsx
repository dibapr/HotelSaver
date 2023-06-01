import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./FormEdit.style";

const FormEdit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Personal Data</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Depan</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Belakang</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alamat Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <TextInput style={styles.input} />
      </View>
      <Text style={styles.logout}>Logout</Text>
    </View>
  );
};

export default FormEdit;
