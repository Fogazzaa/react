import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Posts from './screens/Posts';
import Users from './screens/Users';
import ToDos from './screens/ToDos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="ToDos" component={ToDos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
