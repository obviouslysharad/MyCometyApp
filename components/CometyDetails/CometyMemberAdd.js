import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { getSelectedCometyName } from "../../store/reducers/cometyData/cometyDataSelector";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import store from "../../store/store";
import { addUserData } from "../../store/reducers/cometyData/cometyDataReducer";
import Animated, {SlideOutLeft} from 'react-native-reanimated'

const CometyMemberAdd = ({
  setEnableMemberAddPage,
  setEnableConfirmAddPage,
}) => {
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
    setMemberName("");
    setPhoneNumber("");
    setEnableMemberAddPage(false);
    setEnableConfirmAddPage(true);
  };
  return (
    <Animated.View exit = {SlideOutLeft}>
      <Text style={styles.textStyling}>{selectedCometyName} Comety</Text>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Member Name"
        value={memberName}
        onChangeText={setMemberName}
      />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button
        mode="elevated"
        buttonColor="#7A4988"
        textColor="white"
        disabled=""
        uppercase
        style={styles.buttonStyle}
        onPress={addUser}
      >
        Add User
      </Button>
      <Button
        mode="elevated"
        disabled=""
        uppercase
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
  buttonStyle: {
    margin: 8,
  },
});

export default CometyMemberAdd;
