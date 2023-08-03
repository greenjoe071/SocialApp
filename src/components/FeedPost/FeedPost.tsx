import { View, Text, StyleSheet, Image, Pressable, } from 'react-native';
import { useState } from 'react';
import Comment from '../Comment';
import DoubleTap from '../doubleTap';
import Carousel from '../Carousel/Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import styles from './styles';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts'; // Use 'fonts' instead of 'font'
import { IPost } from '../../types/models';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import { IframeHTMLAttributes } from 'react';

interface IFeedPost {
  post: IPost
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {

const [isDescriptionExapanded, setIsDescriptionExpanded] = useState(false)
const [isLike, setisLike] = useState(false)

const toggleDescriptionExapnded = () => {
  setIsDescriptionExpanded(!isDescriptionExapanded)
  // setIsDescriptionExpanded((existingValue) => !existingValue)
}

// Like and double tap
const toggleLike = () => {
  setisLike((existingValue) => !existingValue)
}

let postContent = null;
  if (post.image) {
    postContent = (
      <DoubleTap onDoubleTap={toggleLike}>
        <Image
          source={{
            uri: post.image
          }}
          style={styles.image}
        />
      </DoubleTap>
    )
  } else if (post.images) {
    console.log(post.video)
    postContent = (<Carousel images={post.images} onDoubleTap={toggleLike} />)
  } else if (post.video) {

    postContent = (
      <DoubleTap onDoubleTap={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible}/>
      </DoubleTap>
    )
  }

  return (
    <View style={styles.post}>
{/* HEADER */}
      <View style={styles.header}>
{/* Avatar         */}
        <Image
          source={{
            uri: post.user.image
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo name="dots-three-horizontal"
          size={16}
          style={styles.threeDots} />
      </View>

{/* Content */}
      
        {postContent}
      
      
{/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
         
       
          <AntDesign
            onPress={toggleLike}
            name={isLike ? 'heart' : "hearto"}
            size={24}
            style={styles.icon}
            color={isLike ? colors.red : colors.black}
            
          />
         
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: 'auto' }}
            color={colors.black}
          />
        </View>

        <Text
          style={styles.text}>Liked by <Text style={styles.bold}>someuser</Text> and <Text style={styles.bold}>{post.nofLikes} others</Text></Text>
{/* Post Description */}
        <Text style={[styles.text, { marginBottom: -8 }]} 
        numberOfLines={isDescriptionExapanded ? 0 : 3}>
          <Text style={styles.bold}
          onPress={toggleDescriptionExapnded}
          >{post.user.username}: </Text>{post.description}
        </Text>
        <Text onPress={toggleDescriptionExapnded}>{isDescriptionExapanded ? 'less' : 'more'} </Text>
{/* comments */}
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
           <Comment 
           key={comment.id} 
           comment={comment} />
        ))}
        
        
       
        
{/* Posted Date */}
        <Text>{post.createdAt}</Text>

      </View>
    </View>
  );
};



export default FeedPost ;
