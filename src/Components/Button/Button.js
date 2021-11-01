import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function Button({text, onPress, loading}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="orange" />
      ) : (
        <Text style={styles.title}> {text}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fb8c00',
  },
});
