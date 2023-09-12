//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import strings from '../../Constants/lang';
import TextInputComp from '../../Components/TextInputComp';
import fontFamily from '../../styles/fontFamily';
import ButtonComponent from '../../Components/ButtonComponent';
import Header from '../../Components/Header';
import TextComp from '../../Components/TextComp';

// create a component
const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [secureText, setSecureText] = useState(true)
    const [UserName, setUsername] = useState('')
    const [FullName, setFullName] = useState('')

    return (
        <WrapperContainer>
            <Header/>
            <View style={{ flex: 1, padding: moderateScale(16) }}>
                <View style={{ flex: 0.8 }}>
                    <TextComp style={styles.headerStyle} text={strings.CREATE_NEW_ACCOUNT}/>
                    <TextComp style={styles.headinhtwo} text={strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE}/>

                    <TextInputComp
                        placeholder={strings.USERNAME}
                        value={UserName}
                        onChangeText={(value) => setUsername(value)}
                    />

                    <TextInputComp
                        placeholder={strings.FULL_NAME}
                        value={FullName}
                        onChangeText={(value) => setUsername(FullName)}
                    />
                    <TextInputComp
                        placeholder={strings.EMAIL}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <TextInputComp
                        placeholder={strings.PASSWORD}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={secureText}
                        secureText={secureText ? strings.SHOW : strings.HIDE}
                        onPressSecure={() => setSecureText(!secureText)}
                    />
                    <TextInputComp
                        placeholder={strings.CONFIRM_PASSWORD}
                        value={ConfirmPassword}
                        onChangeText={(value) => ConfirmPassword(value)}
                        secureTextEntry={secureText}
                        secureText={secureText ? strings.SHOW : strings.HIDE}
                        onPressSecure={() => setSecureText(!secureText)}
                    />
                    <View>
                        <Text />
                        {/* <Text style={{
                            ...styles.headinhtwo,
                            alignSelf: 'flex-end',
                            color: colors.blueColor,
                            marginTop: moderateScaleVertical(0)
                        }}>{strings.FORGOT_PASSWORD}</Text> */}
                    </View>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                    <ButtonComponent
                        text='SIGNUP'
                    />
                </View>
            </View>
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: textScale(26),
        fontFamily: fontFamily.medium,
        // color: colors.whiteColor,
    },
    headinhtwo: {
        fontSize: textScale(16),
        fontFamily: fontFamily.regular,
        // color: colors.whiteColorOpacity70,
        marginTop: moderateScaleVertical(10),
        marginBottom: moderateScaleVertical(50),

    }
});

//make this component available to the app
export default SignUpScreen;
