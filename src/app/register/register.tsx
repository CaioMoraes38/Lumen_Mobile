import DefaultButton from '@/src/components/defaultButton/defaultButton';
import Input from '@/src/components/defaultInput/defaultInput';
import { AntDesign, Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerUser } from '../../auth/authService';
import { useRouter } from 'expo-router';
import styles from "./stylePageRegister";

export default function Register() {
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'], 
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleRegister = async () => {
        const { name, age, email, password, confirmPassword } = form;

        if (!name || !age || !email || !password) {
            return Alert.alert("Erro", "Preencha todos os campos obrigatórios");
        }
        if (password !== confirmPassword) {
            return Alert.alert("Erro", "As senhas não coincidem");
        }

        try {
            setLoading(true);

            const userData = {
                name,
                email,
                password,
                age: Number(age),
                imageUri: image 
            };

            await registerUser(userData);
                            router.replace('/(tabs)/home');

            
        } catch (error: any) {
            Alert.alert("Erro no Cadastro", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>

                <View>
                    <Text style={styles.textAccount}>Create Your</Text>
                    <Text style={styles.textAccount}>Account</Text>
                </View>

                <View style={styles.uploadContainer}>
                    <TouchableOpacity onPress={pickImage} activeOpacity={0.8} disabled={loading}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.imageFilled} />
                        ) : (
                            <View style={styles.uploadCircle}>
                                <Feather name="camera" size={32} color="#6B7280" />
                                <Text style={styles.uploadLabel}>Upload</Text>
                            </View>
                        )}
                        <View style={styles.plusBadge}>
                            <AntDesign name="plus" size={20} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.formContainer}>
                    <Input
                        placeholder="Full Name"
                        onChangeText={(val) => setForm({ ...form, name: val })}
                        value={form.name} 
                        editable={!loading}
                    />
                    <Input
                        placeholder="Age"
                        keyboardType="numeric"
                        onChangeText={(val) => setForm({ ...form, age: val })}
                        value={form.age}
                        editable={!loading}
                    />
                    <Input
                        placeholder="Email Address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(val) => setForm({ ...form, email: val })}
                        value={form.email}
                        editable={!loading}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry 
                        onChangeText={(val) => setForm({ ...form, password: val })}
                        value={form.password}
                        editable={!loading}
                    />
                    <Input
                        placeholder="Confirm Password"
                        secureTextEntry 
                        onChangeText={(val) => setForm({ ...form, confirmPassword: val })}
                        value={form.confirmPassword}
                        editable={!loading}
                    />
                
                    <DefaultButton 
                        title={loading ? "Carregando..." : "Register"} 
                        onPress={handleRegister} 
                    />
                </View>
            </ScrollView>

            <LinearGradient
                colors={['transparent', 'rgba(124, 58, 237, 0.28)']}
                style={styles.bottomGlow}
                pointerEvents="none"
            />
        </SafeAreaView>
    );
}