import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, Text, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { back } from 'react-native/Libraries/Animated/src/Easing';

function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logoImage}>
                </Image>

                <Image
                    source={require('../assets/portfolio.png')}
                    style={styles.portfolioBox}>
                </Image>
                <Image
                    source={require('../assets/daniPic.png')}
                    style={styles.profilePic}>
                </Image>
                <Image
                    source={require('../assets/daniName.png')}
                    style={styles.profileName}>
                </Image>
                <Image
                    source={require('../assets/daniBio.png')}
                    style={styles.profileBio}>
                </Image>
                <Image
                    source={require('../assets/portfolio_details.png')}
                    style={styles.portfolioBox1}>
                </Image>
            </ScrollView>

            <Image
                source={require('../assets/bottom_bar.png')}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    nextButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logoImage: {
        marginTop: 20,
        alignSelf: 'center',
    },
    portfolioBox: {
        marginBottom: 30,
    },
    portfolioBox1: {
        bottom: 0,
    },
    bottomBar: {
        position: 'absolute',
        marginBottom: 30,
    },
    profilePic: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 96,
    },
    profileName: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 270,
    },
    profileBio: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 303,
    },
})


export default Dashboard;