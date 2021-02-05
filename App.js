import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, Alert, Image, View, SafeAreaView, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("text pressed")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <TouchableWithoutFeedback onPress={() => Alert.alert("My Title", "My Message",
       [
        {text: "Yes"},
        {text: "No"}
        ])}>
        <Image 
        fadeDuration={1000}
        source={require('./assets/favicon.png')}
          />
      </TouchableWithoutFeedback>
      <Button 
      color="orange"
      title="Click Me" onPress={() => console.log("button clicked")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
 