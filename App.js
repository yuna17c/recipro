
import React from 'react';
import { View } from "react-native";
import Dashboard from './app/screens/Dashboard';
import HomeScreen from './app/screens/HomeScreen';
import { StackNavigator } from 'react-navigation';
import 'react-native-gesture-handler';

// const App = () => {
//   <NavigationContainer>
//     return <HomeScreen />;
//     return <Dashboard />;
//   </NavigationContainer>
// };

export default function App() {
  return <HomeScreen />;
  //return <Dashboard />;
}