import 'react-native-gesture-handler';
import * as React from 'react';

import { TouchableOpacity, Image, ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/homeBackground.png')}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
                <Image source={require("../assets/up_arrow.png")}/>
            </TouchableOpacity>
            
            {/* <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Dashboard')}
            /> */}
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