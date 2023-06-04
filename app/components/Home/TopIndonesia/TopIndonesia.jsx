import { FlatList, Text, View } from "react-native";
import Card from "../utils/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../../../redux/slice/homeSlice";
import { useEffect } from "react";

const TopIndonesia = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity());
  }, []);

  const { city } = useSelector((state) => state.home);

  return (
    <View>
      <Text style={{ fontFamily: "DMBold" }}>KOTA-KOTA DI INDONESIA</Text>
      <View>
        <FlatList
          data={city}
          renderItem={({ item }) => <Card title={item.regionNames.shortName} />}
          horizontal
        />
      </View>
    </View>
  );
};

export default TopIndonesia;
