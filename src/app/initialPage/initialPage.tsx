import { View, Text, TouchableOpacity,ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter} from "expo-router";
import styles from "./stylePageSignin";



export default function InitialPage() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.viewTiltle}>
                <Text style={styles.textTitle}>LÚMEN</Text>
                <Text style={styles.textSubTitle}>PRIVATE GALLERY</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.viewBottum}>

                    <TouchableOpacity style={styles.button}>
                        <AntDesign style={styles.iconPosition} name="google" size={24} color="white" />

                        <Text style={styles.textButton}>Sign in with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <AntDesign style={styles.iconPosition} name="apple" size={24} color="white" />

                        <Text style={styles.textButton}>Sign in with Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>router.navigate('../login/login')} >
                        <Fontisto style={styles.iconPosition} name="email" size={24} color="white" />

                        <Text style={styles.textButton}>Sign in with Email</Text>
                    </TouchableOpacity>
                    <Text style={styles.textRegister}>Don't have an account? <Link href="/register/register" style={styles.textLink}>Sign Up</Link> </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}