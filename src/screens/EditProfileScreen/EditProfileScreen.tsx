import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import user from "../../assets/data/user.json"
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

interface ICustomInput {
    label: string
    multiline?: boolean
}

const CustomInput = ({label, multiline = false}: ICustomInput) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input}
            placeholder= {"Enter: " + label}
            multiline={multiline} />
    </View>
)

const EditProfileScreen = () => {
    const onSubmit = () => {
        console.warn("submit button pressed")
    }


  return (
    <View style={styles.page}>
        <Image source={{ uri: user.image }} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>

        <CustomInput label="Name"/>
        <CustomInput label="Username"/>
        <CustomInput label="Website"/>
        <CustomInput label="Bio" multiline/>

      <Text onPress={onSubmit}
      style={styles.textButton}>Submit</Text>
    </View>
  )
}
// console.log(user.image)

const styles = StyleSheet.create ({

page: {
    alignItems: "center",
    padding: 10

},
avatar: {
    width:"30%",
    aspectRatio: 1,
    borderRadius: 100,
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
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1
}


})

export default EditProfileScreen