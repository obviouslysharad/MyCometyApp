import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { getActiveMonth } from "../../store/reducers/cometyData/cometyDataSelector";
import SelectInput from "../CommonComponents/SelectInput";
import CometyHeaderHidden from "./CometyHeaderHidden";

const CometyHeader = () => {
  const activeMonth = getActiveMonth();
  const [hiddenEnable, setHiddenEnable] = useState(false);
  const [listEnable, setListEnable] = useState(false);
  useEffect(() => {
    setStatusBarBackgroundColor("#b4b0ff", true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <TouchableWithoutFeedback onPress={() => setListEnable(true)}>
          <Text textColor="#1a1629" style={styles.textStyling}>
            {activeMonth}
          </Text>
        </TouchableWithoutFeedback>
        {listEnable && <SelectInput setListEnable={setListEnable} />}
      </View>
      {hiddenEnable && <CometyHeaderHidden />}
      <TouchableWithoutFeedback onPress={() => setHiddenEnable(!hiddenEnable)}>
        <View style={styles.toggleBarContainerStyle}>
          <View style={styles.toggleBarStyle}></View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: "#b4b0ff",
    borderColor: "#808080",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  containerMain: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textStyling: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  toggleBarContainerStyle: {
    width: "100%",
    height: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleBarStyle: {
    height: 4,
    width: 32,
    backgroundColor: "#808080",
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default CometyHeader;
