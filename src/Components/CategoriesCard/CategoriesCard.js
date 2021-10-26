import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function CategoriesCard({categori, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image
            source={{uri: categori.strCategoryThumb}}
            style={styles.image}
          />
          <Text style={styles.title}> {categori.strCategory} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  },
  inner_container: {
    flexDirection: 'row',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
  },
});
