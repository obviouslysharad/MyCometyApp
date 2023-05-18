import { StyleSheet, View } from "react-native";
import LandingPage from "../LandingPage/LandingPage";
import CometyMainPage from "../CometyPage/CometyMainPage";
import { getActiveScreen } from "../../store/reducers/commonData/commonDataSelector";

export function Home() {
  const activeScreen = getActiveScreen();
  function renderActiveScreen() {
    switch (activeScreen) {
      case "CREATE_COMETY":
        return <LandingPage />;
      case "MAIN_SCREEN":
        return <CometyMainPage />;
    }
  }
  return <View style={styles.container}>{renderActiveScreen()}</View>;
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
