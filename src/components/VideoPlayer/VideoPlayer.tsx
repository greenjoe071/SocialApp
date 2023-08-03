import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/colors'

interface IVideoPlayer {
    uri: string
    paused: boolean
}

const VideoPlayer = ({ uri, paused }: IVideoPlayer) => {
    const [ismuted, setisMuted] = useState(true)

    return (
        <View>
            <Video source={{ uri }} style={styles.video}
                resizeMode='cover'
                repeat
                muted={ismuted}
                paused={paused}
            />
            <Pressable 
            onPress={() => setisMuted(currentState => !currentState)}
            style={styles.mute}>
                <Ionicons 
                name={ismuted ? 'volume-mute' : 'volume-medium' } 
                size={22}
                color={'white'} />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 1,
        borderRadius:15,
        borderColor: "grey",
        borderWidth: 2,
    },
    mute: {
        backgroundColor: colors.black,
        borderRadius: 5,
        position: 'absolute',
        bottom: 10,
        right: 10,

    }
})

export default VideoPlayer