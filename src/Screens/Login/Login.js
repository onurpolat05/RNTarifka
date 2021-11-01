import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import {w, h} from '../../utiles/dimensions';
import {Formik} from 'formik';
export default function Login() {
  function handleLogin(values) {
    console.log(values);
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
            <Button text="Log In" onPress={handleSubmit} />
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
