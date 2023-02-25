import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const BottomNavigationComponent = ({children}) => {
    const MusicRoute = () => <Text>Music</Text>;
    const AlbumsRoute = () => <Text>Albums</Text>;
    const RecentsRoute = () => <Text>Recents</Text>;
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const NotificationsRoute = () => <Text>Notifications</Text>;
    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
    });

    return (
        <SafeAreaView style = {{height: '100vh', width: '100vw'}}>
            <BottomNavigation
                onIndexChange={setIndex}
                navigationState={{ index, routes }}
                renderScene={renderScene}
            />
        </SafeAreaView>

    );
};


export default BottomNavigationComponent;