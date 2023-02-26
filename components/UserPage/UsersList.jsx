import React from 'react'
import { FlatList, View, Text, ScrollView } from 'react-native'
import {useSelector} from 'react-redux'

const UsersList = () => {
  const users = useSelector(state => state.users)
  return (
    <ScrollView horizontal = {true}>
    <FlatList data = {users} renderItem = {({item, index}) => (
        <View style = {{flexDirection: "row"}}>
            <Text>{index}</Text>
            <Text>{item?.name}</Text>
            <Text>{item?.number}</Text>
        </View>
    )}/>
    </ScrollView>

  )
}

export default UsersList