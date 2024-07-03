import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';

const LazyComponent: React.FC = () => {
  return (
    <View>
      <Text style={{alignSelf: 'center'}}>LazyComponent</Text>
      <ScrollView horizontal>
        {[1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9].map(
          x => (
            <Image
              alt="test image"
              onError={() => alert('error')}
              source={{
                uri: 'https://help.figma.com/hc/article_attachments/13404180161047',
              }}
              style={{height: 80, width: 80, padding: 10, margin: 10}}
            />
          ),
        )}
      </ScrollView>
    </View>
  );
};

export default LazyComponent;
