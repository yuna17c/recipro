import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, Text, TouchableOpacity, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';

function Work({ navigation }) {
    return (
        <View style={styles.parentContainer}>
            <View style={styles.container}>
                <ScrollView >
                    <Image
                        source={require('../assets/browse_topbar.png')}
                        style={styles.topBar}
                    >
                    </Image>
                    <Image
                        source={require('../assets/frame.png')}
                        style={styles.frame}
                    >
                    </Image>
                    <Image
                        source={require('../assets/gardening.png')}
                        style={styles.gardening}
                    >
                    </Image>
                    <Image
                        source={require('../assets/plumbing.png')}
                        style={styles.plumbing}
                    >
                    </Image>
                </ScrollView>
            </View>
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
        </View>

    );
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
    },
    container: {
        flex: 25,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plumbing: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 50,
    },
    gardening: {
        alignSelf: 'center',
        marginTop: 30,
    },
    frame: {
        alignSelf: 'center',
        marginTop: 30,
    },
    topBar: {
        flex: 1,
    },
    bottomBar: {
        position: 'absolute',
        marginBottom: 30,
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

export default Work;