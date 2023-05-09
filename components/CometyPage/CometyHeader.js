import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Text } from "react-native-paper";
import { getActiveMonth } from "../../store/reducers/cometyData/cometyDataSelector";
import SelectInput from "../CommonComponents/SelectInput";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CometyHeader = () => {
  const activeMonth = getActiveMonth();
  const [listEnable, setListEnable] = useState(false);
  useEffect(() => {
    setStatusBarBackgroundColor("white", true);
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <TouchableWithoutFeedback onPress={() => setListEnable(true)}>
          <Text textColor="#1a1629" style={styles.textStyling}>
            {activeMonth}
            <Icon name="chevron-down" size={18} color='white' />
          </Text>
        </TouchableWithoutFeedback>
        {listEnable && <SelectInput setListEnable={setListEnable} />}
      </View>
  
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderColor: "#808080",
    zIndex: 100
  },
  containerMain: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  textStyling: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 5,
    alignSelf: 'center'
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
