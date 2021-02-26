import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, TouchableOpacity, Text, contentContainerStyle, ScrollView, Image, StyleSheet, Platform, StatusBar, View, Button, LogBox } from 'react-native';
import colors from '../config/colors';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import "firebase/firestore";
import * as firebase from 'firebase';
import Login from './Login';
import { color } from 'react-native-reanimated';

function Dashboard({ route, navigation }) {

    const [bio, setBio] = React.useState('')
    const [name, setName] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [job, setJob] = React.useState('')
    const [skill1, setSkill1] = React.useState('')
    const [skill2, setSkill2] = React.useState('')
    const [skill3, setSkill3] = React.useState('')
    const [pb, setPb] = React.useState('')
    const [points, setPoints] = React.useState('')
    const [displayUser, setDisplayUser]= React.useState()

    const { userValue } = route.params;
    //setDisplayUser(require("../assets/"+userValue.toString()+".png"));
    let user = firebase.firestore()
        .collection('users')
        .doc(userValue)
    user.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                setBio(docSnapshot.get("bio"));
                setName(docSnapshot.get("name"));
                setJob(docSnapshot.get("occupation"));
                setLocation(docSnapshot.get("location"));
                setSkill1(docSnapshot.get("skill1"));
                setSkill2(docSnapshot.get("skill2"));
                setSkill3(docSnapshot.get("skill3"));
            }
        });
    return (
        <View style={styles.parentContainer}>
            <View style={styles.container}>
                <View>
                    { }
                </View>
                <ScrollView >
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logoImage}>
                    </Image>

                    <View style={styles.pfContainer1}>
                        <Image
                            source={require('../assets/portfolio_bg.png')}
                            style={styles.pfBg}
                        >
                        </Image>
                        <Image
                            source={userValue=="4161112222"? require("../assets/4161112222.png"): require("../assets/9053334444.png")}
                            style={styles.profilePic}>
                        </Image>
                        <Text style={styles.name}>{name}</Text>


                        <Text style={{ color: colors.coffee, fontWeight: 'bold', fontSize: 15, position: 'absolute',alignSelf: 'center', marginTop:232 }}>{job}</Text>
                        <Text style={{ color: colors.coffee, fontWeight: 'bold', fontSize: 15, position: 'absolute', marginTop: 253, alignSelf: 'center', }}>{location}</Text>
                        <View style={styles.desc}></View>
                        <Text style={{ width: '90%', color: colors.coffee, textAlign: 'center', fontSize: 15, position: 'absolute', alignSelf: 'center', marginTop: 280 }}>{bio}</Text>
                        <View style={styles.skillContainer}>
                            <Text style={styles.item}>{skill1}</Text>
                            <Text style={styles.item}>{skill2}</Text>
                            <Text style={styles.item}>{skill3}</Text>
                        </View>

                    </View>
                    <Image
                        source={require('../assets/portfolio_details.png')}
                        style={styles.portfolioBox1}>
                    </Image>
                </ScrollView>
            </View>
            <View style={styles.barContainer}>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Dashboard')}
                        style={styles.workButton}>
                        <Image
                            source={require("../assets/dashboardButton.png")}
                            style={styles.buttonItem}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Work')}
                        style={styles.workButton}>
                        <Image
                            source={ require("../assets/workButton.png")}
                            style={styles.buttonItem}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SendRequest', {userValue})}
                        style={styles.sendButton}>
                        <Image
                            source={require("../assets/sendButton.png")}
                            style={styles.buttonItem}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Message', {userValue})}
                        style={styles.chatButton}>
                        <Image
                            source={require("../assets/chatButton.png")}
                            style={styles.buttonItem}
                        />
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    nextButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logoImage: {
        marginTop: 20,
        alignSelf: 'center',
    },
    pfContainer1: {
        marginTop: 5,
        marginBottom: 35,
        alignSelf: 'center',
    },
    pfBg: {
        alignSelf: 'center',
    },
    skillContainer: {
        flexDirection: 'row',
        width: '80%',
        position: 'absolute',
        marginTop: 300,
        alignSelf: 'center',
    },
    item: {
        flex: 1,
        borderRadius: 9,
        paddingTop: 8,
        paddingBottom: 8,
        margin: 5,
        marginTop: 30,
        backgroundColor: colors.primary,
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
    },
    desc: {
        alignContent: 'center',
        marginLeft: 20,
    },
    portfolioBox1: {
        bottom: 0,
    },
    profilePic: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 25,
    },
    profileName: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 270,
    },
    profileBio: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 303,
    },
    barContainer: {
        flex: 2,
        backgroundColor: colors.secondary,
    },
    buttons: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
    },
    sendButton: {
        flex: 1,
    },
    chatButton: {
        flex: 1,
    },
    workButton: {
        flex: 1,
    },
    buttonItem: {
        alignSelf: 'center',
    },
    name: {
        fontSize: 25,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 200,
        color: colors.primary,
        fontWeight: 'bold',
    }
})


export default Dashboard;