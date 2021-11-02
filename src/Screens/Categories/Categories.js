import React from 'react';
import {View, Button, FlatList, StyleSheet} from 'react-native';
import * as Request from '../../Hooks/useFetch/useFetch';
import Config from 'react-native-config';
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import {useDispatch} from 'react-redux';
export default function Categories({navigation}) {
  const {loading, data, error} = Request.useFetch(Config.API_URL_CATEGORIES);
  const dispatch = useDispatch();

  const handleCategoriSelect = categori => {
    navigation.navigate('Meals', {categori});
  };
  const {categories} = data;
  const renderCategories = ({item}) => (
    <CategoriesCard
      categori={item}
      onSelect={() => handleCategoriSelect(item.strCategory)}
    />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategories}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}
