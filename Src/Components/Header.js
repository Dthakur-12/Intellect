//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import imagePath from '../Constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import colors from '../styles/colors';


// create a component
const Header = ({
    onPressLeft,
}) => {
    const {selectedTheme}=useSelector((state)=>state?.appsettings);
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={!!onPressLeft? onPressLeft:()=>navigation.goBack()
            }>
                <Image source={imagePath.icBack} style={{tintColor:selectedTheme=='dark'?colors.whiteColor:colors.blackColor }}/>
            </TouchableOpacity>
            <View>
                
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height:moderateScale(42),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:moderateScale(16)
        
    },
});

//make this component available to the app
export default Header;
