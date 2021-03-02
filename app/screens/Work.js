import 'react-native-gesture-handler';
import React, { useRef, useState, useEffect } from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';
import Swiper from 'react-native-swiper';
import { firestore } from 'firebase';
import {storage} from 'firebase';

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


    const [taskDisplay, setTaskDisplay]= React.useState([]);
    //const [otherUser, setOtherUser]=React.useState('')
    var otherUser = "";
    const [task1, setTask] = React.useState('')
    const [imageArray, setImageArray] = React.useState([]);

    //const reference = storage().ref('garden1.png').getDownloadURL();

    if (userValue=="4161112222") {
        otherUser= "9053334444";
    }
    else otherUser = "4161112222";

    // findOtherUser();
    // console.log(otherUser);

    let user = firestore()
        .collection('users')
        .doc(otherUser)
    user.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                setTask(docSnapshot.get("task1"));
            }
        });

    useEffect(()=> {
        const subscriber = 
            firestore().collection("tasks").where("user","==",otherUser).orderBy("time","desc")
                .get()
                .then((docSnapshot)=>{
                    const taskArray =[];
                    docSnapshot.forEach((doc)=>{
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


    const displayGardenArray = taskDisplay.map((item, index)=>
        <TouchableOpacity key = {index}>
            <Image source={item.image=="../assets/garden1.png"? require("../assets/garden1.png"): item.image=="../assets/garden2.png"? require("../assets/garden2.png"): require("../assets/task_place.png")}
            //../assets/garden1.png
                style={{ alignSelf: 'center', borderRadius: 13, marginHorizontal:10, }}>
            </Image>
        </TouchableOpacity>
    )
    {/* <Image source={item.image=="../assets/garden1.png"? require("../assets/garden1.png"): item.image=="../assets/garden2.png"? require("../assets/garden2.png"): require("../assets/task_place.png") } */}
{/* <Image source = {require("../assets/garden1.png")} */}


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
                                <Swiper style={styles.taskSubContainer} loop={false} showsPagination= {false}>
                                    {displayGardenArray}
                                </Swiper>
                            </ImageBackground>
                        </View>
                        <View>
                            <ImageBackground
                                source={require('../assets/plumbing.png')}
                                style={styles.taskContainer}>
                                    <Swiper style={styles.taskSubContainer} showsPagination= {false} loop={false}>
                                        {/* <View style={{flex:1, flexDirection: 'row', alignContent: 'center'}}>
                                        </View> */}
                                        <TouchableOpacity>
                                            <Image source={require('../assets/garden1.png')}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginHorizontal:10, }}>
                                            </Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/garden1.png')}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginRight:26, marginLeft: 10}}>
                                            </Image>
                                        </TouchableOpacity>
                                    </Swiper>
                            </ImageBackground>
                        </View>
                        <View>
                            <ImageBackground
                                source={require('../assets/delivery.png')}
                                style={styles.taskContainer}>
                                    <Swiper style={styles.taskSubContainer} showsPagination= {false} loop={false}>
                                        {/* <View style={{flex:1, flexDirection: 'row', alignContent: 'center'}}>
                                        </View> */}
                                        <TouchableOpacity>
                                            <Image source={require('../assets/garden1.png')}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginHorizontal:10, }}>
                                            </Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/garden1.png')}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginRight:26, marginLeft: 10}}>
                                            </Image>
                                        </TouchableOpacity>
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
        marginTop: 50,
        marginHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 0,
        paddingHorizontal: 5,
    },
    frame: {
        alignSelf: 'center',
        marginTop: 30,
    },
});

export default Work;