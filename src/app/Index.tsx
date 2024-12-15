import { View, Text } from "react-native";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";
import ParentComp from "../components/ParentComp";
import Toggle from "../components/Toggle";
import DataFetching from "../components/DataFetching";
import Counter from "../components/Couter";
import Todo from "../components/Todo";
import { NumberProvider } from "../context/NumberContext";
import { SafeAreaView } from "react-native-safe-area-context";
import RandomNumber from "../components/RandomNumber";
import AddRandom from "../components/AddRandom";

import "../globals.css";

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      {/* <ButtonComponent /> */}
      {/* <ImageComponent /> */}
      {/* <ParentComp /> */}
      <Toggle />
      {/* <DataFetching /> */}
      <Counter />
      <Todo />

      <View>
        <NumberProvider>
          <SafeAreaView>
            <RandomNumber />
            <AddRandom />
          </SafeAreaView>
        </NumberProvider>
      </View>
    </View>
  );
};

export default Index;
