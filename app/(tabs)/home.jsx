import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import SearchInput from "../components/Home/SearchInput/SearchInput";
import COLOR from "../../constants/color";
import TopIndonesia from "../components/Home/TopIndonesia/TopIndonesia";
import PopularIndonesia from "../components/Home/PopularIndonesia/PopularIndonesia";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetDetails } from "../../redux/slice/detailSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const today = new Date().toLocaleDateString("en-CA");

  const resetStorage = async () => {
    try {
      await AsyncStorage.removeItem("persist:root");
    } catch (e) {
      console.log(e);
    }
    console.log("Done.");
  };

  useEffect(() => {
    dispatch(resetDetails());
  }, []);

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
          <SearchInput />
          <View style={styles.container}>
            <TouchableOpacity
              onPress={resetStorage}
              style={{
                backgroundColor: COLOR.primary,
                padding: 15,
                borderRadius: 20,
              }}>
              <Text style={{ color: "white" }}>Reset Storage</Text>
            </TouchableOpacity>
            <TopIndonesia />
            <PopularIndonesia />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
