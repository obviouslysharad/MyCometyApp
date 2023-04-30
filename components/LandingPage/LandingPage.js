import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
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
      <Image style = {styles.imgStyle} source = {require('../../assets/start.png')} />
      <TextInput
        style={styles.textInputStyle}
        mode="outlined"
        label="Comety Name"
        onChangeText={setCometyName}
        outlineColor = 'black'
        activeOutlineColor = 'black'
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
  imgStyle: {
    height: 230,
    width: 330,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: 'white',
    alignItems: "center",
  },
  textInputStyle: {
    width: "70%",
    marginTop: 60,
    marginBottom: 30
  },
  buttonStyle: {
    padding: 6,
    borderRadius: 36,
    backgroundColor: '#6C63FF',
    borderColor: 'white',
    borderWidth: 1,
    width: '70%',
  },
});

export default LandingPage;
