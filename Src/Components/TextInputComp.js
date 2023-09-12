//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

// create a component
const TextInputComp = (
    {
        value = '',
        onChangeText,
        placeholder = '',
        secureText = false,
        onPressSecure = () => { },
        inputStyle = {},
        textStyle = {},
        placeholderTextColor = colors.whiteColorOpacity70,
        ...props
    }
) => {
    // console.log(props);
    return (
        <View
            style={{ ...styles.inputStyle, ...inputStyle, }}
        >
            <TextInput
                style={{ ...styles.textStyle, ...textStyle }}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                {...props}
            />
            {!!secureText?<Text style={{...styles.textStyle,flex:0}} onPress={onPressSecure}>{secureText}</Text>:null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
        height: moderateScale(52),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        alignItems: 'center',
        backgroundColor: colors.gray2,
        marginBottom:moderateScaleVertical(16)
    },
    textStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.regular,
        flex: 1
    }

});

//make this component available to the app
export default TextInputComp;