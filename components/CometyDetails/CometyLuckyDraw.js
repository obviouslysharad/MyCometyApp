import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { setInterestOfTheMonth, setWinnerOfTheMonth } from "../../store/reducers/cometyData/cometyDataReducer";
import { getUsersData } from "../../store/reducers/cometyData/cometyDataSelector";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";
import InputSelect from "../CommonComponents/InputSelect";

const CometyLuckyDraw = () => {
  const [selectedMember, setSelectedMember] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [randomButtonLoading, setRandomButtonLoading] = useState(false);
  const [interest, setInterest] = useState("");
  const usersData = getUsersData();

  const onSelect = (selectedItem) => {
    setSelectedMember(selectedItem);
    setShowDropDown(false);
  };

  const changeTextHandler = (text) => {
    setSelectedMember({memberName: text});
    setShowDropDown(true);
  };

  const onBlurHandler = () => {
    setShowDropDown(false);
  }

  const getRandomMember = () => {
    setRandomButtonLoading(true);
    setTimeout(() => {
      setInterest('2');
      setSelectedMember(
        usersData[Math.floor(Math.random() * usersData.length)]
      );
      setRandomButtonLoading(false);
    }, 500);
  };

  const submitHandler = () => {
    const { dispatch } = store;
    dispatch(setInterestOfTheMonth(interest));
    dispatch(setWinnerOfTheMonth(selectedMember));
    dispatch(setActivePopup(''));
  }

  return (
    <View>
      <Text style={styles.textStyling}>Comety Lucky Draw</Text>
      <View>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Member Name"
          value={selectedMember?.memberName}
          onChangeText={changeTextHandler}
          onBlur={onBlurHandler}
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
      />
      <Button mode="elevated" style={styles.submitButton} uppercase onPress={submitHandler}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    alignSelf: "center",
    fontSize: 20,
    padding: 5,
    marginBottom: 10,
  },
  textInput: {
    margin: 8,
    zIndex: -1,
  },
  buttonStyle: {
    margin: 8,
  },
  randomButton: {
    width: 140,
  },
  submitButton: {
    marginTop: 16,
  },
});

export default CometyLuckyDraw;
