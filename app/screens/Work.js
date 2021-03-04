import 'react-native-gesture-handler';
import React, { useRef, useState, useEffect } from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { useIsFocused } from '@react-navigation/native';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';
import Swiper from 'react-native-swiper';
import { firestore } from 'firebase';
import { storage } from 'firebase';

function Work({ route, navigation }) {
    const { userValue } = route.params;
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;

    const fadein1 = () => {
        Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 90,
            useNativeDriver: false,
        }).start();
    };

    const fadein2 = () => {
        Animated.timing(fadeAnim2, {
            toValue: 1.5,
            duration: 90,
            useNativeDriver: false,
        }).start();
    };

    const fadein3 = () => {
        Animated.timing(fadeAnim3, {
            toValue: 1.5,
            duration: 90,
            useNativeDriver: false,
        }).start();
    };

    // const clicked = (id) => {
    //     alert("clicked")
    //     console.log(id)
    // }


    const [taskDisplay, setTaskDisplay] = React.useState([]);
    //const [otherUser, setOtherUser]=React.useState('')
    var otherUser = "";
    const [task1, setTask] = React.useState('')
    const [docId, setDocId] = React.useState('');

    //const reference = storage().ref('garden1.png').getDownloadURL();

    if (userValue == "4161112222") {
        otherUser = "9053334444";
    }
    else otherUser = "4161112222";

    const isFocused = useIsFocused();

    useEffect(() => {
    }, [isFocused]);

    let user = firestore()
        .collection('users')
        .doc(otherUser)
    user.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                setTask(docSnapshot.get("task1"));
            }
        });

    useEffect(() => {
        const subscriber =
            firestore().collection("tasks").where("user", "==", otherUser).orderBy("time", "desc")
                .get()
                .then((docSnapshot) => {
                    const taskArray = [];
                    docSnapshot.forEach((doc) => {
                        //console.log(doc.data());
                        taskArray.push(doc.data());
                    })
                    setTaskDisplay(taskArray);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        return () => subscriber;
    }, [task1])


    //const arr = [...taskDisplay].map((_, i) => i);
    //console.log(taskDisplay.length);

    var itemArray = []
    const displayGardenArray = taskDisplay.map((item, index) => {
        itemArray.push(item.taskId)
        //console.log(itemArray)
        return (
            <View key={index} style={styles.rowContainer}>
                <View style={styles.colContainer}>
                    <Text style={styles.taskTitle}>{item.title}</Text>
                    <Text style={styles.taskDes}>{item.description}</Text>
                    <View style={styles.rowContainer}>
                        <Text style={styles.taskUrg}>{item.urgency}</Text>
                        <Image source={require('../assets/coin.png')} style={{ width: '7%', resizeMode: 'contain', bottom: 15, marginLeft: 13 }}></Image>
                        <Text style={styles.taskPoints}>{item.points}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Gardening', { itemArray, index })}>
                    <Image source={item.image == "../assets/garden1.png" ? require("../assets/garden1.png") : item.image == "../assets/garden2.png" ? require("../assets/garden2.png") : require("../assets/task_place.png")}
                        style={{ alignSelf: 'center', borderRadius: 13, marginRight: 50, marginTop: 10, }}>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }
    )


    return (
        <View style={styles.parentContainer}>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image
                        source={require('../assets/browse_bar.png')}
                    >
                    </Image>
                </View>
                <View style={styles.scroll}>
                    <ScrollView >
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.item}>
                                <Image
                                    source={require('../assets/saveIcon.png')}
                                    style={styles.cat_item}
                                >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item}>
                                <Image
                                    source={require('../assets/friendIcon.png')}
                                    style={styles.cat_item}
                                >
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.category}>
                            <TouchableOpacity style={styles.slider}>
                                <Image
                                    source={require('../assets/backSlider.png')}
                                    style={styles.cat_item}
                                >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item} onPress={fadein1} >
                                <Animated.View style={[
                                    styles.fadingContainer,
                                    { borderWidth: fadeAnim1 }
                                ]}>
                                    <Image
                                        source={require('../assets/gardening_cat.png')}
                                        style={styles.cat_item}
                                    ></Image>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item} onPress={fadein2} >
                                <Animated.View style={[
                                    styles.fadingContainer,
                                    { borderWidth: fadeAnim2 }
                                ]}>
                                    <Image
                                        source={require('../assets/plumbing_cat.png')}
                                        style={styles.cat_item}
                                    ></Image>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.item} onPress={fadein3} >
                                <Animated.View style={[
                                    styles.fadingContainer,
                                    { borderWidth: fadeAnim3 }
                                ]}>
                                    <Image
                                        source={require('../assets/gardening_cat.png')}
                                        style={styles.cat_item}
                                    ></Image>
                                </Animated.View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.slider}>
                                <Image
                                    source={require('../assets/frontSlider.png')}
                                    style={styles.cat_item}
                                >
                                </Image>
                            </TouchableOpacity>

                        </View>
                        <View>
                            <ImageBackground
                                source={require('../assets/gardening.png')}
                                style={styles.taskContainer}>
                                <Swiper style={styles.taskSubContainer} loop={false} showsPagination={false}>
                                    {displayGardenArray}
                                </Swiper>
                            </ImageBackground>
                        </View>
                        <View>
                            <ImageBackground
                                source={require('../assets/plumbing.png')}
                                style={styles.taskContainer}>
                                <Swiper style={styles.taskSubContainer} showsPagination={false} loop={false}>
                                    {/* <View style={{flex:1, flexDirection: 'row', alignContent: 'center'}}>
                                        </View> */}
                                    <View style={styles.rowContainer}>
                                        <View style={styles.colContainer}>
                                            <Text style={styles.taskTitle}>Broken Faucet</Text>
                                            <Text style={styles.taskDes}>My kitchen faucet's been dripping non-stop, think it's an issue with plumbing</Text>
                                            <View style={styles.rowContainer}>
                                                <Text style={styles.taskUrg}>next week</Text>
                                                <Image source={require('../assets/coin.png')} style={{ width: '7%', resizeMode: 'contain', bottom: 15, marginLeft: 13 }}></Image>
                                                <Text style={styles.taskPoints}>15</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require("../assets/plumbing1.png")}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginRight: 50, marginTop: 10, }}>
                                            </Image>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.rowContainer}>
                                        <View style={styles.colContainer}>
                                            <Text style={styles.taskTitle}>Frozen Pipe</Text>
                                            <Text style={styles.taskDes}>Water pipe clogged due to ice, would be nice if fixed</Text>
                                            <View style={styles.rowContainer}>
                                                <Text style={styles.taskUrg}>today</Text>
                                                <Image source={require('../assets/coin.png')} style={{ width: '7%', resizeMode: 'contain', bottom: 15, marginLeft: 13 }}></Image>
                                                <Text style={styles.taskPoints}>40</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require("../assets/plumbing2.png")}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginRight: 50, marginTop: 10, }}>
                                            </Image>
                                        </TouchableOpacity>
                                    </View>
                                </Swiper>
                            </ImageBackground>
                        </View>
                        <View>
                            <ImageBackground
                                source={require('../assets/delivery.png')}
                                style={styles.taskContainer}>
                                <Swiper style={styles.taskSubContainer} showsPagination={false} loop={false}>
                                    <View style={styles.rowContainer}>
                                        <View style={styles.colContainer}>
                                            <Text style={styles.taskTitle}>Drop-Off Lunch</Text>
                                            <Text style={styles.taskDes}>Could anyone help drop off our daughter's lunch? Our car is at the repair shop</Text>
                                            <View style={styles.rowContainer}>
                                                <Text style={styles.taskUrg}>today</Text>
                                                <Image source={require('../assets/coin.png')} style={{ width: '7%', resizeMode: 'contain', bottom: 15, marginLeft: 13 }}></Image>
                                                <Text style={styles.taskPoints}>12</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require("../assets/delivery1.png")}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginRight: 50, marginTop: 10, }}>
                                            </Image>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.rowContainer}>
                                        <View style={styles.colContainer}>
                                            <Text style={styles.taskTitle}>Grocery pick up</Text>
                                            <Text style={styles.taskDes}>Groceries really need to picked up but my leg is broken and currenty cannot drive!</Text>
                                            <View style={styles.rowContainer}>
                                                <Text style={styles.taskUrg}>next week</Text>
                                                <Image source={require('../assets/coin.png')} style={{ width: '7%', resizeMode: 'contain', bottom: 15, marginLeft: 13 }}></Image>
                                                <Text style={styles.taskPoints}>10</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require("../assets/delivery2.png")}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginRight: 50, marginTop: 10, }}>
                                            </Image>
                                        </TouchableOpacity>
                                    </View>
                                </Swiper>
                            </ImageBackground>
                        </View>
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
    fadingContainer: {
        backgroundColor: colors.secondary,
        borderWidth: 0,
        borderColor: 'white',
        borderRadius: 9,
        width: '92%',
        alignSelf: 'center'
    },
    taskSubContainer: {
        height: 200,
        marginTop: 160,
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
    scroll: {
        flex: 28,
        backgroundColor: colors.primary,
    },
    cat_item: {
        alignSelf: 'center',
    },
    slider: {
        flex: 1,
        alignSelf: 'center',
    },
    item: {
        flex: 4,
    },
    category: {
        flexDirection: 'row',
        width: '91%',
        alignSelf: 'center',
    },
    options: {
        flexDirection: 'row',
        width: '41%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 19,
    },

    taskContainer: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 35,
        marginHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 0,
        paddingHorizontal: 5,
    },
    frame: {
        alignSelf: 'center',
        marginTop: 30,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center'
    },
    colContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center'
    },
    taskTitle: {
        color: colors.coffee,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 25,
        marginBottom: 10,
        marginRight: 10,
    },
    taskDes: {
        color: colors.coffee,
        fontSize: 11,
        marginLeft: 50,
        marginTop: 15,
        marginRight: 10,
        bottom: 20,
    },
    taskUrg: {
        color: colors.primary,
        fontSize: 11,
        marginLeft: 50,
        marginRight: 10,
        bottom: 10,
    },
    taskPoints: {
        color: colors.primary,
        fontSize: 11,
        bottom: 10,

    }


});

export default Work;