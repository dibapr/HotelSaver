import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import ICON from "../../constants/icon";
import COLOR from "../../constants/color";
import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { removeFromFavorites } from "../../redux/slice/homeSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    gap: 20,
  },
  btnLogin: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    width: 200,
    borderRadius: 20,
  },
});

const Favorites = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const home = useSelector((state) => state.home);

  return isLoggedIn ? (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {
          !home.favorites ? (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "DMBold", fontSize: 20 }}>
                Belum ada yang disimpan
              </Text>
            </View>
          ) : (
            home.favorites.map((item, index) => (
              <View 
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  borderWidth: 0.3,
                  borderColor: "grey",
                }}
                key={index}>
                <View style={{ borderRadius: 20 }}>
                  <Image
                    source={{ uri: item.propertyImage.image.url }}
                    style={{ width: "auto", height: 100, borderRadius: 10 }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 10,
                  }}>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: "DMBold", fontSize: 16 }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
                      Rating {item.reviews.score}
                    </Text>
                  </View>
                  <View style={{ flex: 2, alignItems: "flex-end" }}>
                    <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
                      $ {item.price.lead.amount}
                    </Text>
                    {
                      home.favorites.find((favorite) => favorite.id === item.id) ? (
                        <TouchableOpacity onPress={() => {
                          dispatch(removeFromFavorites(item.id));
                          console.log("ini hapus", item.id);
                        }}>
                          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                          {/* <Image source={ICON.heart} style={{ width: 20, height: 20 }} /> */}
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={() => {
                          dispatch(addToFavorites(item));
                          console.log("ini tambah", item);
                        }}>
                          <FontAwesomeIcon icon={faHeart} style={{ color: "black" }} />
                          {/* <Image source={ICON.heart} style={{ width: 20, height: 20 }} /> */}
                        </TouchableOpacity>
                      )
                    }
                  </View>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  ) : (
    <ScrollView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
          // headerShadowVisible: false,
          headerTitle: "",
          headerTitleStyle: {
            fontFamily: "DMBold",
          },
        }}
      />
      <View
        style={{
          alignItems: "center",
          height: 600,
          justifyContent: "center",
          gap: 10,
        }}>
        <Text style={{ fontFamily: "DMMedium", fontSize: 20 }}>
          Belum login?
        </Text>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            router.replace("login");
          }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "DMBold",
              fontSize: 25,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Favorites;
