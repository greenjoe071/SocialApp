import { View, Text, FlatList } from 'react-native'
import comments from "../../assets/data/comments.json"
import Comment from '../../components/Comment/Comment'

const CommentsScreen = () => {
  return (
    <View>
        <FlatList 
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        style={{padding: 10}}
        
        />
      {/* <Text>CommentsScreen</Text> */}
    </View>
  )
}

export default CommentsScreen