import { View, Text, Image } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import styles from './styles'
import Button from '../../components/Button/Button'


const ProfileHeader = () => {
    return (

        // Header
        <View style={styles.HeadContainer}>
            <View style={styles.header}>

                <Image
                    style={styles.avatar}
                    source={{ uri: user.image }}
                />

                <View style={styles.stats}>
                    <Text style={styles.numbers}>83</Text>
                    <Text>Posts</Text>
                </View>

                <View style={styles.stats}>
                    <Text style={styles.numbers}>83</Text>
                    <Text>Followers</Text>
                </View>

                <View style={styles.stats}>
                    <Text style={styles.numbers}>83</Text>
                    <Text>Following</Text>
                </View>

            </View>

            <Text style={styles.name}>{user.name}</Text>
            <Text>{user.bio}</Text>

            <View style={{}}>
                <Button
                    text="Edit Profile"
                    onPress={() => console.warn("Edit Profile Button Pressed")}
                />
            </View>
        </View>
    )
}

export default ProfileHeader()