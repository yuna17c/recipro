import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, TouchableOpacity, Text, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import "firebase/firestore";
import * as firebase from 'firebase';
import Login from './Login';

function BottomBar({ navigation }) {

    return (

        <View style={styles.barContainer}>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Dashboard')}
                    style={styles.workButton}>
                    <Image
                        source={require("../assets/dashboardButton.png")}
                        style={styles.buttonItem}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Work')}
                    style={styles.workButton}>
                    <Image
                        source={require("../assets/workButton.png")}
                        style={styles.buttonItem}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SendRequest')}
                    style={styles.sendButton}>
                    <Image
                        source={require("../assets/sendButton.png")}
                        style={styles.buttonItem}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Message')}
                    style={styles.chatButton}>
                    <Image
                        source={require("../assets/chatButton.png")}
                        style={styles.buttonItem}
                    />
                </TouchableOpacity>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
    },
    container: {
        backgroundColor: colors.primary,
        flex: 25,
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
    bottomBar: {
        position: 'absolute',
        marginBottom: 30,
    },
    profilePic: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 115,
    },
    profileName: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 270,
    },
    barContainer: {
        flex: 2,
        backgroundColor: colors.secondary,
    },
    buttons: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
    },
    sendButton: {
        flex: 1,
    },
    chatButton: {
        flex: 1,
    },
    workButton: {
        flex: 1,
    },
    buttonItem: {
        alignSelf: 'center',
    }
})


export default BottomBar;