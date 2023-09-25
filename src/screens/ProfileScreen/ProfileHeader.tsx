import { View, Text, Image } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import styles from './styles'
import Button from '../../components/Button/Button'

import {useNavigation} from '@react-navigation/native'
import { ProfileNavigationProp } from '../../Navigation/types'
import {Auth} from 'aws-amplify'



const ProfileHeader = () => {
     const navigation = useNavigation<ProfileNavigationProp>()

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

            <View style={{flexDirection: "row"}}>
                <Button
                    text="Edit Profile"
                    onPress={() => navigation.navigate("Edit Profile")}
                />
                <Button text='Sign Out' onPress={() => Auth.signOut()}/>
            </View>
        </View>
    )
}

export default ProfileHeader