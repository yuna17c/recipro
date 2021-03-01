import 'react-native-gesture-handler';
import React, { useRef, useState, useEffect } from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';
import Swiper from 'react-native-swiper';
import { firestore } from 'firebase';

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

    const clicked = (id) => {
        alert("clicked")
        console.log(id)
    }

    const [taskDisplay, setTaskDisplay]= React.useState([]);
    const addMoreTask = (newTask) => {
        setTaskDisplay({taskDisplay: [...taskDisplay, newTask]});
      }

    firestore()
        .collection("tasks")
        .where("user","==","9053334444")
        .get()
        .then((docSnapshot)=>{
            const taskArray =[];
            docSnapshot.forEach((doc)=>{
                //console.log(doc.get("category"));
                taskArray.push(doc.data());
                // addMoreTask({
                //     id: taskDisplay.length,
                //     category: doc.get("category"),
                // })
            })
            setTaskDisplay(taskArray);
        })
    
    //const arr = [...taskDisplay].map((_, i) => i);
    //console.log(taskDisplay.length);

    const displayByArray = taskDisplay.map((item, index)=>
        <View key = {index} 
            style={{flex:1, flexDirection: 'row', alignContent: 'center'}}>
            <TouchableOpacity>
                <Image source={require('../assets/task_place.png')}
                    style={{ alignSelf: 'center', borderRadius: 13, marginHorizontal:10, }}>
                </Image>
            </TouchableOpacity>
        </View>
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
                                <Swiper style={styles.taskSubContainer} activeDotColor={colors.secondary}>
                                    {displayByArray}
                                    <View style={{flex:1, flexDirection: 'row', alignContent: 'center'}}>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/garden1.png')}
                                            style={{ alignSelf: 'center', borderRadius: 13, marginLeft:26, marginRight: 10 }}>
                                        </Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/garden2.png')}
                                            style={{ alignSelf: 'center', borderRadius: 13, marginRight:26, marginLeft: 10}}>

                                        </Image>
                                    </TouchableOpacity>
                                    </View>
                                </Swiper>
                            </ImageBackground>
                        </View>
                        <View>
                            <ImageBackground
                                source={require('../assets/plumbing.png')}
                                style={styles.taskContainer}>
                                    <Swiper style={styles.taskSubContainer} activeDotColor={colors.secondary}>
                                        <View style={{flex:1, flexDirection: 'row', alignContent: 'center'}}>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/garden1.png')}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginLeft:26, marginRight: 10 }}>
                                            </Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/garden2.png')}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginRight:26, marginLeft: 10}}>

                                            </Image>
                                        </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/garden1.png')}
                                                style={{ alignSelf: 'center', borderRadius: 13, marginHorizontal:10, }}>
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