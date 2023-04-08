import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const InputSelect = ({ listItems, keyword, onSelect }) => {
  const [filteredItems, setFilteredItems] = useState(listItems);
  useEffect(() => {
    setFilteredItems(
      listItems?.filter((item) => item?.memberName?.includes(keyword))
    );
  }, [keyword]);
  if (!keyword) return;
  return (
    <View style={styles.container}>
      {filteredItems.map((item) => (
        <Text onPress={() => onSelect(item)} style={styles.textStyle}>
          {item?.memberName}
        </Text>
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  textStyle: {
    padding: 4,
    backgroundColor: "#f9f7ff",
    borderColor: "#351c75",
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    marginRight: 8,
    marginLeft: 8,
  },
  container: {
    position: "absolute",
    top: 64,
    zIndex: 1,
    width: "100%",
    maxHeight: 60,
    overflow: "scroll",
  },
});

export default InputSelect;
