import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, ImageBackground, Text, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { TextInput } from 'react-native-gesture-handler';

function SendRequest({ navigation }) {
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
    }
})

export default SendRequest;