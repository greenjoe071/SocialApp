import { View, Text, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';


const input = () => { 

  const [newComment, setNewComment] = useState('')
  
  const onPost =() => {
    console.warn("value:", newComment)
    // will send this data to backend 
    setNewComment('')
  }



  return (
    <View style={styles.inputBox}>
      <Image source={{
        uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg"
        }}
        style={styles.image}/>
   
        <TextInput 
        value={newComment}
        onChangeText={setNewComment}
        placeholder=' Add a comment'
        multiline
        style={styles.input}/>

        <Text
        onPress={onPost}
        style={styles.button}>
          Post
          </Text>

       
    </View>
  )
};
const styles = StyleSheet.create ({
  inputBox: {
    flexDirection: "row",
    padding: 8,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: "flex-end"

  },
    image: { 
        width: 40,
        aspectRatio:1,
        borderRadius: 25
    },

    input: {
      flex: 1,
      borderColor: colors.border,
      borderWidth:1,
      borderRadius: 50,
      backgroundColor: "white",
      paddingHorizontal: 10,
      paddingRight: 50,
      marginLeft: 8
    },
    button: {
      fontSize: fonts.size.sm,
      fontWeight: fonts.weight.full,
      color: colors.blue,
      position: "absolute",
      right: 20,
      bottom: 25,
    }
});
export default input