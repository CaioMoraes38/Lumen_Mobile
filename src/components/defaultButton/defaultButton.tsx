import { TouchableOpacity, Text,  } from "react-native";
import styles from "./styleButton";

interface DefaultButtonProps {
    title:string,
    onPress: () => void,

}

export default function DefaultButton({title, onPress}: DefaultButtonProps) {
    return (
        <TouchableOpacity style={[styles.defaultButtom]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )


}
