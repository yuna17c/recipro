import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/homeBackground.png')}
        >
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Dashboard')}
            />
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

export default HomeScreen;