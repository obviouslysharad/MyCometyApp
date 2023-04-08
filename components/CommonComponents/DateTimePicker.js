import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getFormattedDate } from "../../utils/commonUtils";

const DateTimePicker = ({date, setDate}) => {
  const [dateFormatted, setDateFormatted] = useState(getFormattedDate());
  const [enableDatePopup, setEnableDatePopup] = useState(false);
  function onChangeHandler(e) {
    const dateObj = new Date(e?.nativeEvent?.timestamp || Date.now());
    setEnableDatePopup(false);
    setDate(dateObj);
    setDateFormatted(getFormattedDate(dateObj));
  }
  return (
    <View style = {styles.container}>
        {enableDatePopup && <RNDateTimePicker onChange={onChangeHandler} value={date} />}
        <Text style= {styles.textStyling} onPress = {() => setEnableDatePopup(true)}>{dateFormatted}</Text>
        {/* <Button style= {styles.buttonStyling} buttonColor = '#CBC3E3' onPress = {() => setEnableDatePopup(true)}>Change</Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textStyling: {
        alignSelf: 'center',
        borderWidth: 1,
        width: '100%',
        borderRadius: 4,
        padding: 14,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#E6E6FA'
    },
    buttonStyling: {
        alignSelf: 'center',
        marginLeft: 10
    }

})

export default DateTimePicker;
