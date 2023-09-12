//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity, I18nManager } from 'react-native';
import { saveUserData } from '../../redux/reducers/auth';
import { useDispatch, useSelector } from 'react-redux';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../Constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import strings from '../../Constants/lang';
import ButtonComponent from '../../Components/ButtonComponent';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import NavigationStrings from '../../Navigations/NavigationStrings';
import TextComp from '../../Components/TextComp';
import ModalComp from '../../Components/ModalComp';
import { ChangeLanguage } from '../../redux/actions/appsettings';
import { ChangeTheme, changeLang } from '../../redux/reducers/appsettings';
import LeftTextRightImage from '../../Components/LeftTextRightImage';
import { langData } from '../../Constants/lang & theme/langData';
import { themeData } from '../../Constants/lang & theme/themeData';
import RNRestart from 'react-native-restart'; 
// create a component
const InitialScreen = ({ navigation }) => {
    const [isVisible, setisVisible] = useState(false)
    const { selectedTheme, lang } = useSelector((state) => state?.appsettings);
    const dispatch = useDispatch();
    const onLogIn = () => {
        console.log('hello')
        dispatch(saveUserData({
            isLogin: true
        }))
    }

    const PrivacyPolicy = (type = 1) => {
        if (type == 1) {
            Alert.alert('Terms')
        } else {
            Alert.alert('Policy')
        }

    }

    const onPressLang=(lang)=>{
        dispatch(changeLang(lang))
        strings.setLanguage(lang)
        if (lang=='ar'){
            I18nManager.forceRTL(true)
            RNRestart.restart();
        }else
        {
            I18nManager.forceRTL(false)
        }
        setisVisible(false);
    }

    const onPressTheme=(theme)=>{
        dispatch(ChangeTheme(theme))
        setisVisible(false);
    }
    return (
        <WrapperContainer>
            <View style={{ flex: 1, padding: moderateScale(16), alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {
                    setisVisible(true)
                }} style={{
                    ...styles.circularStyle,
                    backgroundColor: selectedTheme=='dark' ? colors.whiteColor : colors.gray2
                }}>
                    <Text style={{
                        ...styles.textstyle,
                        color: selectedTheme=='dark' ? colors.blackColor : colors.whiteColor,
                        fontFamily: fontFamily.semiBold,
                        textTransform: 'capitalize'
                    }}>{lang}</Text>
                </TouchableOpacity>
                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                    <Image source={imagePath.icLogo} style={styles.logostyle} />
                </View>
                <View style={{ flex: 0.7, justifyContent: 'flex-end' }}>
                    <TextComp onPress={() => { PrivacyPolicy(1) }}
                        text={strings.BY_CLICKING_LOG_IN}
                        style={{ marginVertical: moderateScaleVertical(42) }}>
                        <Text>{strings.TERMS}</Text>,
                        <Text> {strings.LEARN_HOW_WE_PRCOESS}</Text>
                        <Text onPress={() => { PrivacyPolicy(2) }}> {strings.PRIVACY_POLICY}</Text>
                    </TextComp>
                    <ButtonComponent text={strings.LOG_IN_WITH_PHONE_NUMBER}
                        onPress={() => navigation.navigate(NavigationStrings.LOGIN)}
                    />
                    {/* <TextComp style={{ ...styles.textstyle, marginVertical: moderateScaleVertical(16) }}>{strings.OR}</TextComp> */}
                    <TextComp
                        text={strings.OR}
                        style={{ marginVertical: moderateScaleVertical(16), alignSelf: 'center' }}
                    />
                    <ButtonComponent
                        text={strings.LOG_IN_WITH_GOOGLE}
                        textstyle={{ color: colors.blackColor }}
                        style={{ backgroundColor: selectedTheme=='dark' ? colors.whiteColor : colors.gray4 }}
                        leftImg={imagePath.icGoogle}
                    />
                    <ButtonComponent
                        style={{
                            marginVertical: moderateScaleVertical(16),
                            backgroundColor: selectedTheme=='dark' ? colors.whiteColor : colors.gray4
                        }}
                        text={strings.LOG_IN_WITH_FACEBOOK}
                        textstyle={{ color: colors.blackColor }}
                        leftImg={imagePath.icFacebook}
                    />
                    <ButtonComponent
                        text={strings.LOG_IN_WITH_APPLE}
                        textstyle={{ color: colors.blackColor }}
                        style={{ backgroundColor: selectedTheme=='dark' ? colors.whiteColor : colors.gray4 }}
                        leftImg={imagePath.icApple}
                    />
                    <TextComp style={{ textAlign: 'center', fontFamily: fontFamily.medium, marginVertical: moderateScaleVertical(16) }}>{strings.NEW_HERE} <Text style={{ ...styles.textstyle, color: colors.blueColor, fontFamily: fontFamily.semiBold }} onPress={() => {
                        navigation.navigate(NavigationStrings.SIGNUP)
                    }
                    }>{strings.SIGN_UP}</Text></TextComp>
                </View>
            </View>
            <ModalComp
                style={{ justifyContent: 'flex-end', margin: 0 }}
                isVisible={isVisible}
                onBackdropPress={() => setisVisible(false)}
            >
                <View style={{
                    backgroundColor: colors.whiteColor,
                    minHeight: moderateScale(height / 4),
                    borderTopLeftRadius: moderateScale(8),
                    borderTopRightRadius: moderateScale(8),
                    padding: moderateScale(16)

                }}>
                    <TextComp
                        style={{ ...styles.headingStyle }}
                        text={strings.CHOOSE_LANGUAGE}
                    />
                    {
                        langData.map((val,i)=>{
                            return(
                                <LeftTextRightImage
                                key={i}
                    text={val.title}
                    isSelected={lang==val.code}
                    onPress={()=>onPressLang(val.code)}
                    />
                            )
                        })
                    }
                    {/* <LeftTextRightImage
                    text={'English'}
                    isSelected={lang=='en'}
                    onPress={()=>onPressLang('en')}
                    />
                    <LeftTextRightImage
                    text={'Arabic'}
                    isSelected={lang=='ar'}
                    onPress={()=>onPressLang('ar')}
                    /> */}
                    <TextComp
                        style={{ ...styles.headingStyle,marginTop:moderateScaleVertical(16) }}
                        text={strings.CHOOSE_THEME}
                    />
                    {/* <LeftTextRightImage
                    text={'Dark'}
                    isSelected={isDark}
                    onPress={()=>onPressTheme(true)}
                    />
                    <LeftTextRightImage
                    text={'Light'}
                    isSelected={!isDark}
                    onPress={()=>onPressTheme(false)}
                    /> */}
                        {
                        themeData.map((val,i)=>{
                            return(
                                <LeftTextRightImage
                                key={i}
                    text={val.title}
                    isSelected={val.code==selectedTheme}
                    onPress={()=>onPressTheme(val.code)}
                    />
                            )
                        })
                    }
                    
                </View>
            
            </ModalComp>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    logostyle: {
        width: moderateScale(200),
        height: moderateScale(200),
        borderRadius: moderateScale(100 / 2),
    },
    textstyle: {
        fontFamily: fontFamily.regular,
        // color: colors.whiteColor,
        textAlign: 'center',
        fontSize: textScale(15)
    },
    circularStyle: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    headingStyle: {
        fontFamily: fontFamily.bold,
        color: colors.blackColor,
        fontSize: textScale(18),
        textTransform: 'capitalize',
        marginBottom: moderateScale(12)

    },
    langtxtstyle: {
        fontFamily: fontFamily.semiBold,
        color: colors.blackColor,
        fontSize: textScale(15),
        textTransform: 'capitalize',
        marginVertical: moderateScaleVertical(16)

    },
    horizontaView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

//make this component available to the app
export default InitialScreen;
