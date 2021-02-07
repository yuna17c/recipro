import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';

function Dashboard({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/dashboard.png')}
        >
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
        backgroundColor: "#fc5c65",
    }
})


export default Dashboard;