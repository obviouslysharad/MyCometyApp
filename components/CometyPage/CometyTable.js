import React from "react";
import { DataTable, Button } from "react-native-paper";
import { getActiveMonth, getUsersData } from "../../store/reducers/cometyData/cometyDataSelector";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet } from "react-native";
import CustomSwitch from "../CommonComponents/CustomSwitch";
import { getAllMonthsData } from "../../store/reducers/cometyMonthly/cometyMonthlySelector";

const CometyTable = () => {
  const activeMonth = getActiveMonth();
  const allMonthsData= getAllMonthsData();
  // console.log(allMonthsData)
  return (
    <DataTable style = {{zIndex: -1}}>
      <DataTable.Header>
        <DataTable.Title style={styles.center}>Name</DataTable.Title>
        <DataTable.Title style={styles.center}>Amount</DataTable.Title>
        <DataTable.Title style={styles.center}>Date</DataTable.Title>
        <DataTable.Title style={styles.center}>Toggle</DataTable.Title>
      </DataTable.Header>
      {allMonthsData?.[activeMonth]?.userData?.map((memberData) => (
        <DataTable.Row
          style={memberData.isWinner && { backgroundColor: "#b8dec5" }}
          key={uuidv4()}
        >
          <DataTable.Cell>{memberData?.memberName}</DataTable.Cell>
          <DataTable.Cell style={styles.center}>
            {memberData?.amount}
          </DataTable.Cell>
          <DataTable.Cell style={styles.center}></DataTable.Cell>
          <DataTable.Cell style={styles.center}>
            <CustomSwitch />
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const styles = StyleSheet.create({
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
