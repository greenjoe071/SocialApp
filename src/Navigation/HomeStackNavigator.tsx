import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {Image} from 'react-native'
// import momentsLogo from '../assets/images/momentsLogo.png'
import { ImageSourcePropType } from 'react-native';
import { HomeStackNavigatorParamList } from "./types";
const momentsLogo: ImageSourcePropType = require('../assets/images/momentsLogo.png');


const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>()
// type momentsLogo = Image
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed"
                component={HomeScreen} 
                options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
            />
                
            <Stack.Screen
                name="UserProfile"
                component={ProfileScreen}
                options={{ title: "Profile" }}
            />
        </Stack.Navigator>
    )
}

const HeaderTitle = () => {
    return (
      <Image 
        source={momentsLogo}
        resizeMode='contain'
        style={{ width: 150, height: 50}}
        />
    )
  }



export default HomeStackNavigator;