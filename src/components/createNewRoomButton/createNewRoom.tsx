import { TouchableOpacity } from "react-native";
import styles from "./styleCreateRoom";
import AntDesign from '@expo/vector-icons/AntDesign';


interface PropsButtonCreateRoom{
    onPress: () => void;
}

export default function ButtonCreateRoom({ onPress }: PropsButtonCreateRoom) {
    return (
        
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
    );
}