import { useState } from "react";
import { StyleSheet } from "react-native";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import { SafeAreaView } from 'react-native-safe-area-context';
import UserPageMain from "../UserPage/UserPageMain";

export function Home() {
    const [cometyMainActive, setCometyMainActive] = useState(false);
    const [users, setUsers] = useState([]);
    return (<SafeAreaView style={styles.container} >
        {cometyMainActive && <BottomNavigation />}
        {!cometyMainActive && <UserPageMain users={users} setCometyMainActive={setCometyMainActive} />}
    </SafeAreaView>)
}

const styles = StyleSheet.create(
    {
        container: { flex: 1, flexDirection: 'row' }
    }
)