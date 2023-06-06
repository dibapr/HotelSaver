import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./FormEdit.style";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slice/authSlice";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLOR from "../../../constants/color";

const FormEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { email, password, fullName, telp } = useSelector(
    (state) => state.auth
  );

  const [newFullName, setNewFullName] = useState(fullName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [newTelp, setNewTelp] = useState(telp);
  const [showPassword, setShowPassword] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Personal Data</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          value={newFullName}
          style={styles.input}
          onChangeText={(inputFullName) => {
            setNewFullName({ inputFullName });
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alamat Email</Text>
        <TextInput
          keyboardType="email-address"
          value={newEmail}
          style={styles.input}
          onChangeText={(inputEmail) => {
            setNewEmail({ inputEmail });
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={showPassword}
          value={newPassword}
          style={styles.input}
          onChangeText={(inputPassword) => {
            setNewPassword({ inputPassword });
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
          onPress={() => setShowPassword((prev) => !prev)}>
          <MaterialCommunityIcons
            name={!showPassword ? "eye-off" : "eye"}
            size={20}
          />
          <Text>{!showPassword ? "Hide Password" : "Show Password"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nomor Telepon</Text>
        <TextInput
          keyboardType="numeric"
          value={newTelp}
          style={styles.input}
          onChangeText={(inputTelp) => {
            setNewTelp({ inputTelp });
          }}
        />
      </View>
      <TouchableOpacity style={styles.save}>
        <Text
          style={{
            color: COLOR.secondary,
            textAlign: "center",
            fontFamily: "DMBold",
            fontSize: 17,
          }}>
          Simpan Data
        </Text>
      </TouchableOpacity>
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
