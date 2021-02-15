import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Image, Platform, StatusBar, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/homeBackground.png')}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.homeButton}>
                <Image source={require('../assets/homeButton.png')} />
            </TouchableOpacity>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    homeButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 24,
        alignItems: 'center',

    }
})

export default HomeScreen;