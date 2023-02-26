import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import CometyMain from '../CometyPage/CometyMain';

const BottomNavigationComponent = () => {
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'CometyMain', title: 'Comety', focusedIcon: 'album'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        CometyMain: CometyMain
    });

    return (
        <BottomNavigation
            onIndexChange={setIndex}
            style = {styles.container}
            navigationState={{ index, routes }}
            renderScene={renderScene}
        />
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        borderWidth: 1,
    },
  });

export default BottomNavigationComponent;