import React from 'react';
import {View, Text} from 'react-native';
import useFetch from '../../Hooks/useFetch/useFetch';
import Config from 'react-native-config';

export default function Categories() {
  const {loading, data, error} = useFetch(Config.API_URL_CATEGORIES);
  console.log(data);
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
}
