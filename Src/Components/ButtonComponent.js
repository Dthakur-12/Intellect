//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale } from '../styles/responsiveSize';

// create a component
const ButtonComponent = ({
    onPress=()=>{},
    text='',
    style={},
    leftImg=null,
    textstyle={},


}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={{...styles.container,...style}}>
            {
                !!leftImg? <Image source={leftImg}/>:<View/>
            }
            <Text style={{...styles.textstyle,...textstyle}}>{text}</Text>
            <View/>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height:moderateScale(52),
        backgroundColor: colors.redColor,
        borderRadius:moderateScale(8),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:moderateScale(16)
    },
    textstyle:{
        fontFamily:fontFamily.medium,
        color:colors.whiteColor,
        fontSize:textScale(16)

    }
});

//make this component available to the app
export default ButtonComponent;
