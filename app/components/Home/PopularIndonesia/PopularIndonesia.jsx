import { FlatList, Text, View } from "react-native";
import Card from "../utils/Card/Card";

const PopularIndonesia = () => {
  const DUMMY_DATA = [
    { title: "Jakarta" },
    { title: "Bandung" },
    { title: "Bali" },
    { title: "Lombok" },
    { title: "Papua" },
    { title: "Yogyakarta" },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontFamily: "DMBold" }}>TEMPAT WISATA POPULER</Text>
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

export default PopularIndonesia;
