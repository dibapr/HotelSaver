import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from "react-native";
import styles from "./SearchInput.style";
import DatePicker from "react-native-modern-datepicker";
import ICON from "../../../../constants/icon";
import COLOR from "../../../../constants/color";

const SearchInput = () => {
  const today = new Date();
  const [date, setDate] = useState(today.toLocaleDateString("en-CA"));
  const [open, setOpen] = useState(false);

  const handleOnPress = () => {
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={COLOR.lightGray}
        style={styles.searchInput}
        placeholder="Mau kemana hari ini?"
      />
      <View style={styles.btnDateContainer}>
        {/* <View style={{ gap: 10 }}>
          <Text style={styles.checkText}>Check In</Text>
          <TouchableOpacity style={styles.btnDate} onPress={handleOnPress}>
            <Image style={styles.icon} source={ICON.calendar} />
            <Text style={styles.btnDateText}>{date}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.checkText}>Check Out</Text>
          <TouchableOpacity style={styles.btnDate}>
            <Image style={styles.icon} source={ICON.calendar} />
            <Text style={styles.btnDateText}>{date}</Text>
          </TouchableOpacity>
        </View> */}
        <Modal animationType="fade" transparent={true} visible={open}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setOpen(!open)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {/* <DatePicker
        selected={date}
        mode="calendar"
        style={{ borderRadius: 20 }}
        onSelectedChange={() => setOpen(!open)}
      /> */}
      <TouchableOpacity style={styles.btnSearch}>
        <Image style={styles.icon} source={ICON.search} />
        <Text style={{ fontFamily: "DMMedium" }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
