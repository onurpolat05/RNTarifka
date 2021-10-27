import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  ScrollView,
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
      <ScrollView>
        <Image style={styles.image} source={{uri: meals[0].strMealThumb}} />
        <Text style={styles.title}>{meals[0].strMeal}</Text>
        <Text style={styles.sub_title}>{meals[0].strArea}</Text>
        <View style={styles.seperator}></View>
        <Text>{meals[0].strInstructions}</Text>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => Linking.openURL(meals[0].strYoutube)}
            style={styles.button}>
            <Text style={styles.text}>Watch on Youtube</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    minHeight: h / 3,
    width: w,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#737373',
  },
  title: {
    color: '#A62D2A',
    fontWeight: 'bold',
    fontSize: 25,
  },
  sub_title: {
    color: '#A62D2A',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    marginTop: 5,
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
