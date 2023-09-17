import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen/NotificationsScreen";
import PostUploadScreen from "../screens/PostUploadScreen"
import colors from "../theme/colors";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

import { BottomTabNavigatorParamList } from "./types";
import SearchTabNavigator from "./SearchTabNavigator";



const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: true,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.grey
            }}>
            <Tab.Screen name="Home"
                component={HomeStackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => 
                    (<MaterialIcons            
                        name="home-filled"
                        size={size} color={color}/>
                        ),
                }} 
            />

                <Tab.Screen name="Search"
                    component={SearchTabNavigator}
                        options={{tabBarIcon: ({color, size}) => (<MaterialIcons            
                            name="search"
                            size={size} color={color}/>
                            ),
                            headerShown: false
                    }} 
                />

                <Tab.Screen name="Upload"
                    component={PostUploadScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (<MaterialCommunityIcons            
                        name="plus-circle-outline"
                        size={size} color={color}/>
                        ),
                    }} 
                />

                <Tab.Screen name="Notifications"
                    component={NotificationsScreen}
                    options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons            
                        name="heart-outline"
                        size={size} color={color}/>
                        ),
                    }} 
                />

                <Tab.Screen name="MyProfle" 
                    component={ProfileStackNavigator}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (<FontAwesome            
                        name="user-circle-o"
                        size={size} color={color}/>
                        ),
                    }} 
                />
        </Tab.Navigator>
        
    )
}

export default BottomTabNav