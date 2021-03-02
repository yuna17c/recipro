import 'react-native-gesture-handler';
import React, { useRef } from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';
import "firebase/firestore";
import { firestore } from 'firebase';

function Gardening({ navigation }) {
    const [title, setTitle] = React.useState('')
    const [points, setPoints] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [duration, setDuration] = React.useState('')
    const [urgency, seturgency] = React.useState('')
    const [user, setUser] = React.useState('')
    let task = firestore()
        .collection('tasks')
        .doc("1032")
    task.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                setTitle(docSnapshot.get("title"));
                setPoints(docSnapshot.get("points"));
                setDesc(docSnapshot.get("description"));
                setLocation(docSnapshot.get("location"));
                setDuration(docSnapshot.get("duration"));
                seturgency(docSnapshot.get("urgency"));
                setUser(docSnapshot.get("user"));
            }
        });
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
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>{title}</Text>
                                <Image style={styles.headerImg} source={require('../assets/coin.png')} />
                                <Text style={styles.headerCoin}>{points}</Text>
                            </View>

                            <Text>Requested by: {user}</Text>
                            <Text style={styles.desc}>{desc}</Text>

                            <View style={styles.barContainer}>
                                <Text style={styles.barItem1}>Duration</Text>
                                <Text style={styles.barItem2}>{duration} hours</Text>
                            </View>

                            <View style={styles.barContainer}>
                                <Text style={styles.barItem1}>Urgency</Text>
                                <Text style={styles.barItem2}>{urgency}</Text>
                            </View>
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
    desc: {
        width: '83%',
        fontSize: 16,
        color: colors.coffee,
        marginBottom: 18,
    },
    barContainer: {
        flexDirection: 'row',
        borderRadius: 11,
        backgroundColor: colors.secondary,
        padding: 4,
        width: '83%',
        justifyContent: 'center',
        margin: 8,
    },
    barItem1: {
        color: colors.cream,
        fontWeight: 'bold',
        width: '50%',
        fontSize: 18,
        paddingLeft: 17,
    },
    barItem2: {
        color: colors.cream,
        width: '50%',
        fontSize: 18,
        textAlign: 'right',
        paddingRight: 20,
    },
    header: {
        flexDirection: 'row',
        width: '83%',
        paddingVertical: 6,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        width: '78%',
        color: colors.coffee,
        fontWeight: 'bold',
        fontSize: 24,
    },
    headerCoin: {
        width: '13%',
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 26,
        marginLeft: 7
    },
    headerImg: {
        width: '9%',
        resizeMode: 'contain',
        height: '100%',
    },
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
        width: '89%',
        height: 400,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 40,
    },
    bottomBar: {
        flex: 2,
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
        flex: 28,
        width: '100%',
        backgroundColor: colors.primary,
    },

})

export default Gardening;