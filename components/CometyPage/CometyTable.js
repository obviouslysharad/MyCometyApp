import React from "react";
import { DataTable, Checkbox, Text } from "react-native-paper";
import "react-native-get-random-values";
import { StyleSheet, View } from "react-native";
import {
  setActivePopup,
  setActivePopupProps,
} from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";
import {
  activeMonthMembersList,
  activeMonthSelector,
  winnerOfTheMonthSelector,
} from "../../store/reducers/cometyDetails/cometyDetailsSelector";
import { colorPalette } from "../../utils/styleUtils";
import Animated, { FadeInLeft, FadeOut } from "react-native-reanimated";

const CometyTable = () => {
  const activeMonth = activeMonthSelector();
  const activeMonthMembers = activeMonthMembersList();
  const winnerOfTheMonth = winnerOfTheMonthSelector();
  const onCheckBoxClicked = (memberData) => {
    if(!memberData.amount) {
      return alert("Please select a winner before marking")
    }
    store.dispatch(setActivePopup("PAID_POPUP"));
    store.dispatch(
      setActivePopupProps({ activeMonth: activeMonth, memberData: memberData })
    );
  };
  return (
    <View style={{ height: "100%" }}>
      {!winnerOfTheMonth?.memberId && (
        <Animated.View entering={FadeInLeft} exiting = {FadeOut}>
        <Text style={styles.textLabel}>PLEASE SELECT A WINNER</Text>
        </Animated.View>
      )}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.center}>Name</DataTable.Title>
          <DataTable.Title style={styles.center}>Amount</DataTable.Title>
          <DataTable.Title style={styles.center}>Date</DataTable.Title>
          <DataTable.Title style={styles.center}>Paid</DataTable.Title>
        </DataTable.Header>
        {activeMonthMembers?.map((memberData) => (
          <View key={memberData?.memberId}>
            <DataTable.Row
              style={memberData?.isWinner && { backgroundColor: "#b8dec5" }}
              key={memberData.memberId}
            >
              <DataTable.Cell>{memberData?.memberName}</DataTable.Cell>
              <DataTable.Cell style={styles.center}>
                {memberData?.amount}
              </DataTable.Cell>
              <DataTable.Cell style={styles.center}>
                {memberData?.date}
              </DataTable.Cell>
              <DataTable.Cell style={styles.center}>
                <Checkbox
                  disabled={false}
                  onPress={() => onCheckBoxClicked(memberData)}
                  status={memberData.paid ? "checked" : "unchecked"}
                  color={colorPalette.sweetGreenColor}
                  uncheckedColor="red"
                />
              </DataTable.Cell>
            </DataTable.Row>
          </View>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    width: "100%",
    backgroundColor: "#FFDF00",
    padding: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  center: {
    justifyContent: "center",
  },
  paidButton: {
    backgroundColor: "#50C878",
  },
  unpaidButton: {
    backgroundColor: "#FF3131",
  },
});

export default CometyTable;
