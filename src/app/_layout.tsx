import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DefaultColors } from '@/src/utils/colors/defaultColors';

export default function StackLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login/login" options={{ 
        headerShown: true, 
        headerTitle: '', 
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#000000' } 
      }} />
      <Stack.Screen name="register/register" options={{ 
        headerShown: true, 
        headerTitle: '', 
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#000000' } 
      }} />
      <Stack.Screen name="roomPhotos/[roomId]" options={{
        headerShown: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#000000' },
      }}
       />

      
    </Stack>
  );
}