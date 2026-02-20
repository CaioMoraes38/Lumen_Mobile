import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/src/components/defaultInput/defaultInput";
import DefaultButton from "@/src/components/defaultButton/defaultButton";
import { View, Text, Alert } from "react-native";
import styles from "./stylesLoginCreate";
import { useState } from "react";
import { useRouter } from "expo-router";
import  AuthService  from "../../auth/loginService";

export default function Login() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async () => {
        const { email, password } = form;
        if (!email || !password) {
            return Alert.alert("Erro", "Preencha todos os campos");
        }
        try {
            await AuthService.login({ email, password });

            router.replace('/(tabs)/home');

        } catch (error: any) {
            Alert.alert("Erro no Login", error.message);
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.viewText}>
                <Text style={styles.textAccount}>Welcome Back</Text>
                <Text style={styles.textSubTitle}>Please sign in to access your account</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.label}>
                    Email Address
                </Text>
                <Input
                    placeholder="Email"
                    onChangeText={(text) => setForm({ ...form, email: text })} />
                <Text style={styles.label}>
                    Password
                </Text>
                <Input
                    placeholder="Password"
                    secureTextEntry={true}

                    onChangeText={(text) => setForm({ ...form, password: text })} />

                <Text style={styles.labelForgotPassword}>
                    Forgot Password?
                </Text>
                <DefaultButton
                    title="Sign In"
                    onPress={handleLogin} />
            </View>

        </SafeAreaView>
    );
}