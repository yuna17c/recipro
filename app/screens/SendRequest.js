import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, ImageBackground, Text, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
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

    const handleKeyPress = e => { }

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
                        <Image
                            source={require('../assets/task_title.png')}
                            style={styles.taskTexts}>
                        </Image>
                        <TextInput
                            style={styles.userTextInput}
                            placeholder="Description"
                            multiline={true}>
                        </TextInput>
                        <Image
                            source={require('../assets/task_location.png')}
                            style={styles.taskTexts}>
                        </Image>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.barContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Dashboard')}>
                    <Image
                        source={require("../assets/post_request.png")}
                        style={styles.SendRequestButton}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        flex: 1,
        backgroundColor: colors.cream,
        //marginHorizontal: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingBottom: 20,
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
        borderWidth: 1,
        borderColor: colors.secondary,
        width: 320,
        //paddingVertical: 8,
        //paddingHorizontal: 15,
        //marginTop: 10,
        color: colors.coffee,
        textAlignVertical: 'top',
    },
    titleTextInput: {
        height: 40,
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
});

export default SendRequest;