import { View, Text, Button } from "react-native";
import { NumberContext } from "../context/NumberContext";
import { useContext } from "react";

const AddRandom = () => {
  const { addNumber } = useContext(NumberContext);

  const handleAddNumber = () => {
    addNumber({
      id: String(Math.floor(Math.random() * 100)),
      name: "Number " + Math.floor(Math.random() * 100),
    });
  };

  return (
    <View>
      <Button title="Add Random" onPress={handleAddNumber} />
    </View>
  );
};

export default AddRandom;
