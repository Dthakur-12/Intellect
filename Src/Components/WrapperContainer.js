//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import colors from '../styles/colors';
import { UseSelector, useSelector } from 'react-redux';

// create a component
const WrapperContainer = ({
    style = {},
    children,
}
) => {
    const {selectedTheme}=useSelector((state)=>state?.appsettings);
    return (
        <View style={{ ...styles.container, 
        ...style ,
        backgroundColor:selectedTheme=='dark'?colors.themeColor: colors.whiteColor,
        }}>
            <SafeAreaView style={{flex:1}}>
            {children}
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themeColor
    },
});

//make this component available to the app
export default WrapperContainer;
