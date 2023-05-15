import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import Animated, { color, FadeInUp } from "react-native-reanimated";
import {
  resetSelectedCometyDetails,
  setActiveCometyId,
} from "../../store/reducers/cometyDetails/cometyDetailsReducer";
import {
  activeCometyIdSelector,
  activeCometyNameSelector,
  cometyListSelector,
} from "../../store/reducers/cometyDetails/cometyDetailsSelector";
import { setActiveScreen } from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";
import { colorPalette } from "../../utils/styleUtils";

const AccountsMainPage = () => {
  const activeName = activeCometyNameSelector();
  const cometyList = cometyListSelector();
  const activeCometyId = activeCometyIdSelector();
  function createCometyHandler() {
    store.dispatch(resetSelectedCometyDetails());
    store.dispatch(setActiveScreen("CREATE_COMETY"));
  }
  function switchHandler(cometyId) {
    store.dispatch(setActiveCometyId(cometyId));
  }
  return (
    <Animated.View entering={FadeInUp} style={styles.container}>
      <View style={styles.allAccountsContainer}>
        {cometyList?.map((comety) => {
          if (comety?.cometyId === activeCometyId) {
            return (
              <View style={styles.activeAccountContainer}>
                <Text style={styles.activeNameStyling}>{activeName}</Text>
                <View style={styles.detailsContainer}>
                  <Text style={styles.textKey}>Amount: </Text>
                  <Text style={styles.textValue}>{comety?.amount}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.textKey}>Start Date: </Text>
                  <Text style={styles.textValue}>{comety.startDate}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.textKey}>Number of Members: </Text>
                  <Text style={styles.textValue}>
                    {comety.monthlyData.JAN.usersData.length}
                  </Text>
                </View>
              </View>
            );
          }
          return (
            <View style={styles.otherAccountsContainer}>
              <Text>{comety.cometyName}</Text>
              <Button onPress={() => switchHandler(comety.cometyId)}>
                Switch
              </Button>
            </View>
          );
        })}
      </View>
      <View>
        <Button
          textColor="white"
          style={styles.createButton}
          onPress={createCometyHandler}
        >
          Create Comety
        </Button>
      </View>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  allAccountsContainer: {
    width: "60%",
  },
  activeAccountContainer: {
    borderRadius: 8,
    padding: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activeNameStyling: {
    alignSelf: "center",
    paddingBottom: 20,
    border: 1,
    borderColor: "black",
    fontWeight: "bold",
  },
  otherAccountsContainer: {
    borderWidth: 1,
    borderColor: "#F9F6EE",
    borderRadius: 8,
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    marginVertical: 10,
  },
  createButton: {
    backgroundColor: colorPalette.primaryBtnColor,
    padding: 5,
    marginTop: 10,
  },
});

export default AccountsMainPage;
