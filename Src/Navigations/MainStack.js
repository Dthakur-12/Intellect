import NavigationStrings from "./NavigationStrings";
import {
    InitialScreen,
    Login,
    SignUpScreen,
    Home,
    Search,
    CreatePost

} from '../Screens'
import TabRoutes from "./TabRoutes";


export default function (Stack){
    return(
        <>
       <Stack.Screen
       name={NavigationStrings.TAB_ROUTES}
       component={TabRoutes}
       options={{headerShown:false}}
/>
    
        </>
    )
   

}