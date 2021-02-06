import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Platform, StatusBar, View } from 'react-native';

function Dashboard(props) {
    return (
        <ImageBackground source={require('../assets/home.png')}></ImageBackground>
    );
}

export default Dashboard;