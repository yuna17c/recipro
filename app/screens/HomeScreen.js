import 'react-native-gesture-handler';
import * as React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { TouchableOpacity, ImageBackground, StyleSheet, Image, Platform, StatusBar, View, Button } from 'react-native';
=======
import { TouchableOpacity, Image, ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';
>>>>>>> df963b220ee616e061a51a818fee8ebf2e1b07b3
=======

import { TouchableOpacity, Image, ImageBackground, StyleSheet, Platform, StatusBar, View, Button } from 'react-native';
>>>>>>> 1acefe5fffd913ef1fbb0c326c2f0d492c3ce987

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
<<<<<<< HEAD
<<<<<<< HEAD
            source={require('../assets/homeBackground.png')}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.homeButton}>
                <Image source={require('../assets/homeButton.png')} />
            </TouchableOpacity>

=======
=======
>>>>>>> 1acefe5fffd913ef1fbb0c326c2f0d492c3ce987
            source={require('../assets/homeBackground.png')}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
                <Image source={require("../assets/up_arrow.png")}/>
            </TouchableOpacity>
            
            {/* <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Dashboard')}
            /> */}
<<<<<<< HEAD
>>>>>>> df963b220ee616e061a51a818fee8ebf2e1b07b3
=======
>>>>>>> 1acefe5fffd913ef1fbb0c326c2f0d492c3ce987
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