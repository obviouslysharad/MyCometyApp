import React from "react";
import { Button, DataTable, Switch } from "react-native-paper";
import { getUsersData } from "../../store/reducers/cometyData/cometyDataSelector";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet } from "react-native";

const CometyTable = () => {
  const membersData = getUsersData();
  console.log(membersData)
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title style = {styles.center}>Name</DataTable.Title>
        <DataTable.Title style = {styles.center}>Amount</DataTable.Title>
        <DataTable.Title style = {styles.center}>Winner</DataTable.Title>
        <DataTable.Title style = {styles.center}>Date</DataTable.Title>
        <DataTable.Title style = {styles.center}>Toggle</DataTable.Title>
      </DataTable.Header>
      {membersData.map((memberData) => (
        <DataTable.Row key={uuidv4()}>
          <DataTable.Cell >{memberData?.memberName}</DataTable.Cell>
          <DataTable.Cell style = {styles.center}>{memberData?.amount}</DataTable.Cell>
          <DataTable.Cell style = {styles.center}>{memberData?.isWinner ? "true": "false"}</DataTable.Cell>
          <DataTable.Cell style = {styles.center}>26th Mar</DataTable.Cell>
          <DataTable.Cell style = {styles.center}><Switch value={true} /></DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
  paidButton: {
    backgroundColor: '#50C878',
  },
  unpaidButton: {
    backgroundColor: '#FF3131'
  }
});

export default CometyTable;
