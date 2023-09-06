import { StyleSheet , Platform} from "react-native"
import fonts from "../../theme/fonts"
import colors from "../../theme/colors"


export default StyleSheet.create({
    post: {
  
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 16,
      // borderWidth: 2,
      // borderColor: "light grey"
    },
    header: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center'
  
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    threeDots: {
      marginLeft: 'auto'
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5
  
    },
    icon: {
      marginHorizontal: 5,
    },
    text: {
      color: colors.black,
      paddingVertical: 8
    },
    bold: {
      fontWeight: fonts.weight.bold
    },
    commentText: {
      color: colors.black,
      flex: 1,
      paddingVertical: 6
      // lineHeight: 10,
    },
    comment: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  
  })