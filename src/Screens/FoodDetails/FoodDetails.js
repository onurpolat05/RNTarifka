import React from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch/useFetch';

export default function FoodDetails({route}) {
  console.log(route.params.mealId);
  const {loading, data, error} = useFetch(
    `${Config.API_URL_FOODS}${route.params.mealId}`,
  );
  console.log(`${Config.API_URL_FOODS}${route.params.mealId}`);
  return (
    <View>
      <Text>Foods</Text>
    </View>
  );
}
