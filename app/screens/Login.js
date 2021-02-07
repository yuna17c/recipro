import React, { Component } from 'react';
import { TextInput, Image, ImageBackground, StyleSheet, Platform, StatusBar, View, } from 'react-native';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';
import colors from '../config/colors';
TextInput.defaultProps.selectionColor = 'rgba(254, 182, 0, 0.5)';

function Login(props) {
    
    const handleKeyPress = e => {
        console.log(userValue)
        console.log(passValue)
    };

    const [userValue, onUserChangeText] = React.useState('')
    const [passValue, onPassChangeText] = React.useState('')

    return (
    <View style = {styles.container}>
        <Image 
            source = {require('../assets/log_in.png')}
            style = {styles.backImage}>
        </Image>
        <Image 
            source = {require('../assets/welcome_text.png')}
            style = {styles.welcomeImage}>
        </Image>
        <Image 
            source = {require('../assets/sign_in_text.png')}
            style = {styles.signInImage}>
        </Image>

        <TextInput
            value={userValue}
            onChangeText={text => onUserChangeText(text)}
            //onSubmitEditing={e => handleKeyPress(e)}
            style = {styles.userTextInput}
            placeholder = "Email">
        </TextInput>

        <TextInput
            value={passValue}
            onChangeText={text=>onPassChangeText(text)}
            onSubmitEditing={e=> handleKeyPress(e)}
            style = {styles.userTextInput}
            placeholder = "Password">
        </TextInput>

    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backImage: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
    },
    welcomeImage: {
        top:30,
        marginTop:15,
    },
    signInImage: {
        top:30,
        marginTop:15,
        right:30,
    },
    userTextInput: {
        height:50,
        top: 20,
        borderWidth: 5,
        borderColor: colors.secondary,
        width: 225,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginTop: 35,
        borderRadius:10,
        color: colors.coffee,
    }
})
export default Login;