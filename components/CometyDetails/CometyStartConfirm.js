import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import {
  addUserData,
  setActiveMonth,
  setCometyAmount,
  setCometyStartDate,
} from "../../store/reducers/cometyData/cometyDataReducer";
import {
  getSelectedCometyName,
  getUsersData,
} from "../../store/reducers/cometyData/cometyDataSelector";
import DateTimePicker from "../CommonComponents/DateTimePicker";
import store from "../../store/store.js";
import { getFormattedDate } from "../../utils/commonUtils";
import Animated, { SlideInRight } from "react-native-reanimated";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { getMonthsList } from "../../store/reducers/cometyMonthly/cometyMonthlySelector";
import { addMonthData } from "../../store/reducers/cometyMonthly/cometyMonthlyReducer";

const CometyStartConfirm = () => {
  const selectedCometyName = getSelectedCometyName();
  const monthsList = getMonthsList();
  const usersData = getUsersData();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState();

  function startCometyHandler() {
    if (!amount) return alert("Please enter some amount");
    const populateData = monthsList?.reduce((acc, month) => {
      acc[month] = { userData: usersData };
      return acc;
    }, {});
    console.log(populateData, "testss");
    store.dispatch(addMonthData(populateData));
    store.dispatch(setCometyAmount(amount));
    store.dispatch(setCometyStartDate(getFormattedDate(date)));
    store.dispatch(setActiveMonth(monthsList[date.getMonth()]));
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
        />
        <DateTimePicker date={date} setDate={setDate} />
        <Button
          uppercase
          mode="elevated"
          style={styles.buttonStyle}
          onPress={startCometyHandler}
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
  scrollViewContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#BDB5D5",
    marginTop: 14,
    marginBottom: 6,
    padding: 4,
  },
  formStyleContainer: {},
  buttonStyle: {
    margin: 10,
  },
});

export default CometyStartConfirm;
