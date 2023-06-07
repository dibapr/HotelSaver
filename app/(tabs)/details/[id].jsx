import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import COLOR from "../../../constants/color";
import { getDetails, resetDetails } from "../../../redux/slice/detailSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HotelDetail = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    dispatch(resetDetails());
  }, []);

  useEffect(() => {
    dispatch(getDetails({ id }));
  }, [dispatch]);

  const { details, loading } = useSelector((state) => state.detail);

  console.log(details, "dari page detail");

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
          headerShadowVisible: false,
          headerTitle: "Details",
          headerTitleStyle: {
            fontFamily: "DMBold",
          },
          headerLeft: () => <Text></Text>,
        }}
      />
      <ScrollView style={{ maxWidth: "90%", paddingHorizontal: 16 }}>
        {loading || details.length < 1 ? (
          <ActivityIndicator />
        ) : (
          <View style={{ gap: 20 }}>
            <View>
              {details?.propertyGallery?.images
                ?.slice(0, 1)
                .map((img, index) => {
                  return (
                    <Image
                      style={{
                        width: 300,
                        height: 200,
                        borderRadius: 10,
                        alignSelf: "center",
                      }}
                      key={index}
                      source={{ uri: img?.image?.url }}
                    />
                  );
                })}
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.name}>{details?.summary?.name}</Text>
                  <Text style={styles.tagline}>
                    {details?.summary?.tagline}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontFamily: "DMMedium" }}>
                    <MaterialCommunityIcons
                      name="star"
                      size={18}
                      color={COLOR.secondary}
                    />
                    {details?.summary?.overview?.propertyRating?.rating}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.btnBooking} onPress={() => {
              if (auth.isLoggedIn === true) {
                router.push("booking")
              }
              router.push("login")
            }}>
              <Text style={styles.bookingText}>Booking Sekarang</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  detailContainer: {},

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    fontFamily: "DMBold",
    fontSize: 20,
  },

  tagline: {
    fontFamily: "DMRegular",
  },

  btnBooking: {
    backgroundColor: COLOR.primary,
    padding: 15,
    borderRadius: 12,
  },

  bookingText: {
    fontFamily: "DMBold",
    textAlign: "center",
    color: COLOR.secondary,
    fontSize: 18,
  },
});
export default HotelDetail;
