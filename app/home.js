import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Home() {
  const [count, setCount] = useState(0); // Initialize the state

  const increment = () => {
    setCount(count + 1); // Update the state to increase the count
  };

  const decrement = () => {
    setCount(count - 1); // Update the state to decrease the count
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Pressable style={styles.button} onPress={increment}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={decrement}>
        <Text>Decrement</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    margin: 10,
  },
  button: {
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
});