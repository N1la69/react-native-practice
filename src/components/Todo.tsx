import { useReducer, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface Todo {
  id: string;
  text: string;
}

interface State {
  todos: Todo[];
}

interface AddTodo {
  type: "ADD_TODO";
  payload: string;
}

interface RemoveTodo {
  type: "REMOVE_TODO";
  payload: string;
}

type Action = AddTodo | RemoveTodo;

const initialState = {
  todos: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState<string>("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  const handleRemoveTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a Todo"
        value={input}
        onChangeText={setInput}
        className="border border-gray-300 rounded px-2 py-1"
      />

      <Button title="Add Todo" onPress={handleAddTodo} />

      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex justify-between items-center px-2">
            <Text className="">{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Text className="text-red-500">Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Todo;
