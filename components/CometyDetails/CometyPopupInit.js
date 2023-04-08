import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Modal } from "react-native-paper";
import CometyMemberAdd from "./CometyMemberAdd";
import CometyStartConfirm from "./CometyStartConfirm";

const CometyPopupInit = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [enableMemberAddPage, setEnableMemberAddPage] = useState(true);
  const [enableConfirmAddPage, setEnableConfirmAddPage] = useState(false);
  return (
    <Modal
      onDismiss={() => setModalVisible(false)}
      visible={modalVisible}
      style={styles.modalContainer}
    >
      <View style={styles.container}>
        {enableMemberAddPage && (
          <CometyMemberAdd
            setEnableMemberAddPage={setEnableMemberAddPage}
            setEnableConfirmAddPage={setEnableConfirmAddPage}
          />
        )}
        {enableConfirmAddPage && (
          <CometyStartConfirm setModalVisible={setModalVisible} />
        )}
      </View>
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 5,
    borderColor: "#E6E6FA",
  },
});

export default CometyPopupInit;
