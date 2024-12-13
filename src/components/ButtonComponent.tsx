import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Text>ButtonComponents</Text>
      <Button title="Button" onPress={() => alert("Button Clicked")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonComponent;
