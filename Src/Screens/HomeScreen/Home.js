//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import strings from '../../Constants/lang';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily:'Barlow-SemiBold'}}>{strings.HOME}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
});

//make this component available to the app
export default Home;
