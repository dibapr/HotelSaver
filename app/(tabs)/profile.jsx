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
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    width: 200,
    borderRadius: 20,
  },

  container: {
    flex: 1,
    gap: 10,
  },

  profileContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 26,
    gap: 20,
    margin: 16,
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  profileHistory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  listHistory: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 16,
    gap: 20,
    marginStart: 16,
    marginEnd: 16,
  },
  historyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

const Profile = () => {
  const router = useRouter();
  const { isLoggedIn, fullName, email, telp } = useSelector(
    (state) => state.auth
  );

  return isLoggedIn ? (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <View>
            <Image
              source={ICON.person}
              style={{ height: 50, width: 50, borderRadius: 10 }}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", textAlign: "center" }}>
            <Text style={{ fontFamily: "DMBold" }}>{fullName}</Text>
            <Text style={{ fontFamily: "DMRegular" }}>{email}</Text>
          </View>
        </View>
        <View style={styles.profileHistory}>
          <View style={{ textAlign: "center" }}>
            <View>
              <Text>Bookings</Text>
            </View>
            <View>
              <Text style={{ color: "#32a852", fontWeight: "bold" }}>27</Text>
            </View>
          </View>
          <View style={{ textAlign: "center" }}>
            <View>
              <Text>Favorites</Text>
            </View>
            <View>
              <Text style={{ color: "#32a852", fontWeight: "bold" }}>115</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listHistory}>
          <View style={styles.historyContainer}>
            <View>
              <Text>
                <Image
                  source={ICON.hotel}
                  style={{ height: 50, width: 50, borderRadius: 10 }}
                />
              </Text>
            </View>
            <View>
              <View>
                <Text>Garden Hotel</Text>
              </View>
              <View>
                <Text>Lake Mary, Florida</Text>
              </View>
              <View>
                <Text>4,5</Text>
              </View>
            </View>
            <View>
              <View>
                <Text>$ 250</Text>
              </View>
              <View>
                <Text>/per night</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.listHistory}>
          <View style={styles.historyContainer}>
            <View>
              <Text>
                <Image
                  source={ICON.hotel}
                  style={{ height: 50, width: 50, borderRadius: 10 }}
                />
              </Text>
            </View>
            <View>
              <View>
                <Text>Hotel Dreams</Text>
              </View>
              <View>
                <Text>New Castle, Indiana</Text>
              </View>
              <View>
                <Text>4,5</Text>
              </View>
            </View>
            <View>
              <View>
                <Text>$ 300</Text>
              </View>
              <View>
                <Text>/per night</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
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

export default Profile;
