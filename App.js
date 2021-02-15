import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';
import Dashboard from './app/screens/Dashboard';
import HomeScreen from './app/screens/HomeScreen';
import Login from './app/screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
