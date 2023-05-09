import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Animated, { FadeInUp } from "react-native-reanimated";
import { getCometyData } from "../../store/reducers/cometyData/cometyDataSelector";

const AccountsMainPage = () => {
  const cometyData = getCometyData();
  return (
    <Animated.View entering={FadeInUp} style={styles.container}>
      <View style={styles.activeAccountContainer}>
        <Text style={styles.textStyling}>
          Amount: {cometyData?.cometyAmount}
        </Text>
        <Text style={styles.textStyling}>
          Start Date: {cometyData?.cometyStartDate}
        </Text>
        <Text style={styles.textStyling}>
          Number of Members: {cometyData?.usersData?.length}
        </Text>
      </View>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  activeAccountContainer: {
    borderWidth: 1,
    borderColor: '#F9F6EE',
    borderRadius: 8,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default AccountsMainPage;
