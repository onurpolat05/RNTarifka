import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input({
  placeholder,
  value,
  onType,
  iconName,
  isSecure,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={25} color="gray" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});
