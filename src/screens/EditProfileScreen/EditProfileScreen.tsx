import {useState} from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


import user from "../../assets/data/user.json"
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import { IUser } from '../../types/models'

import { useForm, Controller, Control } from 'react-hook-form'

const URL_REGEX =
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserFields >

interface ICustomInput {
    control: Control<IEditableUser, object> 
    label: string;
    name: IEditableUserFields
    multiline?: boolean;
    rules?: object
}

const CustomInput = ({ 
    label, 
    name, 
    control, 
    multiline = false,
    rules = {} 
}: ICustomInput) => (
    <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {

            return (
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{label}</Text>
                <View style={{flex: 1}}>
                     <TextInput 
                    style={[styles.input, {borderColor: error? colors.red : colors.border}]}
                    placeholder={"Enter: " + label}
                    multiline={multiline}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                />
                {error && <Text style={{color: colors.red}}>{error.message || "Something is Wrong"}</Text>}
                </View>
               
            </View>
        )}}
    />
)

const EditProfileScreen = () => {
    const [selcectedProfilePic, setSelectedProfilePic] = useState<null | Asset>(null)


    const { 
        control, 
        handleSubmit, 
        formState: {errors}
    } = useForm<IEditableUser>({
        defaultValues: {
            name: user.name,
            username: user.username,
            website: user.website,
            bio: user.bio,

        }
    })

    const onChangePic = () => {
        // console.warn("Change Photo Button Pressed")
        launchImageLibrary(
            {mediaType: 'photo'}, ({
                didCancel, 
                errorCode, 
                errorMessage, 
                assets
            }) => {
                if (!didCancel && !errorCode && assets && assets.length >0) {
                    setSelectedProfilePic(assets[0])
                    console.log("selectedpic:", selcectedProfilePic)
                }
        })
    }
    const onSubmit = (data: IEditableUser) => {
        // console.warn("submit button pressed")
        console.log("data: ", data)
    }
    console.log(errors)

    return (
        <View style={styles.page}>
            <Image source={{uri: selcectedProfilePic?.uri || user.image }} style={styles.avatar} />
            <Text onPress={onChangePic} style={styles.textButton}>Change Profile Photo</Text>

            <CustomInput name="name" 
                control={control} 
                label="Name"
                rules={{required: "Name is required"}} />
            <CustomInput name="username" 
                control={control} 
                label="Username" 
                rules={{required: "Username is required", minLength: {value: 4, message: "Username needs to be 4 or more characters"}}} />
            <CustomInput name="website" 
                control={control} 
                label="Website"
                rules={{pattern: {value: URL_REGEX, message: "Invalid URL, Did you start with HTTP?"}}}
                 />
            <CustomInput name="bio" 
                control={control} 
                label="Bio" 
                multiline 
                rules={{
                    maxLength: {value: 200, message: "Bio should be less than 200 characters"}
                }} />

            <Text onPress={handleSubmit(onSubmit)}
                style={styles.textButton}>Submit</Text>
        </View>
    )
}
// console.log(user.image)

const styles = StyleSheet.create({

    page: {
        alignItems: "center",
        padding: 10

    },
    avatar: {
        width: "30%",
        aspectRatio: 1,
        borderRadius: 25,
    },
    textButton: {
        color: colors.primary,
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,

        margin: 10
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "stretch"
    },

    label: {
        width: 80
    },

    input: {
        
        borderColor: colors.border,
        borderBottomWidth: 1
    }


})

export default EditProfileScreen