import { View, Text, Button } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponents</Text>
      <Button title="Button" onPress={() => alert("Button Clicked")} />
    </View>
  );
};

export default ButtonComponent;
