import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';

import BottomTabNav from './BottomTabNav';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import { RootNavigator } from './types';

const Stack = createNativeStackNavigator<RootNavigator>()

const Navigation = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home"
          component={BottomTabNav}
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Comments"
          component={CommentsScreen}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default Navigation