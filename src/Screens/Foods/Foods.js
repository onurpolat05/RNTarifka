import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import * as Request from '../../Hooks/useFetch/useFetch';
import FoodsCard from '../../Components/FoodsCard/FoodsCard';
export default function Foods({route, navigation}) {
  const {categori} = route.params;
  const {loading, data, error} = Request.useFetch(
    `${Config.API_URL_FOODS}${categori}`,
  );
  const {meals} = data;
  const handleMealSelect = mealId => {
    navigation.navigate('Detail', {mealId});
  };
  const renderFoods = ({item}) => (
    <FoodsCard foods={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );
  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  return (
    <View>
      <FlatList
        data={meals}
        renderItem={renderFoods}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}
