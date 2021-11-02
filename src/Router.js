import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './Screens/Categories/Categories';
import FoodDetails from './Screens/FoodDetails/FoodDetails';
import Foods from './Screens/Foods/Foods';
import Login from './Screens/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './Components/Loading/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
export default function Router() {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              headerTitleStyle: {color: 'orange'},
              headerTintColor: 'orange',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color="orange"
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
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
      )}
    </NavigationContainer>
  );
}
