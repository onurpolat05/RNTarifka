import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './Screens/Categories/Categories';
import FoodDetails from './Screens/FoodDetails/FoodDetails';
import Foods from './Screens/Foods/Foods';
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Foods" component={Foods} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
