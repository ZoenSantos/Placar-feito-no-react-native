import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador em React Native</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.count}>{count1}</Text>
        <Button title="Incrementar" onPress={incrementCount1} />
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.count}>{count2}</Text>
        <Button title="Incrementar" onPress={incrementCount2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  count: {
    fontSize: 30,
    marginRight: 10,
  },
});
