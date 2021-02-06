import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Platform, StatusBar, View } from 'react-native';

function HomeScreen(props) {
    return (
        <ImageBackground
            style = {styles.background}
            source={require('../assets/homeBackground.png')}
            
        >
            <View style = {styles.nextButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    nextButton: {
        width: '100%',
        height: 70,
        backgroundColor:"#fc5c65",
    }
})

export default HomeScreen;