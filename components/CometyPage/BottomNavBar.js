import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNavBar = ({setActiveTab}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setActiveTab('HOME')}>
        <Icon name="home" style = {styles.iconStyling} size={24} color={"black"} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setActiveTab('LEDGER')}>
        <Icon name="note-check-outline" style = {styles.iconStyling} size={24} color={"black"} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setActiveTab('ACCOUNTS')}>
        <Icon name="account-circle" style = {styles.iconStyling} size={24} color={"black"} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  iconStyling: {
    padding: 20
  }
});

export default BottomNavBar;
