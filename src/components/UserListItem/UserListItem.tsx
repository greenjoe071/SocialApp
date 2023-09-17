import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
// import styles from '../FeedPost/styles'
import { IUser } from '../../types/models'
import fonts from '../../theme/fonts'
import colors from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'

interface IUserListItem {
    user: IUser
}

const UserListItem = ({user}: IUserListItem) => {
const navigation = useNavigation()

const goToUserScreen = () => {
    navigation.navigate('UserProfile', {userId: user.id})
    }


  return (
    <Pressable 
        style={styles.container}
        onPress={goToUserScreen}>
      <Image 
        source={{uri: user.image}}
        style={styles.image}/>

        <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>{user.username}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },

    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        marginRight: 10
    },

    name: {
        fontWeight: fonts.weight.bold,
        marginBottom: 5
    },

    username: {
        color: colors.grey
    },
})

export default UserListItem