import { View, Text } from "react-native";

interface ChildProps {
  name: string;
}

const ChildComp = (props: ChildProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default ChildComp;
