import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import store from "../../store/store";
import { updateMemberData } from "../../store/reducers/cometyMonthly/cometyMonthlyReducer";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import { updatePaidUserData } from "../../store/reducers/cometyDetails/cometyDetailsReducer";
import DateTimePicker from "../CommonComponents/DateTimePicker";
import { useState } from "react";
import { getFormattedDate } from "../../utils/commonUtils";

const LeftSwipeActions = () => {
  return (
    <View style={styles.swipeableLeftCont}>
      <Text style={styles.swipeableLeftText}>PAID</Text>
    </View>
  );
};

const PaidPopup = ({ activePopupProps }) => {
  const [date, setDate] = useState(new Date());
  const onSwipeableLeftOpenHandler = () => {
    const payload = { ...activePopupProps?.memberData, paid: true, date: getFormattedDate(date) }
    // store.dispatch(updateMemberData(payload));
    store.dispatch(updatePaidUserData(payload));
    store.dispatch(setActivePopup(""));
  };
  return (
    <View style = {styles.container}>
      <Text style={styles.textStyle}>
        {activePopupProps.memberData.memberName} has paid
      </Text>
      <View style={styles.paidDateContainer}>
        <Text>Paid Date:</Text>
        <DateTimePicker date={date} setDate={setDate} />
      </View>
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
  container: {
    paddingHorizontal: 10
  },
  textStyle: {
    fontSize: 18,
    alignSelf: "center",
    padding: 20,
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
  paidDateContainer: {
    padding: 15,
  },
});

export default PaidPopup;
