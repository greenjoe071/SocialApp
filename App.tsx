import { View, Text } from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts'; // Use 'fonts' instead of 'font'
import AntDesign from 'react-native-vector-icons/AntDesign'

const App = () => {
  return (
    <View>
      <Text style={{ color: colors.black, fontSize: fonts.size.xl }}>Hello World</Text>
      <AntDesign name="stepforward" size={55}></AntDesign>
    </View>
  );
};

export default App;
