import { View, Text, StyleSheet, Pressable } from 'react-native'
import {useEffect, useState, useRef} from 'react'
import {Camera, CameraType, FlashMode, CameraRecordingOptions, CameraPictureOptions, VideoQuality} from "expo-camera";
import colors from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const flashName ={
  [FlashMode.off]: "flash-off",
  [FlashMode.on]: "flash-on"
}

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null)
  const [cameraType, setCameraType] = useState(CameraType.back)
  const [flash, setFlash] = useState(FlashMode.off)
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  const camera = useRef<Camera>(null)

  useEffect(() => {
    const getPermission =async () => {
      const cameraPermission = await  Camera.requestCameraPermissionsAsync()
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync()
      setHasPermissions(cameraPermission.status === 'granted' && microphonePermission.status === 'granted')
    }
    getPermission()
  }),([]);

  const flipCamera = () => {
    setCameraType(currentCameraType => (
      currentCameraType === CameraType.back?
      CameraType.front : CameraType.back))
  }

  const flipFlash = () => {
    setFlash(currentFlashMode => (
      currentFlashMode === FlashMode.off?
      FlashMode.on : FlashMode.off
    ))
    // console.warn("flash pressed")
  }

  // TAKE A PICTURE
  const takePic =async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return
    }

    const options: CameraPictureOptions = {
      quality: 0.8,
      base64: false,
      skipProcessing: true
    }
    const cameraResult = await camera.current.takePictureAsync(options)
    console.log(cameraResult)
  }

//CAPTURE VIDEO
  const startRecording = async () => {
    // console.warn("start")
    if (!isCameraReady || !camera.current || isRecording) {
      return
    }

    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality ["480p"],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    }

    setIsRecording(true)
    try {
      const videoResult = await camera.current.recordAsync(options)
      console.log(videoResult)
    } catch (error) {
      console.log(error)
    }
    setIsRecording(false)

    

  }

  const stopRecording = () => {
    // console.warn("stop")
    if (isRecording) {
      camera.current?.stopRecording()
      setIsRecording(false)
    }
  }

  if (hasPermissions === null) {
    return <Text >loading...</Text>
  }

  if (hasPermissions === false) {
    return <Text>Sorry, no access to the camera at this time.</Text>
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera}
        ref={camera}
        type={cameraType}
        flashMode={flash}
        onCameraReady={()=>setIsCameraReady(true)}
        />

{/* Top Buttons */}
      <View style={[styles.buttonContainer, {top:35}]}>
        <MaterialIcons name="close" size={30} color={colors.white}/>

        <Pressable>
          <MaterialIcons 
            onPress={flipFlash}
            name={flashName[flash]}
            size={30} color={colors.white}/>
        </Pressable>
        
        <MaterialIcons name="settings" size={30} color={colors.white}/>
      </View>
{/* Bottom Buttons */}
      <View style={[styles.buttonContainer, {bottom:25}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white}/>
        
        {isCameraReady && 
          <Pressable onPress={takePic}
              onLongPress={startRecording}
              onPressOut={stopRecording}>
           <View style={styles.circle}>
              
            <View style={[styles.circleInner, {backgroundColor: isRecording? colors.red : colors.black}]} />
            </View>
             
          </Pressable>}

        <Pressable onPress={flipCamera}>
          <MaterialIcons name="flip-camera-ios" size={30} color={colors.white}/>
        </Pressable>

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black
  },
  camera: {
    aspectRatio: 3/4,
    width: "100%"
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'absolute'
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: colors.white
  },

  circleOuter: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleInner: {
    width: '90%', // Adjust this value to control the size of the inner circle
    aspectRatio: 1,
    borderRadius: 100, // Use a high value to make it a circle
    // backgroundColor: 'black', // This is the black border color
  },
})

export default PostUploadScreen