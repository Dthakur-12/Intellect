import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { Image, StyleSheet } from 'react-native';
import * as Screens from '../Screens'
import imagePath from '../Constants/imagePath'
import navigationStrings from './NavigationStrings';

const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}

            screenOptions={{
                headerShown: false,
                style: styles.customBottomtabsStyle,
                tabBarActiveTintColor: colors.blackColor,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle:{backgroundColor:colors.themeColor},
                tabBarShowLabel:false,
                // tabBarShowLabel: false
            }}

        >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Screens.Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            // focused ?
                            //     <Image source={imagePath.firstActiveIcon} />
                            //     : <Image source={imagePath.firstInActiveIcon} />
                            <Image style={{tintColor:focused?colors.redColor:colors.whiteColor}} source={imagePath.firstInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.SEARCH}
                component={Screens.Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.whiteColor}} source={imagePath.secondInActiveIcon} />
                           
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.CREATE_POST}
                component={Screens.CreatePost}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.whiteColor}} source={imagePath.thirdInActiveIcon} />
                            
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.NOTIFICATION}
                component={Screens.Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.whiteColor}} source={imagePath.fourthInActiveIcon} />
                          
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Screens.Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{tintColor:focused?colors.redColor:colors.whiteColor}} source={imagePath.fifthInActiveIcon} />
                          
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
        //height: moderateScale(60)
        backgroundColor:colors.themeColor
    },

});

export default TabRoutes