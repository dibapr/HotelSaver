import React, { useEffect } from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Stack } from "expo-router";
import SearchInput from "../components/Home/SearchInput/SearchInput";
import COLOR from "../../constants/color";
import TopIndonesia from "../components/Home/TopIndonesia/TopIndonesia";
import PopularIndonesia from "../components/Home/PopularIndonesia/PopularIndonesia";
import ICON from "../../constants/icon";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../redux/slice/homeSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    gap: 20,
  },

  listContainer: {
    flex: 1,
    borderRadius: 20,
    marginVertical: 8,
  },
});

const Home = () => {
  const today = new Date().toLocaleDateString("en-CA");
  const [date, setDate] = useState(today);
  return (
    <ScrollView>
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
        <View style={{ backgroundColor: COLOR.lightGray }}>
          <SearchInput today={today} checkOutDate={setDate} />
          <View style={styles.container}>
            <TopIndonesia />
            <PopularIndonesia />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
