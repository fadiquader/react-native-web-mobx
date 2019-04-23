import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { observer } from "mobx-react-lite";
//
import { RootStoreContext } from "./stores/RootStore";

const App: React.FC = observer(() => {
  const [todoValue, setTodoValue] = useState('');
  const rootStore = useContext(RootStoreContext);
  return (
    <View>
      <Text>React native web</Text>
      <Text>Counter: {rootStore.counterStore.strCount}</Text>
      <View>
        <Button title="+" onPress={rootStore.counterStore.increment} />
      </View>
      <br/>
      <br/>
      <View>
        <Text>Todo list</Text>
        <View>
          <TextInput
            value={todoValue}
            onChangeText={txt => setTodoValue(txt)}
          />
          <Button
            title="+"
            onPress={() => {
              rootStore.todoStore.addTodoAsync(todoValue);
              setTodoValue('')
            }}
          />

        </View>
        <Text>{rootStore.todoStore.todoList}</Text>
      </View>
    </View>
  );
})

export default App;
