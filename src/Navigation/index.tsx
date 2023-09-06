import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';
import momentsLogo from '../assets/images/momentsLogo.png'
import BottomTabNav from './BottomTabNav';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown: true}}>

        {/* <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{headerTitle: HeaderTitle, headerTitleAlign: "center" }}
          
        /> */}

        <Stack.Screen name="Home"
          component={BottomTabNav}
          options={{headerShown: false}}/>

        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: "Profile"}}
      
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const HeaderTitle = () => {
  return (
    <Image 
      source={momentsLogo}
      // resizeMode='contain'
      // style={{ width: 150, height: 30}}
      
      
      />
  )
}

export default Navigation