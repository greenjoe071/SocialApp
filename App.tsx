import { View, StyleSheet, FlatList } from 'react-native';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';

const App = () => {
  return (
    // <Navigation />
    // <EditProfileScreen />
    <PostUploadScreen />
  );
};


export default App;
