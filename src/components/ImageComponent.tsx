import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Text>
        ImageComponent:{" "}
        <Image
          source={require("../assets/download.png")}
          style={{ width: 100, height: 100 }}
        />
      </Text>
    </View>
  );
};

export default ImageComponent;
