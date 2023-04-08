import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { setCometyAmount, setCometyStartDate } from "../../store/reducers/cometyData/cometyDataReducer";
import {
  getSelectedCometyName,
  getUsersData,
} from "../../store/reducers/cometyData/cometyDataSelector";
import DateTimePicker from "../CommonComponents/DateTimePicker";
import store from "../../store/store.js";
import { getFormattedDate } from "../../utils/commonUtils";
import Animated, {SlideInRight} from 'react-native-reanimated'

const CometyStartConfirm = ({setModalVisible}) => {
  const selectedCometyName = getSelectedCometyName();
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState();
  const [usersData, setUsersData] = useState(getUsersData());
  function startCometyHandler() {
    store.dispatch(setCometyAmount(amount));
    store.dispatch(setCometyStartDate(getFormattedDate(date)));
    setModalVisible(false);
  }

  return (
    <Animated.View entering = {SlideInRight} style={styles.container}>
      <Text style={styles.textHeader}>{selectedCometyName} Comety</Text>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollViewStyle}>
          {usersData.map((user) => (
            <Text style={styles.textListStyle}>{user?.memberName}</Text>
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
        <Button uppercase mode="elevated" style={styles.buttonStyle} onPress = {startCometyHandler}>
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
    margin: 10
  },
});

export default CometyStartConfirm;