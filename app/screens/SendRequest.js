import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity, ImageBackground, Text, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';

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
                    <Image
                        source={require('../assets/portfolio_details.png')}
                        style={styles.portfolioBox1}>
                    </Image>
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
    SendRequestButton: {
        alignSelf: 'center',
        marginTop: 20,
    }
})

export default SendRequest;