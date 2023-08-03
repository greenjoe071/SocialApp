import { View, Text, StyleSheet } from 'react-native'
import { IComment } from '../../types/models'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../../theme/colors'
import styles from '../FeedPost/styles'
import fonts from '../../theme/fonts'


interface ICommentProps {
comment: IComment
}

const Comment = ({comment}: ICommentProps) => {
    return (
        <View style={styles.comment}>
            <Text style={styles.commentText}>
                <Text style={styles.bold}>{comment.user.username}: </Text>{comment.comment}
            </Text>
            <AntDesign
                name={'hearto'}
                size={14}
                style={[styles.icon, { paddingLeft: 45 }]}
                color={colors.black}

            />
        </View>
    );
};

// const styles = StyleSheet.create ({
//     style,
// })

export default Comment