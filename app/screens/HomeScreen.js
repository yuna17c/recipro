import 'react-native-gesture-handler';
import * as React from 'react';
<<<<<<< HEAD
import { TouchableOpacity, ImageBackground, StyleSheet, Image, Platform, StatusBar, View, Button } from 'react-native';
=======
import { TouchableOpacity, Image, ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';
>>>>>>> df963b220ee616e061a51a818fee8ebf2e1b07b3

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
<<<<<<< HEAD
            source={require('../assets/homeBackground.png')}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.homeButton}>
                <Image source={require('../assets/homeButton.png')} />
            </TouchableOpacity>

=======
            source={require('../assets/homeBackground.png')}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
                <Image source={require("../assets/up_arrow.png")}/>
            </TouchableOpacity>
            
            {/* <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Dashboard')}
            /> */}
>>>>>>> df963b220ee616e061a51a818fee8ebf2e1b07b3
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