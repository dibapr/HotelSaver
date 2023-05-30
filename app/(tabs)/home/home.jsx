import React from "react";
import { useState } from "react";
import { SafeAreaView, View, Text,StyleSheet } from "react-native";
import { Stack } from "expo-router";
import SearchInput from "../../components/Home/SearchInput/SearchInput";
// import styles from "./home.style";
import COLOR from "../../../constants/color";
import TopIndonesia from "../../components/Home/TopIndonesia/TopIndonesia";
import PopularIndonesia from "../../components/Home/PopularIndonesia/PopularIndonesia";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
});

const Home = () => {
  const today = new Date().toLocaleDateString("en-CA");
  const [date, setDate] = useState(today);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.lightGray }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
          headerShadowVisible: false,
          headerTitle: "HotelSaver",
          headerTitleStyle: {
            fontFamily: "DMBold",
          },
        }}
      />
      <SearchInput today={today} checkOutDate={setDate} />
      <View style={styles.container}>
        <TopIndonesia />
        <PopularIndonesia />
      </View>
    </SafeAreaView>
  );
};

export default Home;
