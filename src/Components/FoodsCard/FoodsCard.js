import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from 'react-native';
import {w, h, W} from '../../utiles/dimensions';

export default function FoodsCard({foods, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: foods.strMealThumb}}
          style={styles.image_container}
          imageStyle={styles.image}>
          <View style={styles.text_container}>
            <Text style={styles.text}> {foods.strMeal} </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  },
  image_container: {
    flex: 1,
    width: w * 0.93,
    height: h / 5,
    marginVertical: 8,
    marginLeft: 12,
  },
  image: {
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 10,
    borderBottomRightRadius: 15,
  },
  text_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'right',
    backgroundColor: '#000000c0',
    paddingRight: 5,
    overflow: 'hidden',
    borderRadius: 10,
  },
});
