import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {
  addComety,
  setActiveCometyId,
} from "../../store/reducers/cometyDetails/cometyDetailsReducer";
import store from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import { setActivePopup, setActiveScreen } from "../../store/reducers/commonData/commonDataReducer";
import Animated, { FadeInLeft, FadeInRight, FadeOut } from "react-native-reanimated";

const LandingPage = () => {
  const [cometyName, setCometyName] = useState("");
  const changeScreen = () => {
    const payload = { cometyId: uuidv4(), cometyName: cometyName };
    store.dispatch(setActiveCometyId(payload.cometyId));
    store.dispatch(addComety(payload));
    store.dispatch(setActiveScreen('MAIN_SCREEN'));
    store.dispatch(setActivePopup('MEMBER_ADD'));
  };

  return (
    <Animated.View entering={FadeInLeft}style={styles.container}>
      <Image
        style={styles.imgStyle}
        source={require("../../assets/start.png")}
      />
      <TextInput
        style={styles.textInputStyle}
        mode="outlined"
        label="Comety Name"
        onChangeText={setCometyName}
        outlineColor="black"
        activeOutlineColor="black"
      />
      <Button
        mode="elevated"
        style={styles.buttonStyle}
        textColor="white"
        disabled=""
        uppercase
        onPress={changeScreen}
      >
        Start Comety
      </Button>
    </Animated.View>
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
    backgroundColor: "white",
    alignItems: "center",
  },
  textInputStyle: {
    width: "70%",
    marginTop: 60,
    marginBottom: 30,
  },
  buttonStyle: {
    padding: 6,
    borderRadius: 36,
    backgroundColor: "#6C63FF",
    borderColor: "white",
    borderWidth: 1,
    width: "70%",
  },
});

export default LandingPage;
