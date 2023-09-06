import { View, StyleSheet, FlatList } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import Navigation from './src/Navigation';

const App = () => {
  return (
    // <Navigation />
    <EditProfileScreen />
  );
};


export default App;
