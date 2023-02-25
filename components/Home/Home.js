import { useState } from "react";
import { Button, FlatList, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import UsersList from "../UsersList/UsersList";

export function Home() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    function addUserHandler() {
        setUsers([...users, {name, number}]);
    }
    return (<SafeAreaView >
        <Text>Please add users</Text>
        <TextInput placeholder="Name" onChangeText={setName}/>
        <TextInput placeholder="Mobile Number" onChangeText={setNumber}/>
        <Button title = "Add" onPress={addUserHandler}/>
        {users && <UsersList users= {users} />}
    </SafeAreaView>)
}