import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useFetch from '../../Hooks/useFetch/useFetch';
import Config from 'react-native-config';
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard';

export default function Categories({navigation}) {
  const {loading, data, error} = useFetch(Config.API_URL_CATEGORIES);
  const handleCategoriSelect = categori => {
    navigation.navigate('Meals', {categori});
  };
  const renderCategories = ({item}) => (
    <CategoriesCard
      categori={item}
      onSelect={() => handleCategoriSelect(item.strCategory)}
    />
  );
  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCategories}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
