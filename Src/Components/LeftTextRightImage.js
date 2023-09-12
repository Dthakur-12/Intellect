//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import imagePath from '../Constants/imagePath';
import { moderateScaleVertical, textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import TextComp from './TextComp';


// create a component
const LeftTextRightImage = ({
    onPress=()=>{},
    text,
    isSelected,
    image=imagePath.icUnchek
}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.horizontaView}>
                        <TextComp
                            style={{
                                ...styles.langtxtstyle,
                                color: isSelected ? colors.redColor : colors.gray2
                            }}
                            text={text}
                        />

                        {<Image source={image} style={{ tintColor: isSelected ? colors.redColor : colors.gray2 }} />}

                    </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    langtxtstyle: {
        fontFamily: fontFamily.semiBold,
        color: colors.blackColor,
        fontSize: textScale(15),
        textTransform: 'capitalize',
        marginVertical: moderateScaleVertical(12)

    },
    horizontaView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

//make this component available to the app
export default LeftTextRightImage;
