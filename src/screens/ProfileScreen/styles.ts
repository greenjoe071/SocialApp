import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";

export default StyleSheet.create({
    HeadContainer: {
        padding: 10

    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    avatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 15
    },
    stats: {
        alignItems: "center"

    },
    numbers: {
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.full,
        color: colors.black

    },
    name: {
        fontWeight: fonts.weight.semi,
        color: colors.black,
    }
    })