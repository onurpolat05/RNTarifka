import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import Config from 'react-native-config';
import * as Request from '../../Hooks/useFetch/useFetch';
import {w, h, W} from '../../utiles/dimensions';

export default function FoodDetails({route}) {
  const {loading, data, error} = Request.useFetch(
    `${Config.API_URL_FOODS_DETAILS}${route.params.mealId}`,
  );
  const {meals} = data;
  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  console.log(meals);
  return (
    <SafeAreaView>
      <Image style={styles.image} source={{uri: meals[0].strMealThumb}} />
      <Text>{meals[0].strMeal}</Text>
      <Text>{meals[0].strArea}</Text>
      <View style={styles.seperator}></View>
      <Text>{meals[0].strInstructions}</Text>
      <Text
        style={{color: 'blue'}}
        onPress={() => Linking.openURL(meals[0].strYoutube)}>
        Google
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    minHeight: h / 3,
    width: w,
  },
  seperator: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
