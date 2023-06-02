import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ICON from "../../constants/icon";

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
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
})

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <View>
            <Image source={ICON.person} style={{ height: 50, width: 50, borderRadius: 10 }} />
          </View>
          <View style={{ flex: 1, justifyContent: "center", textAlign: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Gordon Norman</Text>
            <Text>@gordonnorman</Text>
          </View>
        </View>
        <View style={styles.profileHistory}>
          <View style={{ textAlign: "center" }}>
            <View><Text>Bookings</Text></View>
            <View><Text style={{ color: "#32a852", fontWeight: "bold" }} >27</Text></View>
          </View>
          <View style={{ textAlign: "center" }}>
            <View><Text>Reviews</Text></View>
            <View><Text style={{ color: "#32a852", fontWeight: "bold" }} >10</Text></View>
          </View>
          <View style={{ textAlign: "center" }}>
            <View><Text>Favorites</Text></View>
            <View><Text style={{ color: "#32a852", fontWeight: "bold" }} >115</Text></View>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listHistory}>
          <View style={styles.historyContainer}>
            <View><Text><Image source={ICON.hotel} style={{ height: 50, width: 50, borderRadius: 10 }}/></Text></View>
            <View>
              <View><Text>Garden Hotel</Text></View>
              <View><Text>Lake Mary, Florida</Text></View>
              <View><Text>4,5</Text></View>
            </View>
            <View>
              <View><Text>$ 250</Text></View>
              <View><Text>/per night</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.listHistory}>
          <View style={styles.historyContainer}>
            <View><Text><Image source={ICON.hotel} style={{ height: 50, width: 50, borderRadius: 10 }}/></Text></View>
            <View>
              <View><Text>Hotel Dreams</Text></View>
              <View><Text>New Castle, Indiana</Text></View>
              <View><Text>4,5</Text></View>
            </View>
            <View>
              <View><Text>$ 300</Text></View>
              <View><Text>/per night</Text></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
