import React from 'react';
import {View, Text} from 'react-native';

export default function Foods({route}) {
  const {categori} = route.params;
  console.log(categori);
  return (
    <View>
      <Text>Foods</Text>
    </View>
  );
}
