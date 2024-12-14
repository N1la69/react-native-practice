import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      setData(result);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View>
      <Text>DataFetching:</Text>
      <FlatList
        data={data}
        renderItem={({ item }: any) => <Text>{item.title}</Text>}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default DataFetching;
