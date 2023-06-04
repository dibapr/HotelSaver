import { Text, View, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { addToFavorites, removeFromFavorites, getHome } from "../../../../redux/slice/homeSlice";

const PopularIndonesia = () => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  return (
    <>
      <Text style={{ fontFamily: "DMBold" }}>TEMPAT WISATA POPULER</Text>
      <View style={{ gap: 16 }}>
        {!home ? (
          <View
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 10,
            }}>
            <View style={{ borderRadius: 20 }}>
              <Image
                source={ICON.hotel}
                style={{ width: "auto", height: 100, borderRadius: 10 }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}>
              <View>
                <Text style={{ fontFamily: "DMBold", fontSize: 20 }}>
                  HotelSaver
                </Text>
                <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
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
                        <Text>Buang</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => {
                        dispatch(addToFavorites(item));
                        console.log("ini tambah", item);
                      }}>
                        <FontAwesomeIcon icon={faHeart} style={{ color: "black" }} />
                        {/* <Image source={ICON.heartOutline} style={{ width: 20, height: 20 }} /> */}
                        <Text>Simpan</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </>
  );
};

export default PopularIndonesia;
