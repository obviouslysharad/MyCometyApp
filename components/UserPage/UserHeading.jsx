import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button } from 'react-native-paper';

const UserHeading = ({ setName, setNumber, addUserHandler }) => {
  return (
    <SafeAreaView>
      <Text variant="titleLarge" >Please add users</Text>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Mobile Number" onChangeText={setNumber} />
      <Button mode="contained" onPress={addUserHandler}>Add User</Button>
    </SafeAreaView>

  )
}

export default UserHeading