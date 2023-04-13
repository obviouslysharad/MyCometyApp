import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { setSelectedCometyName } from "../../store/reducers/cometyData/cometyDataReducer";
import { addCometyName } from "../../store/reducers/cometyDetails/cometyDetailsReducer";
import store from "../../store/store";

const LandingPage = ({ navigation }) => {
  const [cometyName, setCometyName] = useState("");
  const changeScreen = () => {
    store.dispatch(setSelectedCometyName(cometyName));
    store.dispatch(addCometyName(cometyName));
    navigation.navigate("CometyPage");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        mode="outlined"
        label="Comety Name"
        onChangeText={setCometyName}
      />
      <Button
        mode="elevated"
        style={styles.buttonStyle}
        buttonColor="#7A4988"
        textColor="white"
        disabled=""
        uppercase
        onPress={changeScreen}
      >
        Start Comety
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: '#fcfcff',
  },
  textInputStyle: {
    margin: 16,
  },
  buttonStyle: {
    margin: 12,
    padding: 6,
    borderRadius: 36,
    backgroundColor: '#836fd1',
    borderColor: 'white',
    borderWidth: 1
  },
});

export default LandingPage;
