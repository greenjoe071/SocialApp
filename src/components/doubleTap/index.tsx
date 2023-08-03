import {ReactNode} from 'react'
import { View, Text, Pressable } from 'react-native'

interface IDoubleTap {
    onDoubleTap?: () => void;
    children: ReactNode;
}

const DoubleTap = ({
    onDoubleTap = () => {},
    children,}: IDoubleTap) => {

    let lastTap = 0
    const handleDoubleTap = () => {
        const now = Date.now()
        if (now - lastTap < 400) {
            onDoubleTap()
        }
        lastTap = now
    }

    return (
        <Pressable onPress={handleDoubleTap}>
            {children}
        </Pressable>
    )
}

export default DoubleTap