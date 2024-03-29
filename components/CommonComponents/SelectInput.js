import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Animated, { FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated";
import { setActiveMonth } from "../../store/reducers/cometyDetails/cometyDetailsReducer.js";
import { monthsListSelector } from "../../store/reducers/cometyDetails/cometyDetailsSelector.js";
import store from "../../store/store.js";

const SelectInput = ({setListEnable}) => {
  const monthsList = monthsListSelector();
  function selectHandler(monthSelected) {
    store.dispatch(setActiveMonth(monthSelected))
    setListEnable(false);
  }
  return (
    <Animated.View entering={FadeInUp} style={styles.container} >
      <View style={styles.listContainer}>
        {monthsList.map((month) => (
          <TouchableWithoutFeedback onPress={() => selectHandler(month)} key = {month}>
            <Text style = {styles.textStyle}>{month}</Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginLeft: 10
  },
  listContainer: {
    position: "absolute",
    top: 25,
    width: 70,
    padding: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textStyle: {
    padding: 6
  }
});

export default SelectInput;
