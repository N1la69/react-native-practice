import { View, Text } from "react-native";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";
import ParentComp from "../components/ParentComp";
import Toggle from "../components/Toggle";
import DataFetching from "../components/DataFetching";

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      {/* <ButtonComponent /> */}
      {/* <ImageComponent /> */}
      {/* <ParentComp /> */}
      <Toggle />
      <DataFetching />
    </View>
  );
};

export default Index;
