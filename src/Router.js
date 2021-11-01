import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './Screens/Categories/Categories';
import FoodDetails from './Screens/FoodDetails/FoodDetails';
import Foods from './Screens/Foods/Foods';
import Login from './Screens/Login/Login';
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Foods}
          options={{
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={FoodDetails}
          options={{
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
