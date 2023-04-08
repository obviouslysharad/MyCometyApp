import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import {
  getCometyData,
} from "../../store/reducers/cometyData/cometyDataSelector";
import Animated, {FadeInUp} from "react-native-reanimated";

const CometyHeaderHidden = () => {
  const cometyData = getCometyData();
  return (
    <Animated.View entering = {FadeInUp} style={styles.container}>
      <Text style={styles.textStyling}>Amount: {cometyData?.cometyAmount}</Text>
      <Text style={styles.textStyling}>Start Date: {cometyData?.cometyStartDate}</Text>
      <Text style={styles.textStyling}>Number of Members: {cometyData?.usersData?.length}</Text>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textStyling: {
    color: "#301934",
  },
});

export default CometyHeaderHidden;
