import { StyleSheet } from "react-native";
import { DefaultColors } from "../../utils/colors/defaultColors";

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: DefaultColors.background,
        justifyContent: "center",
        flexGrow:1,
    },
    formContainer: {
        flex: 2,
        paddingHorizontal: '5%',
        paddingTop: '10%',
        gap: 16, 
    },
    viewText: {
       marginTop: '5%',
    },
     textAccount: {
        fontSize: 40,
        fontWeight: "bold",
        color: DefaultColors.text,
        textAlign: "left",
        textShadowColor: 'rgba(124, 58, 237, 0.5)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10,
        marginLeft: '2%',
    },
    textSubTitle: {
        color: "#ddd6fe", 
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8,
        textTransform: "uppercase",
        opacity: 0.8,
        marginLeft: '2%',

    },
    label:{
        color: "#ddd6fe",
        fontSize: 14,
        fontWeight: "600",
        marginLeft: '2%',

    },
     labelForgotPassword:{
        color: "#ddd6fe",
        fontSize: 14,
        fontWeight: "600",
        marginLeft: '2%',
        textAlign: "right",
        marginBottom: "20%"
    }
});
export default styles;