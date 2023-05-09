import React, { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import { Modal } from "react-native-paper";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import { getActivePopup, getActivePopupProps } from "../../store/reducers/commonData/commonDataSelector";
import store from "../../store/store";
import CometyLuckyDraw from "./CometyLuckyDraw";
import CometyMemberAdd from "./CometyMemberAdd";
import CometyStartConfirm from "./CometyStartConfirm";
import Animated, { SlideInDown } from "react-native-reanimated";
import PaidPopup from "./PaidPopup";

const CometyPopupInit = () => {
  const activePopup = getActivePopup();
  const activePopupProps = getActivePopupProps();
  const renderActivePopup = () => {
    switch (activePopup) {
      case "MEMBER_ADD":
        return <CometyMemberAdd activePopupProps = {activePopupProps}/>;
      case "MEMBER_CONFIRM":
        return <CometyStartConfirm activePopupProps = {activePopupProps}/>;
      case "LUCKY_DRAW":
        return <CometyLuckyDraw activePopupProps = {activePopupProps}/>;
      case "PAID_POPUP":
        return <PaidPopup activePopupProps = {activePopupProps}/>;
    }
  };
  return (
    <Modal
      onDismiss={() => store.dispatch(setActivePopup(""))}
      visible={activePopup}
      style={styles.modalContainer}
    >
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={350}>
        <Animated.View entering={SlideInDown.delay(0)} style={styles.container}>
          {renderActivePopup()}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    maxHeight: Dimensions.get("window").height,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
});

export default CometyPopupInit;
