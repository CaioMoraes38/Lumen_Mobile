import { StyleSheet } from "react-native";
import { DefaultColors } from "../../utils/colors/defaultColors";
const styles = StyleSheet.create({
    button: {
        width: "15%",
        height: "8%",
        borderRadius: 90,
        marginBottom: "1%",
        position: "absolute",
        bottom: "1%",
        right: "5%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: DefaultColors.button,

    },
});

export default styles;