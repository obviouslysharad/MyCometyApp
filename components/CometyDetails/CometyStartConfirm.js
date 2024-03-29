import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import DateTimePicker from "../CommonComponents/DateTimePicker";
import store from "../../store/store.js";
import { getFormattedDate } from "../../utils/commonUtils";
import Animated, { SlideInRight } from "react-native-reanimated";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import { initiateComety } from "../../store/reducers/cometyDetails/cometyDetailsReducer";
import { activeCometyNameSelector, currentUsersDataSelector } from "../../store/reducers/cometyDetails/cometyDetailsSelector";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { colorPalette } from "../../utils/styleUtils";

const CometyStartConfirm = () => {
  const selectedCometyName = activeCometyNameSelector();
  const usersData = currentUsersDataSelector();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState();

  function startCometyHandler() {
    if (!amount) return alert("Please enter some amount");
    store.dispatch(initiateComety({ startDate: getFormattedDate(date), amount: amount, activeMonthBoolean: date.getMonth()}))
    store.dispatch(setActivePopup(""));
  }

  return (
    <Animated.View entering={SlideInRight} style={styles.container}>
      <Text style={styles.textHeader}>{selectedCometyName} Comety</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollViewStyle}>
          {usersData.map((user) => (
            <Text key={uuidv4()} style={styles.textListStyle}>
              {user?.memberName}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.formStyleContainer}>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          mode="outlined"
          label="Amount"
          outlineColor = 'black'
          activeOutlineColor = 'black'
          textColor={colorPalette.textInputTextColor}
          style = {styles.textInputStyle}
        />
        <DateTimePicker date={date} setDate={setDate} />
        <Button
          uppercase
          mode="elevated"
          style={styles.buttonStyle}
          onPress={startCometyHandler}
          textColor='white'
        >
          Start
        </Button>
      </View>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollViewStyle: {
    overflow: "hidden",
  },
  textListStyle: {
    margin: 10,
  },
  textInputStyle: {
    backgroundColor: colorPalette.textInputBackgroundColor
  },
  scrollViewContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 14,
    marginBottom: 6,
    padding: 4,
  },
  formStyleContainer: {},
  buttonStyle: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#6C63FF',
  },
});

export default CometyStartConfirm;
