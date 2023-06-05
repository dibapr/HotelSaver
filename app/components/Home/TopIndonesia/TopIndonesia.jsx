import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../../../redux/slice/homeSlice";
import { useEffect } from "react";
import { useState } from "react";
import COLOR from "../../../../constants/color";

const TopIndonesia = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity());
  }, [dispatch]);

  const { city, loading } = useSelector((state) => state.home);

  return (
    <View>
      <Text style={{ fontFamily: "DMBold", color: COLOR.primary }}>
        KOTA-KOTA DI INDONESIA
      </Text>
      <View>
        {!city ? (
          <ActivityIndicator />
        ) : (
          city.map((item) => (
            <Text
              key={item.index}
              style={{
                fontFamily: "DMMedium",
                color: COLOR.primary,
                marginVertical: 5,
                padding: 10,
                borderRadius: 8,
                backgroundColor: COLOR.secondary,
              }}>
              {item.regionNames.shortName}
            </Text>
          ))
        )}
      </View>
    </View>
  );
};

export default TopIndonesia;
