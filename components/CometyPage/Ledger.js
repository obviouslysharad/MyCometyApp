import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import {
  activeCometyAmountSelector,
  activeMonthSelector,
  getActiveMonthLedgerSelector,
} from "../../store/reducers/cometyDetails/cometyDetailsSelector";

const Ledger = () => {
  const ledgerDetails = getActiveMonthLedgerSelector();
  const activeMonth = activeMonthSelector();

  if (ledgerDetails.length == 0) {
    return (
      <Animated.View entering={FadeIn} style={styles.noPaymentContainer}>
        <Text style={styles.noPaymentText}>No one paid yet 😭 </Text>
      </Animated.View>
    );
  }

  return (
    <Animated.View entering={FadeIn}>
      <View style={styles.ledgerContainer}>
        <Text style={styles.tableHeader}>{activeMonth} LEDGER</Text>
        {ledgerDetails.map(({ date, memberName, amount }) => (
          <View style={styles.rowStyling}>
            <Text>{memberName}</Text>
            <Text>{date}</Text>
            <Text>{amount}</Text>
          </View>
        ))}
      </View>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  noPaymentContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  noPaymentText: {
    padding: 40,
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 20,
  },
  ledgerContainer: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  tableHeader: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  rowStyling: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
});

export default Ledger;
