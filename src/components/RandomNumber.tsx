import { View, Text, FlatList } from "react-native";
import { NumberContext } from "../context/NumberContext";
import { useContext } from "react";

const RandomNumber = () => {
  const { num } = useContext(NumberContext);

  return (
    <View>
      <Text>Random Number List: </Text>
      <FlatList
        keyExtractor={(item) => item.toString()}
        data={num}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default RandomNumber;
