import React, { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Image } from "react-native";
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
    margin: 10, 
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 10,
    padding: 16,
  },
  listContainer: {
    flex: 1,
    borderRadius: 20,
    marginVertical: 8,
  },
});

const Home = () => {
  const dispatch = useDispatch()
  const home = useSelector((state) => state.home)

  const today = new Date().toLocaleDateString("en-CA");
  const [date, setDate] = useState(today);

  useEffect(() => {
    dispatch(getHome())
  }, [dispatch])

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
        <View style={{ backgroundColor: "grey" }}>
          <SearchInput today={today} checkOutDate={setDate} />
          <View style={styles.container}>
            <TopIndonesia />
            <PopularIndonesia />
          </View>
            {
              !home ? (
                <View style={{ backgroundColor: "white", margin: 10, borderRadius: 10 }}>
                  <View style={{ borderRadius: 20 }}>
                    <Image source={ICON.hotel} style={{ width: "auto", height: 100, borderRadius: 10 }} />
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent:"space-between", margin: 10 }}>
                    <View>
                      <Text style={{ fontFamily: "DMBold", fontSize: 20 }}>
                        HotelSaver
                      </Text>
                      <Text style={{ fontFamily: "DMRegular", fontSize: 16}}>
                        Ha
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
                        ini harga
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                home.home.map((item, index) => (
                  <View style={{ backgroundColor: "white", margin: 10, borderRadius: 10 }} key={index}>
                    <View style={{ borderRadius: 20 }}>
                      <Image source={{ uri: item.propertyImage.image.url }} style={{ width: "auto", height: 100, borderRadius: 10 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", margin: 10 }}>
                      <View style={{ flex: 2 }}>
                        <Text style={{ fontFamily: "DMBold", fontSize: 16 }}>
                          {item.name}
                        </Text>
                        <Text style={{ fontFamily: "DMRegular", fontSize: 16}}>
                          Rating {item.reviews.score}
                        </Text>
                      </View>
                      <View style={{ flex: 2, alignItems: "flex-end"}}>
                        <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
                          $ {item.price.lead.amount}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))
              )
            }
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
