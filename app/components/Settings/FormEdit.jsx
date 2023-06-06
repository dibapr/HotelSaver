import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./FormEdit.style";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slice/authSlice";

const FormEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { email, password, fullName, telp } = useSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Personal Data</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput value={fullName} style={styles.input} />
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
        <Text style={styles.label}>Nomor Telepon</Text>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity
        onPress={() => {
          handleLogout();
        }}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormEdit;
