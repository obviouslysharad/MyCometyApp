import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ledger from "./Ledger";
import CometyHome from "./CometyHome";

const Tab = createBottomTabNavigator();

export default function BottomNavigationScreen() {
  return (
    <CometyHome />
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    //   tabBar={({ navigation, state, descriptors, insets }) => (
    //     <BottomNavigation.Bar
    //       navigationState={state}
    //       safeAreaInsets={insets}
    //       onTabPress={({ route, preventDefault }) => {
    //         const event = navigation.emit({
    //           type: "tabPress",
    //           target: route.key,
    //           canPreventDefault: true,
    //         });

    //         if (event.defaultPrevented) {
    //           preventDefault();
    //         } else {
    //           navigation.navigate({ name: route.name, merge: true });
    //           // navigation.dispatch({
    //           //   navigation.navigate(route.name, route.params),
    //           //   target: state.key,
    //           // });
    //         }
    //       }}
    //       renderIcon={({ route, focused, color }) => {
    //         const { options } = descriptors[route.key];
    //         if (options.tabBarIcon) {
    //           return options.tabBarIcon({ focused, color, size: 24 });
    //         }

    //         return null;
    //       }}
    //       getLabelText={({ route }) => {
    //         const { options } = descriptors[route.key];
    //         const label =
    //           options.tabBarLabel !== undefined
    //             ? options.tabBarLabel
    //             : options.title !== undefined
    //             ? options.title
    //             : route.title;

    //         return label;
    //       }}
    //     />
    //   )}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={CometyHome}
    //     options={{
    //       tabBarLabel: "Home",
    //       tabBarIcon: ({ color, size }) => {
    //         return <Icon name="home" size={size} color={color} />;
    //       },
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Ledger"
    //     component={Ledger}
    //     options={{
    //       tabBarLabel: "Ledger",
    //       tabBarIcon: ({ color, size }) => {
    //         return <Icon name="finance" size={size} color={color} />;
    //       },
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Accounts"
    //     component={SettingsScreen}
    //     options={{
    //       tabBarLabel: "Accounts",
    //       tabBarIcon: ({ color, size }) => {
    //         return <Icon name="cog" size={size} color={color} />;
    //       },
    //     }}
    //   />
    // </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
