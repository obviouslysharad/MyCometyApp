import React, { useState } from "react";
import { Switch } from "react-native-paper";
import { View } from "react-native";
import DateTimePicker from "./DateTimePicker";

const CustomSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <View>
      <Switch value = {isSwitchOn} onValueChange={setIsSwitchOn} />
    </View>
  );
};

export default CustomSwitch;
