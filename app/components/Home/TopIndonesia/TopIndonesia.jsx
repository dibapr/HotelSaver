import { FlatList, Text, View } from "react-native";
import Card from "../utils/Card/Card";

const TopIndonesia = () => {
  const DUMMY_DATA = [
    { title: "Jakarta" },
    { title: "Bandung" },
    { title: "Bali" },
    { title: "Lombok" },
    { title: "Papua" },
    { title: "Yogyakarta" },
  ];
  return (
    <View>
      <Text style={{ fontFamily: "DMBold" }}>KOTA-KOTA DI INDONESIA</Text>
      <View>
        <FlatList
          data={DUMMY_DATA}
          renderItem={({ item }) => <Card title={item.title} />}
          horizontal
        />
      </View>
    </View>
  );
};

export default TopIndonesia;
