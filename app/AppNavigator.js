import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import HomeScreen from "./screens/HomeScreen";
import Dashboard from "./screens/Dashboard";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator headerMode="none">
               //other options: "float", "screen"
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);