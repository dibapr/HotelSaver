import { SafeAreaView, View, Text } from "react-native";
import { Stack } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FAFAFC", flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerTitle: "HotelSaver",
          headerTitleStyle: {
            fontFamily: "DMBold",
          },
        }}
      />
      <View>
        <Text style={{ fontFamily: "DMBold" }}>This is home!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
