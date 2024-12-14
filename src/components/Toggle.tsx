import { useState } from "react";
import { View, Text, Button } from "react-native";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View>
      <Text>{isOn ? "ON" : "OFF"}</Text>
      <Button title="Toggle" onPress={() => setIsOn(!isOn)} />
    </View>
  );
};

export default Toggle;
