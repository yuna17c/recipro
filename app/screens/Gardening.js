import 'react-native-gesture-handler';
import React, { useRef, useEffect } from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';
import "firebase/firestore";
import { firestore } from 'firebase';
import { Ionicons } from '@expo/vector-icons';

function Gardening({ route, navigation }) {
    const [title, setTitle] = React.useState('')
    const [points, setPoints] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [duration, setDuration] = React.useState('')
    const [urgency, seturgency] = React.useState('')
    const [user, setUser] = React.useState('')
    const { itemArray, index, otherUser, userValue } = route.params;
    const [name, setName] = React.useState('')
    const [job, setJob] = React.useState('')
    console.log(itemArray)
    console.log(index)
    console.log(itemArray[index])
    
    let task = firestore()
        .collection('tasks')
        .doc(itemArray[index])
        .get()
    task.then((docSnapshot) => {
        if (docSnapshot.exists) {
            setTitle(docSnapshot.get("title"));
            setPoints(docSnapshot.get("points"));
            setDesc(docSnapshot.get("description"));
            setLocation(docSnapshot.get("location"));
            setDuration(docSnapshot.get("duration"));
            seturgency(docSnapshot.get("urgency"));
            setUser(docSnapshot.get("user"));
        }
    })

    // console.log(otherUser);

    let users = firestore()
        .collection('users')
        .doc(otherUser)
    users.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                setName(docSnapshot.get("name"));
                setJob(docSnapshot.get("occupation"));
            }
        });


    const goToMessage = e => {
        firestore()
        .collection('tasks')
        .doc(itemArray[index])
        .update({
            status: "Accepted"
        })
        .then(() => {
            console.log("acceptance");
            navigation.navigate('Message', {userValue})
        })
    }
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
                                <View style={styles.subHeader}>
                                    <Text style={styles.headerTitle}>{title}</Text>
                                    <Text style={styles.headerLoc}>{location}</Text>
                                </View>

                                <Image style={styles.headerImg} source={require('../assets/coin.png')} />
                                <Text style={styles.headerCoin}>{points}</Text>
                            </View>
                            <View style={styles.request}>
                                <Ionicons name="ios-person-circle-outline" style={styles.requestIcon} />
                                <View>
                                    <Text style={styles.requested1}>{name}</Text>
                                    <Text style={styles.requested2}>{job}</Text>
                                </View>
                            </View>

                            <Text style={styles.desc}>{desc}</Text>


                            <View style={styles.detailContainer}>
                                <Image source={require('../assets/dottedLine.png')} />
                                <View style={styles.subContainer}>
                                    <Text style={styles.subItem1}>Duration</Text>
                                    <Text style={styles.subItem2}>{duration} hours</Text>
                                </View>
                                <Image source={require('../assets/dottedLine.png')} />
                                <View style={styles.subContainer}>
                                    <Text style={styles.subItem1}>Urgency</Text>
                                    <Text style={styles.subItem2}>{urgency} </Text>
                                </View>


                                <Image source={require('../assets/dottedLine.png')} />
                            </View>

                        </View>
                        <TouchableOpacity style={styles.bottomBar}
                            onPress={(e) => goToMessage(e)}>
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
    }


const styles = StyleSheet.create({
    requestIcon: {
        color: colors.coffee,
        width: '14%',
        height: '100%',
        fontSize: 37,
    },
    request: {
        marginVertical: 10,
        flexDirection: 'row',
        width: '83%',
    },
    requested1: {
        color: colors.coffee,
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    requested2: {
        color: colors.coffee,
        fontSize: 14,
        alignSelf: 'flex-start',
    },
    headerLoc: {
        fontSize: 15,
        color: colors.primary,
        fontWeight: 'bold',
        paddingLeft: 2.5,
        textAlign: 'left',
    },
    subItem1: {
        width: '50%',
        color: colors.coffee,
        fontWeight: 'bold',
        fontSize: 15,
    },
    subItem2: {
        width: '50%',
        textAlign: 'right',
        fontSize: 15,
        color: colors.coffee,
    },
    detailContainer: {
        width: '83%',
        paddingBottom: 50,
        paddingTop: 20,
    },
    subContainer: {
        flexDirection: 'row',
        width: '88%',
        margin: 6,
    },
    desc: {
        width: '80%',
        fontSize: 16,
        color: colors.coffee,
        marginVertical: 10,
    },
    barContainer: {
        flexDirection: 'row',
        borderRadius: 11,
        backgroundColor: colors.secondary,
        padding: 6,
        width: '83%',
        justifyContent: 'center',
        margin: 8,
    },
    barItem1: {
        color: colors.cream,
        fontWeight: 'bold',
        width: '50%',
        fontSize: 18,
        paddingLeft: 14,
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
        width: '82%',
        paddingVertical: 6,
        alignSelf: 'center',
    },
    subHeader: {
        width: '70%',

    },
    headerTitle: {
        color: colors.coffee,
        fontWeight: 'bold',
        fontSize: 24,
    },
    headerCoin: {
        width: '19%',
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 27,
        marginLeft: 7,
        marginTop: 5,
    },
    headerImg: {
        width: '11%',
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