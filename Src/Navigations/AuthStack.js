import NavigationStrings from "./NavigationStrings";
import {
    InitialScreen,
    Login,
    SignUpScreen,

} from '../Screens'


export default function (Stack){
    return(
        <>
        <Stack.Screen
        name={NavigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name={NavigationStrings.LOGIN}
        component={Login}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name={NavigationStrings.SIGNUP}
        component={SignUpScreen}
        options={{headerShown:false}}
        />
        </>
    )
   

}