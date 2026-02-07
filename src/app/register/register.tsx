import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./stylePageRegister";


export default function Register() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
         
            <View>
                <Text style={styles.textAccount}>Create Your</Text>
                <Text style={styles.textAccount}>Account</Text>
                
            </View>
        </SafeAreaView>
    )
}