import { StyleSheet } from "react-native";
import { DefaultColors } from "@/src/utils/colors/defaultColors";

const styles = StyleSheet.create({

defaultButtom: {
        width: '100%',
        height: '12%',
        backgroundColor: DefaultColors.button,
        borderRadius:30, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 8,
    },
     buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});
export default styles;