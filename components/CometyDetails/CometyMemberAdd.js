import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { getSelectedCometyName } from "../../store/reducers/cometyData/cometyDataSelector";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import store from "../../store/store";
import { addUserData } from "../../store/reducers/cometyData/cometyDataReducer";
import Animated, { SlideOutLeft } from "react-native-reanimated";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";

const CometyMemberAdd = () => {
  const [memberName, setMemberName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const selectedCometyName = getSelectedCometyName();
  const addUser = () => {
    store.dispatch(
      addUserData({ memberId: uuidv4(), memberName, phoneNumber })
    );
    setMemberName("");
    setPhoneNumber("");
  };
  const proceed = () => {
    store.dispatch(setActivePopup("MEMBER_CONFIRM"));
  };
  return (
    <Animated.View exit={SlideOutLeft}>
      <Text style={styles.textStyling}>{selectedCometyName} Comety</Text>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Member Name"
        value={memberName}
        onChangeText={setMemberName}
        outlineColor = 'black'
        activeOutlineColor = 'black'
      />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        outlineColor = 'black'
        activeOutlineColor = 'black'
      />
      <Button
        mode="elevated"
        buttonColor="#7A4988"
        textColor="white"
        disabled=""
        uppercase
        style={[styles.buttonStyle, styles.btnColor]}
        onPress={addUser}
      >
        Add User
      </Button>
      <Button
        mode="outlined"
        disabled=""
        uppercase
        textColor="#6C63FF"
        style={styles.buttonStyle}
        onPress={proceed}
      >
        Proceed
      </Button>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    alignSelf: "center",
    fontSize: 20,
  },
  textInput: {
    margin: 8,
  },
  btnColor: {
    backgroundColor: '#6C63FF',
  },
  buttonStyle: {
    margin: 8,
  },
});

export default CometyMemberAdd;
