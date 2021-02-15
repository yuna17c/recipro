import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';
import Dashboard from './app/screens/Dashboard';
import HomeScreen from './app/screens/HomeScreen';
import Login from './app/screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Message from './app/screens/Message';
import Work from './app/screens/Work';
import SendRequest from './app/screens/SendRequest';

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
        <Stack.Screen name="SendRequest" component={SendRequest} />
        <Stack.Screen name="Work" component={Work} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
