import { View, StyleSheet, FlatList } from 'react-native';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {Amplify} from 'aws-amplify'
import config from './src/aws-exports'
import {withAuthenticator, AmplifyTheme }from 'aws-amplify-react-native'
import colors from "./src/theme/colors";


Amplify.configure(config)

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    {/* // <EditProfileScreen />
    // <PostUploadScreen />
    // <HomeScreen /> */}
    </SafeAreaProvider>
  );
};
const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
      placeholder: "Full name",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
      placeholder: "Email",
    },
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 3,
      type: "string",
      placeholder: "Username/handle",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
      placeholder: "Password",
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: "#5c78ff",
    borderRadius: 100,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: colors.primary,
  },
};

export default withAuthenticator(App, { signUpConfig, theme: customTheme });
