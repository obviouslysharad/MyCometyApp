import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";
import InputSelect from "../CommonComponents/InputSelect";
import { colorPalette } from "../../utils/styleUtils";
import { updateWinnerUsersData } from "../../store/reducers/cometyDetails/cometyDetailsReducer";
import {
  activeMonthMembersList,
  activeMonthSelector,
  currentUsersDataSelector,
} from "../../store/reducers/cometyDetails/cometyDetailsSelector";

const CometyLuckyDraw = () => {
  const [selectedMember, setSelectedMember] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [randomButtonLoading, setRandomButtonLoading] = useState(false);
  const [interest, setInterest] = useState(0);
  const usersData = activeMonthMembersList();
  const onSelect = (selectedItem) => {
    setSelectedMember(selectedItem);
    setShowDropDown(false);
  };

  const changeTextHandler = (text) => {
    setSelectedMember({ memberName: text });
    setShowDropDown(true);
  };

  const onBlurHandler = () => {
    setShowDropDown(false);
  };

  const getRandomMember = () => {
    setRandomButtonLoading(true);
    setInterest("2");
    setSelectedMember(usersData[Math.floor(Math.random() * usersData.length)]);
    setRandomButtonLoading(false);
  };

  const submitHandler = () => {
    const { dispatch } = store;
    if (!selectedMember?.memberId)
      return alert("Please select a member from the list!");
    if (!interest) return alert("Please set some interest!");
    dispatch(
      updateWinnerUsersData({
        interest: interest,
        selectedMember: selectedMember,
      })
    );
    dispatch(setActivePopup(""));
  };
  return (
    <View style = {styles.container}>
      <Text style={styles.textStyling}>Comety Lucky Draw</Text>
      <View>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Member Name"
          value={selectedMember?.memberName}
          onChangeText={changeTextHandler}
          onBlur={onBlurHandler}
          outlineColor={colorPalette.inputDefaultOutlineColor}
          activeOutlineColor={colorPalette.inputActiveOutlineColor}
          textColor={colorPalette.textInputTextColor}
        />
        {showDropDown && (
          <InputSelect
            listItems={usersData}
            keyword={selectedMember?.memberName}
            onSelect={onSelect}
          />
        )}
        <Button
          style={styles.randomButton}
          loading={randomButtonLoading}
          onPress={getRandomMember}
          textColor={colorPalette.primaryBtnColor}
        >
          Random Member
        </Button>
      </View>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Interest"
        onChangeText={setInterest}
        value={interest}
        outlineColor={colorPalette.inputDefaultOutlineColor}
        activeOutlineColor={colorPalette.inputActiveOutlineColor}
        textColor={colorPalette.textInputTextColor}
      />
      <Button
        mode="elevated"
        style={styles.submitButton}
        uppercase
        textColor="white"
        buttonColor={colorPalette.primaryBtnColor}
        onPress={submitHandler}
      >
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textStyling: {
    alignSelf: "center",
    fontSize: 20,
    padding: 5,
    marginBottom: 10,
  },
  textInput: {
    margin: 8,
    zIndex: -1,
    backgroundColor: colorPalette.textInputBackgroundColor,
  },
  buttonStyle: {
    margin: 8,
  },
  randomButton: {
    width: 140,
    color: "black",
  },
  submitButton: {
    marginTop: 16,
  },
});

export default CometyLuckyDraw;
