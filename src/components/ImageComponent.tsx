import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Text style={styles.textStyle}>
        ImageComponent:{" "}
        <Image
          source={require("../assets/download.png")}
          style={styles.image}
        />
      </Text>
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
  image: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 30,
    color: "red",
  },
});

export default ImageComponent;
