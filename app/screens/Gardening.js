import 'react-native-gesture-handler';
import React, { useRef } from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';

function Gardening({ navigation }) {

    return (
        <View style={styles.parentContainer}>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image
                        source={require('../assets/gardening_top.png')}
                    >
                    </Image>
                </View>
                <View style={styles.scroll}>
                    <ScrollView >
                        <View>
                            <Image
                                source={require('../assets/garden_photo.png')} style={styles.photo}
                            >
                            </Image>
                        </View>
                        <View style={styles.mainContainer}>
                            <Text >Hello</Text>
                        </View>
                        <TouchableOpacity style={styles.bottomBar}
                            onPress={() => navigation.navigate('Message')}>
                            <Image
                                source={require('../assets/sendmsg_bar.png')}
                            >
                            </Image>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>

        </View>

    )
        ;
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        flex: 2,
        backgroundColor: colors.secondary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        backgroundColor: colors.beige,
        width: '90%',
        height: 400,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 40,
    },
    bottomBar: {
        flex: 2,
        backgroundColor: colors.secondary,
        width: '100%',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        marginTop: 30,
        marginBottom: 30,
        alignSelf: 'center',
    },
    scroll: {
        flex: 25,
        width: '100%',
        backgroundColor: colors.primary,
    },

})

export default Gardening;