import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import store from "../../store/store";
import { updateMemberData } from "../../store/reducers/cometyMonthly/cometyMonthlyReducer";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";

const LeftSwipeActions = () => {
  return (
    <View style={styles.swipeableLeftCont}>
      <Text style={styles.swipeableLeftText}>PAID</Text>
    </View>
  );
};

const PaidPopup = ({ activePopupProps }) => {
  const onSwipeableLeftOpenHandler = () => {
    const payload = {
      activeMonth: activePopupProps?.activeMonth,
      memberData: { ...activePopupProps?.memberData, paid: true },
    };
    store.dispatch(updateMemberData(payload));
    store.dispatch(setActivePopup(''));
  };
  return (
    <View>
      <Text style = {styles.textStyle}>{activePopupProps.memberData.memberName} has paid</Text>
      <GestureHandlerRootView>
        <Swipeable
          renderLeftActions={LeftSwipeActions}
          onSwipeableLeftOpen={onSwipeableLeftOpenHandler}
        >
          <View style={styles.swipeableDefaultCont}>
            <Text style={styles.swipeableDefaultText}>
              Swipe to Confirm &gt;&gt;
            </Text>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {},
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
    padding: 20
  },
  swipeableDefaultCont: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "black",
    borderRadius: 32,
  },
  swipeableDefaultText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
  swipeableLeftCont: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#50ad6f",
    flex: 1,
    color: "white",
    borderRadius: 32,
  },
  swipeableLeftText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default PaidPopup;
