import 'react-native-gesture-handler';
import React, { useRef } from "react";
import { TouchableOpacity, Animated, ImageBackground, Text, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

function SendRequest({ route, navigation }) {
    const { userValue } = route.params;
    const [taskTitle, onTitleChangeText] = React.useState('')
    const [taskDescription, onDescriptionChangeText] = React.useState('')
    const [taskLocation, onSelectLocation] = React.useState('')
    const [taskDuration, onSelectDuration] = React.useState(0)
    const [taskUrgency, onSelectUrgency] = React.useState('')
    const [taskCategory, onSelectCategory] = React.useState('')

    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;

    const fadein1 = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim1, {
            toValue: 2.3,
            duration: 90,
            useNativeDriver: false,
        }).start();
    };
    const fadein2 = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim2, {
            toValue: 2.3,
            duration: 90,
            useNativeDriver: false,
        }).start();
    };
    const fadein3 = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim3, {
            toValue: 2.3,
            duration: 90,
            useNativeDriver: false,
        }).start();
    };

    const handleKeyPress = e => {}

    return (
        <View style={styles.parentContainer}>
            <View style={styles.barContainer}>
                <Image
                    source={require("../assets/post.png")}
                    style={styles.SendRequestButton}
                />
            </View>
            <View style={styles.container}>
                <ScrollView >
                    <Image
                        source={require('../assets/upload_image.png')}
                        style={styles.uploadImage}>
                    </Image>
                    <View style={styles.taskRequestContainer}>
                        <TextInput 
                            value = {taskTitle}
                            style={styles.titleTextInput}
                            placeholder="Title"
                            onChangeText={text => onTitleChangeText(text)}
                            placeholderTextColor={colors.coffee}>
                        </TextInput>
                        <TextInput 
                            value = {taskDescription}
                            style={styles.userTextInput}
                            placeholder="Description"
                            multiline={true}
                            onChangeText={text => onDescriptionChangeText(text)}>
                        </TextInput>
                        <Image
                            source={require('../assets/task_location.png')}
                            style={styles.taskTexts}>
                        </Image>
                        <DropDownPicker
                            items={[
                                {label: 'Oakville, ON', value: 'Oakville, ON'},
                                {label: 'Hamilton, ON', value: 'Hamilton, ON'},
                                {label: 'Burlington, ON', value: 'Burlington, ON'},
                            ]}
                            value = {taskLocation}
                            onChangeItem={item => onSelectLocation(item)}
                            style = {styles.DropDownPickerStyle}
                            dropDownStyle={{backgroundColor: colors.cream}}
                            itemStyle={{justifyContent: 'flex-start'}}
                            placeholder = 'Select Task Location'
                            selectedLabelStyle={{fontWeight: 'bold',color: colors.cream}}
                            placeholderStyle={{fontWeight: 'bold', color: colors.cream}}
                            labelStyle={{color: colors.coffee}}>
                        </DropDownPicker>
                        <Image
                            source={require('../assets/use_postal_code.png')}
                            style={{marginTop: 10}}>
                        </Image>
                        <Image
                            source={require('../assets/task_duration.png')}
                            style={styles.taskTexts}>
                        </Image>
                        <DropDownPicker
                            items={[
                                {label: 'under 1 hour', value: 1},
                                {label: '1-2 hours', value: 2},
                                {label: '3-4 hours', value: 4},
                                {label: '5-6 hours', value: 6},
                                {label: '6+ hours', value: 7}
                            ]}
                            value = {taskDuration}
                            onChangeItem={item => onSelectDuration(item)}
                            style = {styles.DropDownPickerStyle}
                            dropDownStyle={{backgroundColor: colors.cream}}
                            itemStyle={{justifyContent: 'flex-start'}}
                            placeholder = 'Select Task Duration'
                            selectedLabelStyle={{fontWeight: 'bold',color: colors.cream}}
                            placeholderStyle={{fontWeight: 'bold', color: colors.cream}}
                            labelStyle={{color: colors.coffee}}>
                        </DropDownPicker>
                        <Image
                            source={require('../assets/task_urgency.png')}
                            style={styles.taskTexts}>
                        </Image>
                        <DropDownPicker
                            items={[
                                {label: 'today', value: 'today'},
                                {label: 'tomorrow', value: 'tomorrow'},
                                {label: 'this week', value: 'this week'},
                                {label: 'next week', value: 'next week'},
                                {label: 'next month', value: 'next month'}
                            ]}
                            value = {taskUrgency}
                            onChangeItem={item => onSelectUrgency(item)}
                            style = {styles.DropDownPickerStyle}
                            dropDownStyle={{backgroundColor: colors.cream}}
                            itemStyle={{justifyContent: 'flex-start'}}
                            placeholder = 'Select Task Urgency'
                            selectedLabelStyle={{fontWeight: 'bold',color: colors.cream}}
                            placeholderStyle={{fontWeight: 'bold', color: colors.cream}}
                            labelStyle={{color: colors.coffee}}>
                        </DropDownPicker>
                        <Image
                            source={require('../assets/task_category.png')}
                            style={styles.taskTexts}>
                        </Image>
                        <View style={styles.category}>
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
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.barContainer}>
                <TouchableOpacity
                    onPress={(e) => handleKeyPress(e)}>
                    <Image
                        source={require("../assets/post_request.png")}
                        style={styles.SendRequestButton}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadImage: {
        alignSelf: 'center',
        marginTop: 50,
    },
    barContainer: {
        flex: 2,
        backgroundColor: colors.secondary,
    },
    taskRequestContainer: {
        flex:1,
        backgroundColor: colors.cream,
        //marginHorizontal: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingBottom: 100,
    },
    taskTexts: {
        //right:0,
        marginTop: 20,
        //paddingHorizontal: 10,
    },
    SendRequestButton: {
        alignSelf: 'center',
        marginTop: 20,
    },
    userTextInput: {
        height: 70,
        top: 10,
        //borderWidth: 1,
        //borderColor: colors.secondary,
        width: 320,
        //paddingVertical: 8,
        //paddingHorizontal: 15,
        //marginTop: 10,
        color: colors.coffee,
        textAlignVertical: 'top',
    },
    titleTextInput: {
        height:40,
        top: 10,
        //borderWidth: 1,
        //borderColor: colors.secondary,
        width: 320,
        //paddingVertical: 8,
        //paddingHorizontal: 15,
        //marginTop: 10,
        color: colors.coffee,
        fontWeight: 'bold',
        fontSize: 18,
    },
    DropDownPickerStyle: {
        marginTop: 15,
        backgroundColor: colors.secondary,
        borderRadius: 20,
    },
    item: {
        flex: 4,
        marginTop: 15,
    },
    cat_item: {
        alignSelf: 'center',
    },
    category: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
    },
    fadingContainer: {
        backgroundColor: colors.secondary,
        borderWidth: 10,
        borderColor: colors.primary,
        borderRadius: 9,
        width: '92%',
        alignSelf: 'center'
    },
})

export default SendRequest;