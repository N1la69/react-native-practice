import { View, Text } from "react-native";
import React from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  return (
    <View>
      <Text>Parent Component</Text>
      <ChildComp name="Nilanjan" />
    </View>
  );
};

export default ParentComp;
