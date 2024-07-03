import {View, Text, Button} from 'react-native';
import React, {Suspense, useEffect, useState} from 'react';

const LazyTest = () => {
  const [val, setVal] = useState<number>();
  const [load, setLoad] = useState<boolean>(false);

  const loadAddFx = async () => {
    const {add} = await import('./src/functions/functions.ts');
    let ans = add(1, 2);
    console.log(ans);
    setVal(ans);
  };

  const LazyComp = React.lazy(
    () => import('./src/components/LazyComponent.tsx'),
  );

  return (
    <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{alignSelf: 'center'}}>Lazy Loading Implementation</Text>
      <Suspense>
        <Text>{'add(2,3) = ' + val}</Text>
      </Suspense>
      <Button
        title="Lazy Load"
        onPress={() => {
          loadAddFx();
          setLoad(true);
        }}
        color={'red'}
      />

      <Suspense fallback={<Text>Loading</Text>}>
        {load && <LazyComp />}
      </Suspense>
    </View>
  );
};

export default LazyTest;
