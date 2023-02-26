import React, {useState} from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { addUser } from '../../store/reducers/usersReducer';
import store from '../../store/store';
import UserHeading from './UserHeading';
import UsersList from './UsersList';

const UserPageMain = ({setCometyMainActive}) => {
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    function addUserHandler() {
        store.dispatch(addUser([{ name, number }]));
    }

    return (
        <View>
            <UserHeading setName={setName} setNumber={setNumber} addUserHandler={addUserHandler} />
            <UsersList/>
            <Button mode="outlined" onPress={() => setCometyMainActive(true)}>Proceed</Button>
        </View>
    )
}

export default UserPageMain