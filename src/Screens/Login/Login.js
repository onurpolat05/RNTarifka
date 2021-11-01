import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, Alert} from 'react-native';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import {w, h} from '../../utiles/dimensions';
import {Formik} from 'formik';
import {usePost} from '../../Hooks/usePost/usePost';
import Config from 'react-native-config';
export default function Login({navigation}) {
  const {data, post, error, loading} = usePost();
  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }
  if (error) {
    Alert.alert('Dükkan', 'Hata oluştu!');
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı!');
    } else {
      navigation.navigate('Categories');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Enter your username"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Enter your password"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Log In" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  logo_container: {},
  logo: {
    width: w,
    height: h / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
  },
  body_container: {
    flex: 1,
  },
});
