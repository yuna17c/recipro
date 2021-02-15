import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Image, Platform, StatusBar, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/homeBackground.png')}
        >
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image
                    source={require("../assets/homeButton.png")}
                    style={styles.homeButton}
                />
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    homeButton: {
        marginBottom: 35,
    }
})

export default HomeScreen;