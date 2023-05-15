import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingPage from "../LandingPage/LandingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CometyMainPage from "../CometyPage/CometyMainPage";
import { useState } from "react";
import { getActiveScreen } from "../../store/reducers/commonData/commonDataSelector";

const Stack = createNativeStackNavigator();

export function Home() {
  const activeScreen = getActiveScreen();
  function renderActiveScreen() {
    switch(activeScreen) {
      case 'CREATE_COMETY': return <LandingPage />;
      case 'MAIN_SCREEN': return <CometyMainPage />;
    }
  }
  return (
    <View style={styles.container}>
      { renderActiveScreen() }
    </View>
    // <SafeAreaView style={styles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       screenOptions={{
    //         headerShown: false,
    //       }}
    //     >
    //       <Stack.Screen name="LandingPage" component={LandingPage} />
    //       <Stack.Screen name="CometyPage" component={CometyMainPage} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    //   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    margin: 0,
    padding: 0,
  },
});
