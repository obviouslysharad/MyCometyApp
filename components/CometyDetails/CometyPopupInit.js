import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Modal } from "react-native-paper";
import {
  getActivePopup,
  getActivePopupProps,
} from "../../store/reducers/commonData/commonDataSelector";
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
        return <CometyMemberAdd activePopupProps={activePopupProps} />;
      case "MEMBER_CONFIRM":
        return <CometyStartConfirm activePopupProps={activePopupProps} />;
      case "LUCKY_DRAW":
        return <CometyLuckyDraw activePopupProps={activePopupProps} />;
      case "PAID_POPUP":
        return <PaidPopup activePopupProps={activePopupProps} />;
    }
  };
  return (
    <Modal visible={activePopup} style={styles.modalContainer}>
      <Animated.View entering={SlideInDown.delay(0)} style={styles.container}>
        {renderActivePopup()}
      </Animated.View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    position: "absolute",
    height: "100%",
  },
  container: {
    maxHeight: "100%",
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingBottom: Platform.OS === "ios" ? 80 : 30,
  },
});

export default CometyPopupInit;
