import api from '../services/api'; // Ajuste o caminho da sua api se precisar
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
    // LOGIN
    async login(credentials: any) {
        try {
            const response = await api.post('/auth/login', credentials);
            
            // Aqui pegamos o token que o seu backend NestJS devolveu.
            // DICA: Confirme se o seu NestJS devolve "access_token" ou apenas "token".
            const token = response.data.access_token; 
            
            if (token) {
                // Salva o token no "cofre" do celular
                await AsyncStorage.setItem('@lumen_token', token);
            }

            return response.data;
        } catch (error: any) {
            const message = error.response?.data?.message || "Erro ao fazer login";
            throw new Error(message);
        }
    }

    // LOGOUT
    async logout() {
        try {
            // Se o seu backend tem uma rota de logout (para invalidar sessão, por exemplo), chamamos ela:
            await api.post('/auth/logout');
            
            // O MAIS IMPORTANTE: Removemos o token do celular para o usuário deslogar de fato
            await AsyncStorage.removeItem('@lumen_token');
        } catch (error: any) {
            console.log("Erro ao deslogar no backend, forçando logout local...", error);
            // Mesmo se a API falhar, garantimos que o token saia do celular
            await AsyncStorage.removeItem('@lumen_token');
        }
    }
}

// Exportamos a instância (Singleton)
export default new AuthService();