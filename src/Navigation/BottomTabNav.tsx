import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import PostUploadScreen from "../screens/PostUploadScreen"

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed"
                component={HomeScreen}
                options={{tabBarIcon: ({color, size}) => 
                    (<MaterialIcons            
                        name="home-filled"
                        size={size} color={color}/>
                        ),
                }} 
            />

                <Tab.Screen name="Search"
                    component={HomeScreen}
                        options={{tabBarIcon: ({color, size}) => (<MaterialIcons            
                            name="search"
                            size={size} color={color}/>
                            ),
                    }} 
                />

                <Tab.Screen name="Upload"
                    component={PostUploadScreen}
                    options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons            
                        name="plus-circle-outline"
                        size={size} color={color}/>
                        ),
                    }} 
                />

                <Tab.Screen name="Notifications"
                    component={PostUploadScreen}
                    options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons            
                        name="heart-outline"
                        size={size} color={color}/>
                        ),
                    }} 
                />

                <Tab.Screen name="MyProfle" 
                    component={ProfileScreen}
                    options={{tabBarIcon: ({color, size}) => (<FontAwesome            
                        name="user-circle-o"
                        size={size} color={color}/>
                        ),
                    }} 
                />
        </Tab.Navigator>
        
    )
}

export default BottomTabNav