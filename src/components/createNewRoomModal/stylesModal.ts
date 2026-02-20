import { StyleSheet } from "react-native";
import { DefaultColors } from "@/src/utils/colors/defaultColors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    contente: {
        backgroundColor: DefaultColors.background,
        height: '95%', 
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
});
export default styles;