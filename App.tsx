import {View, Text, NativeModules, TouchableOpacity} from 'react-native';
import React from 'react';
import Counter from './src/components/Counter';
import LazyTest from './LazyTest';

const {TestModule} = NativeModules;

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Counter />
      <LazyTest />
      <Text>Native Module Implementation Android</Text>
      <TouchableOpacity
        style={{
          height: 35,
          width: '90%',
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginVertical: 5,
        }}
        onPress={async () => {
          try {
            const result = await TestModule.sayHelloWithPromise('World');
            alert(result);
          } catch (error) {
            console.error(error);
          }
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Receive a value from Native Android using Promise
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 35,
          width: '90%',
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginVertical: 5,
        }}
        onPress={async () => {
          TestModule.sayHello('Say Hellow, ');
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Print a Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 35,
          width: '90%',
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginVertical: 5,
        }}
        onPress={async () => {
          try {
            const result = await TestModule.getBatteryHealth();
            alert(JSON.stringify(result));
          } catch (error) {
            console.error(error);
          }
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Get Battery Health
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
