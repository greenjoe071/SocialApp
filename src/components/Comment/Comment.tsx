import { useState } from 'react'
import { Pressable, View, Text, Image, StyleSheet } from 'react-native'
import { IComment } from '../../types/models'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../../theme/colors'
// import styles from '../FeedPost/styles'
import fonts from '../../theme/fonts'


interface ICommentProps {
comment: IComment
includeDetails: boolean
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
    const [islike, setisLike] = useState(false)
    const toggleLike = () => {
        setisLike(currentValue => !currentValue )
    }
    return (
        <View style={styles.comment}>
            {includeDetails && (
              <Image source={{ uri: comment.user.image }} style={styles.avatar} />
              )}

            <View style={styles.middleSection}>
                <Text style={styles.commentText}>
                    <Text style={styles.bold}>{comment.user.username}: </Text>
                </Text>
                <Text>{comment.comment}</Text>

                {includeDetails && (<View style={styles.footer}>
                    <Text style={styles.footerItems}>1d</Text>
                    <Text style={styles.footerItems}>6 likes</Text>
                    <Text style={styles.footerItems}>reply</Text>
                </View>)}

            </View>
          <Pressable 
            onPress={toggleLike}
            hitSlop={20}>
            <AntDesign
                name={islike ? 'heart' : 'hearto'}
                size={14}
                style={[styles.icon, { paddingLeft: 4 }]}
                color={islike ? colors.red : colors.black}

            />
          </Pressable>
        </View>
    );
};

const styles = StyleSheet.create ({

    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'grey',
        
      },
  
//     header: {
//       flexDirection: 'row',
//       padding: 10,
//       alignItems: 'center'
  
//     },
//     userAvatar: {
//       width: 50,
//       height: 50,
//       borderRadius: 25,
//       marginRight: 10,
//     },
//     userName: {
//       fontWeight: fonts.weight.bold,
//       color: colors.black,
//     },
//     threeDots: {
//       marginLeft: 'auto'
//     },

//     iconContainer: {
//       flexDirection: 'row',
//       marginBottom: 5
  
//     },
    icon: {
      marginHorizontal: 5,
    },
//     text: {
//       color: colors.black,
//       paddingVertical: 8,
     
//     },
    bold: {
      fontWeight: fonts.weight.bold
    },
    commentText: {
      color: colors.black,
      
      lineHeight: 18,
      marginHorizontal: 0,
      
    },
 
    avatar: {
      width: 40,
      aspectRatio: 1,
      borderRadius: 25,
      marginRight: 5,
      // marginHorizontal: 5
  },

  middleSection: {
    flex: 1,
    // backgroundColor: "grey"
  },

  footer: {
    flexDirection: 'row',
    // padding: 7,
    marginBottom:15
  },
  footerItems: {
    marginTop: 2,
    // marginHorizontal: 5,
    marginRight:10
    
  }
})

export default Comment