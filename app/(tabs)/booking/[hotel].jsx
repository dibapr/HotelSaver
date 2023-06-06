import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLOR from "../../../constants/color";
import DatePicker from "react-native-modern-datepicker";

const Booking = () => {
  const today = new Date().toLocaleDateString("en-CA");
  const { hotel } = useLocalSearchParams();
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(today);
  const [openModalCheckIn, setOpenModalCheckIn] = useState(false);
  const [openModalCheckOut, setOpenModalCheckOut] = useState(false);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLOR.lightGray },
            headerShadowVisible: false,
            headerTitle: "Booking",
            headerTitleStyle: {
              fontFamily: "DMBold",
            },
          }}
        />
        {/* Modal Check In */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModalCheckIn}
          onRequestClose={() => setModalVisible(!openModalCheckIn)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ fontFamily: "DMBold" }}>Check In</Text>
              <DatePicker
                onSelectedChange={(date) => setCheckIn(date)}
                minimumDate={today}
                options={{
                  backgroundColor: COLOR.primary,
                  textHeaderColor: COLOR.secondary,
                  textDefaultColor: COLOR.lightGray,
                  selectedTextColor: "#fff",
                  mainColor: COLOR.secondary,
                  textSecondaryColor: COLOR.secondary,
                  defaultFont: "DMRegular",
                  headerFont: "DMBold",
                }}
                current={today}
                mode="calendar"
                style={{ borderRadius: 10, width: 300 }}
              />
              <TouchableOpacity
                onPress={() => setOpenModalCheckIn(!openModalCheckIn)}>
                <Text style={{ fontFamily: "DMBold" }}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Modal Check Out */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModalCheckOut}
          onRequestClose={() => setModalVisible(!openModalCheckOut)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ fontFamily: "DMBold" }}>Check Out</Text>
              <DatePicker
                onSelectedChange={(date) => setCheckOut(date)}
                minimumDate={today}
                options={{
                  backgroundColor: COLOR.primary,
                  textHeaderColor: COLOR.secondary,
                  textDefaultColor: COLOR.lightGray,
                  selectedTextColor: "#fff",
                  mainColor: COLOR.secondary,
                  textSecondaryColor: COLOR.secondary,
                  defaultFont: "DMRegular",
                  headerFont: "DMBold",
                }}
                current={today}
                mode="calendar"
                style={{ borderRadius: 10, width: 300 }}
              />
              <TouchableOpacity
                onPress={() => setOpenModalCheckOut(!openModalCheckOut)}>
                <Text style={{ fontFamily: "DMBold" }}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ScrollView>
          <View style={styles.container1}>
            <Text style={{ fontFamily: "DMRegular", color: COLOR.secondary }}>
              Nama hotel:{" "}
            </Text>
            <Text
              style={{
                fontFamily: "DMBold",
                fontSize: 25,
                color: COLOR.secondary,
              }}>
              {hotel}
            </Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text}>
              <MaterialCommunityIcons name="calendar-start" size={19} />
              <Text>Check In</Text>
            </Text>
            <TouchableOpacity
              style={styles.btnDate}
              onPress={() => setOpenModalCheckIn(!openModalCheckIn)}>
              <Text style={[styles.text, styles.color]}>{checkIn}</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              <MaterialCommunityIcons name="calendar-end" size={19} />
              <Text>Check Out</Text>
            </Text>
            <TouchableOpacity
              style={styles.btnDate}
              onPress={() => setOpenModalCheckOut(!openModalCheckOut)}>
              <Text style={[styles.text, styles.color]}>{checkOut}</Text>
            </TouchableOpacity>
            <View style={styles.contact}>
              <Text style={[styles.text]}>
                <MaterialCommunityIcons name="contacts" size={19} />
                Informasi Kontak
              </Text>
              <View style={{ gap: 5 }}>
                <Text style={[styles.text]}>Nama</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={{ gap: 5 }}>
                <Text style={[styles.text]}>Nomor Telepon</Text>
                <TextInput style={styles.input} />
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.btnBooking}>
                <MaterialCommunityIcons name="book-check" size={19} />
                Konfirmasi Booking
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: COLOR.primary,
    padding: 50,
    borderRadius: 10,
    margin: 16,
    flex: 1,
  },

  container2: {
    backgroundColor: "white",
    padding: 50,
    borderRadius: 20,
    flex: 6,
    width: 390,
    gap: 10,
  },

  contact: {
    marginTop: 15,
    gap: 10,
    borderWidth: 0.3,
    padding: 15,
    borderRadius: 10,
  },

  color: {
    color: COLOR.secondary,
  },

  btnDate: {
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLOR.primary,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },

  text: {
    fontFamily: "DMMedium",
    fontSize: 18,
  },

  input: {
    borderBottomWidth: 0.3,
    fontSize: 18,
    fontFamily: "DMRegular",
    paddingVertical: 5,
  },

  btnBooking: {
    backgroundColor: COLOR.secondary,
    textAlign: "center",
    padding: 10,
    color: COLOR.primary,
    borderRadius: 10,
    fontFamily: "DMBold",
    fontSize: 18,
  },
});

export default Booking;
