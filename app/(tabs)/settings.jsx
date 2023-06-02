import React from "react";
import { View, SafeAreaView, Image, ScrollView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import COLOR from "../../constants/color";
import ICON from "../../constants/icon";
import { StyleSheet, TouchableOpacity } from "react-native";
import FormEdit from "../components/Settings/FormEdit";
import { useSelector } from "react-redux";

const Settings = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLOR.lightGray },
            headerShadowVisible: false,
            headerTitle: "Settings",
            headerTitleStyle: {
              fontFamily: "DMBold",
            },
          }}
        />
        <View style={styles.icon}>
          <Image source={ICON.user} />
        </View>
        <View style={styles.formContainer}>
          <FormEdit />
        </View>
      </SafeAreaView>
    </ScrollView>
  ) : (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            // headerStyle: { backgroundColor: COLOR.lightGray },
            // headerShadowVisible: false,
            headerTitle: "Settings",
            headerTitleStyle: {
              fontFamily: "DMBold",
            },
          }}
        />
        <View
          style={[
            styles.formContainer,
            { justifyContent: "center", textAlign: "center", margin: 20 },
          ]}>
          <TouchableOpacity
            onPress={(e) => {
              e.preventDefault();
              router.replace("login");
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.lightGray,
    gap: 20,
  },

  icon: {
    width: 70,
    height: 70,
    backgroundColor: COLOR.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  formContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    flex: 1,
  },
});

export default Settings;
