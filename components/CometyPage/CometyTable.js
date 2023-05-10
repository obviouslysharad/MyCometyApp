import React from "react";
import { DataTable, Button, Checkbox, Text } from "react-native-paper";
import {
  getActiveMonth,
  getUsersData,
} from "../../store/reducers/cometyData/cometyDataSelector";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, View } from "react-native";
import { getAllMonthsData } from "../../store/reducers/cometyMonthly/cometyMonthlySelector";
import {
  setActivePopup,
  setActivePopupProps,
} from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";

const CometyTable = () => {
  const activeMonth = getActiveMonth();
  const allMonthsData = getAllMonthsData();
  const { winnerOfTheMonth = "" } = allMonthsData?.[activeMonth] || {winnerOfTheMonth: ''};
  const onCheckBoxClicked = (memberData) => {
    store.dispatch(setActivePopup("PAID_POPUP"));
    store.dispatch(
      setActivePopupProps({ activeMonth: activeMonth, memberData: memberData })
    );
  };
  return (
    <View>
      {!winnerOfTheMonth && <Text style = {styles.textLabel}>PLEASE SELECT A WINNER</Text>}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.center}>Name</DataTable.Title>
          <DataTable.Title style={styles.center}>Amount</DataTable.Title>
          <DataTable.Title style={styles.center}>Date</DataTable.Title>
          <DataTable.Title style={styles.center}>Paid</DataTable.Title>
        </DataTable.Header>
        {allMonthsData?.[activeMonth]?.userData?.map((memberData) => (
          <DataTable.Row
            style={memberData?.isWinner && { backgroundColor: "#b8dec5" }}
            key={uuidv4()}
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
                disabled = {!winnerOfTheMonth}
                onPress={() => onCheckBoxClicked(memberData)}
                status={memberData.paid ? "checked" : "unchecked"}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    width: '100%',
    backgroundColor: '#FFDF00',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
