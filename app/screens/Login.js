import React, { Component } from 'react';
import { TextInput, Image, ImageBackground, StyleSheet, Platform, StatusBar, View, Alert, LogBox } from 'react-native';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';
import colors from '../config/colors';
import 'react-native-gesture-handler';
TextInput.defaultProps.selectionColor = 'rgba(254, 182, 0, 0.5)';
import "firebase/firestore";
import { firebase } from '../config/firebase';
LogBox.ignoreLogs(['Setting a timer']);

function Login({ navigation }) {
    const handleKeyPress = e => {
        let user = firebase.firestore()
            .collection('users')
            .doc(userValue)

        user.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    let pass = docSnapshot.get("password");
                    console.log(pass);
                    if (pass == passValue) navigation.navigate('Dashboard', { userValue });
                    else {
                        Alert.alert(
                            "Your password does not match our records!"
                        );
                    }
                }
                else {
                    Alert.alert(
                        "Your username does not match our records!"
                    );
                }
            });
    };

    const [userValue, onUserChangeText] = React.useState('')
    const [passValue, onPassChangeText] = React.useState('')

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/log_in.png')}
                style={styles.backImage}>
            </Image>
            <Image
                source={require('../assets/welcome_text.png')}
                style={styles.welcomeImage}>
            </Image>
            <Image
                source={require('../assets/sign_in_text.png')}
                style={styles.signInImage}>
            </Image>

            <TextInput
                value={userValue}
                onChangeText={text => onUserChangeText(text)}
                style={styles.userTextInput}
                placeholder="Phone">
            </TextInput>

            <TextInput
                value={passValue}
                onChangeText={text => onPassChangeText(text)}
                onSubmitEditing={e => handleKeyPress(e)}
                style={styles.userTextInput}
                placeholder="Password">
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
    },
    backImage: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
    },
    welcomeImage: {
        top: 30,
        marginTop: 15,
    },
    signInImage: {
        top: 30,
        marginTop: 15,
        right: 30,
    },
    userTextInput: {
        height: 50,
        top: 20,
        borderWidth: 3.4,
        borderColor: colors.secondary,
        width: 225,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginTop: 35,
        borderRadius: 10,
        color: colors.coffee,
    }
})
export default Login;