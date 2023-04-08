import React from "react";
import { Button, DataTable } from "react-native-paper";
import { getUsersData } from "../../store/reducers/cometyData/cometyDataSelector";

const CometyTable = () => {
  const membersData = getUsersData();
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Phone Number</DataTable.Title>
        <DataTable.Title>Paid</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Paid</DataTable.Title>
      </DataTable.Header>
      {membersData.map((memberData) => (
        <DataTable.Row>
          <DataTable.Cell>{memberData?.memberName}</DataTable.Cell>
          <DataTable.Cell>{memberData?.phoneNumber}</DataTable.Cell>
          <DataTable.Cell>Yes</DataTable.Cell>
          <DataTable.Cell>26th Mar</DataTable.Cell>
          <DataTable.Cell><Button>Paid</Button></DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default CometyTable;
