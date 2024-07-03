import React from 'react';
import {observer} from 'mobx-react-lite';
import {Button, Text, View, StyleSheet} from 'react-native';
import counterStore from '../store/store';

const Counter = observer(() => {
  return (
    <View style={styles.container}>
      <Text>Mob X Implementation</Text>
      <Text style={styles.count}>{counterStore.count}</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title="Increment" onPress={counterStore.increment} />
        <View style={{width: 10}} />
        <Button title="Decrement" onPress={counterStore.decrement} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default Counter;
